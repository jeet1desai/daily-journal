import { connect } from "@/dbConfig/config";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // check user exist
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User with this email already exist" }, { status: 400 });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({ name, email, password: hashPassword });
    const savedUser = await newUser.save();

    return NextResponse.json({ message: "User is created", success: true, savedUser }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
