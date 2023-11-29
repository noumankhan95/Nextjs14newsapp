import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import Article from "@/models/Article";
export async function POST(
  req: NextRequest,
  { params }: { params: { pid: string } }
) {
  try {
    const body = await req.json(); //body
    const url = req.nextUrl;
    const queryParams = url.searchParams.get("id"); //queryparams
    const reqparams = params; //from 2nd arg of function
    console.log(body, "body");
    console.log(queryParams, "params");
    console.log(reqparams, "reqparams");

    await dbConnect();
    let newArticle = await Article.findOneAndUpdate(
      { author: "John Doe" },
      { $set: { author: "Jane Doe" } }
    );
    return NextResponse.json({ status: 1, article: newArticle });
  } catch (e) {
    return NextResponse.json({ status: 0, data: { message: "Error" + e } });
  }
}
