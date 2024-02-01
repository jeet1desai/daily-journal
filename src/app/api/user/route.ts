import { connect } from "@/dbConfig/config";
import { getDataFromToken } from "@/lib/getTokenData";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({ message: "User found", success: true, user: user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, profilePicture } = reqBody;

    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "User is not exist!" }, { status: 400 });
    }

    user.name = name;
    user.profilePicture = profilePicture;
    await user.save();

    return NextResponse.json({ message: "User updated", success: true, user: user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
