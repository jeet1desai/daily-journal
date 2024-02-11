import { connect } from "@/dbConfig/config";
import { getDataFromToken } from "@/lib/getTokenData";
import Note from "@/models/noteModal";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "User is not exist!" }, { status: 400 });
    }

    const noteObjectId = new mongoose.Types.ObjectId(params.id);
    const note = await Note.findOneAndDelete({ _id: noteObjectId });

    if (!note) {
      return NextResponse.json({ error: "Note is not exist!" }, { status: 400 });
    }

    return NextResponse.json({ message: "Post is deleted", success: true, note }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
