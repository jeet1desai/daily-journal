import { connect } from "@/dbConfig/config";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // check user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User with this email not exist" }, { status: 400 });
    }

    // check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "User with this credential not exist" }, { status: 400 });
    }

    // create token
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "6h" });

    const response = NextResponse.json({ message: "Login successful", success: true, userId: user.id }, { status: 201 });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
