import { connect } from "@/dbConfig/config";
import { getDataFromToken } from "@/lib/getTokenData";
import Note from "@/models/noteModal";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "User is not exist!" }, { status: 400 });
    }

    const searchParam = request.nextUrl.searchParams;
    const title = searchParam.get("title");

    let filter: any = { user: userId };
    if (title) {
      filter.title = { $regex: new RegExp(title, "i") };
    }

    const list = await Note.find(filter);
    return NextResponse.json({ message: "Posts found", success: true, post: list }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, content } = reqBody;

    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "User is not exist!" }, { status: 400 });
    }

    const newPost = new Note({ title, content, user: userId });
    const savedPost = await newPost.save();

    return NextResponse.json({ message: "Post is created", success: true, savedPost }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, content, id } = reqBody;

    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "User is not exist!" }, { status: 400 });
    }

    const noteObjectId = new mongoose.Types.ObjectId(id);
    const note = await Note.findOne({ _id: noteObjectId });
    if (!note) {
      return NextResponse.json({ error: "Note is not exist!" }, { status: 400 });
    }
    note.title = title;
    note.content = content;
    await note.save();

    return NextResponse.json({ message: "Post is updated", success: true, note }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
