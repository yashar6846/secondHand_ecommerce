
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "لطفا وارد شوید",
        });
      const extractAllCartItems = await Cart.find({ userID: id }).populate(
        "productID"
      );

      if (extractAllCartItems) {
        return NextResponse.json({ success: true, data: extractAllCartItems });
      } else {
        return NextResponse.json({
          success: false,
          message: "هیچ کالای سبد خرید یافت نشد!",
          status: 204,
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "شما احراز هویت نشده اید",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "مشکلی پیش آمد! لطفا دوباره تلاش کنید",
    });
  }
}
