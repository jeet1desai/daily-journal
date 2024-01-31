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
