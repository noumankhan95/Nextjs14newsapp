import { NextRequest, NextResponse } from "next/server";
import Article from "@/models/Article";
import dbConnect from "@/lib/dbconnect";
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const searchParams = req.nextUrl.searchParams;
    let category = searchParams.get("cat");
    let title = searchParams.get("term");
    let res;
    if (title) {
      res = await Article.find({ title: { $regex: title, $options: "i" } });
    } else if (category) {
      res = await Article.find({ category });
    }
    console.log(res)
    return NextResponse.json({ status: 1, data: { docs: res } });
  } catch (e) {
    return NextResponse.json({ status: 0, data: { message: e } });
  }
}
