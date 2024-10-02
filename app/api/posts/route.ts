import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongo"


export async function POST(request: NextRequest) {
    const client = await clientPromise;
    const db = client.db("posts");
    const { title, content} = await request.json()

    const post = await db.collection("posts").insertOne({
      title,
      content,
    });
    return NextResponse.json({Healthdata: post})
}

export async function GET(){
    return NextResponse.json({Healthdata: "The data"})
}
