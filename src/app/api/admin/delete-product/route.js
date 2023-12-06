
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "شناسه محصول الزامی است",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "محصول با موفقیت حذف شد",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "محصول حذف نشد! لطفا دوباره تلاش کنید",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "شما احراز هویت نشده اید",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "مشکلی پیش آمد! لطفاً بعداً دوباره امتحان کنید",
    });
  }
}
