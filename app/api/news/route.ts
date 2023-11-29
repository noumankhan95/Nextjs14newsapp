import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import Article from "@/models/Article";
export async function POST(
  req: NextRequest,
  { params }: { params: { pid: string } }
) {
  try {
    const {
      author,
      category,
      description,
      image,
      country,
      language,
      published_at,
      source,
      title,
      uri,
    } = await req.json(); //body
    const url = req.nextUrl;
    const queryParams = url.searchParams.get("id"); //queryparams
    const reqparams = params; //from 2nd arg of function
    console.log(queryParams, "params");

    await dbConnect();
    let newArticle = await Article.create({
      author,
      category,
      description,
      image,
      country,
      language,
      published_at,
      source,
      title,
      url,
    });
    return NextResponse.json({ status: 1, article: newArticle });
  } catch (e) {
    return NextResponse.json({ status: 0, data: { message: "Error" + e } });
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    let newsArticles = await Article.find({});
    return NextResponse.json({ status: 1, data: { docs: newsArticles } });
  } catch (e) {
    return NextResponse.json({ status: 0, data: { message: e } });
  }
}
