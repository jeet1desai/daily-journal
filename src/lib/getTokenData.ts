import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token");

    if (token) {
      const newToken = token?.value || "";
      const decodeToken: any = jwt.verify(newToken, process.env.TOKEN_SECRET!);
      return decodeToken.id;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
