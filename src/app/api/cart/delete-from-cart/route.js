
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id)
        return NextResponse.json({
          success: false,
          message: "شناسه کالای سبد خرید الزامی است",
        });

      const deleteCartItem = await Cart.findByIdAndDelete(id);

      if (deleteCartItem) {
        return NextResponse.json({
          success: true,
          message: "مورد سبد خرید با موفقیت حذف شد",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "مورد سبد خرید حذف نشد! لطفا دوباره تلاش کنید.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "شما احراز هویت نشده اید",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "مشکلی پیش آمد! لطفا دوباره تلاش کنید",
    });
  }
}
