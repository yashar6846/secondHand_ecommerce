import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const user = "admin";

      if (user === 'admin'){
        const extractAllproducts = await Product.find({});
        if (extractAllproducts) {
          return NextResponse.json({
            success: true,
            data: extractAllproducts,
          });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "هیچ محصولی یافت نشد",
        });
      }
      }else{
        return NextResponse.json({
          success: false,
          message: "شما مجاز نیستید",
        })
      }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "مشکلی پیش آمد! لطفاً بعداً دوباره امتحان کنید",
    });
  }
}
