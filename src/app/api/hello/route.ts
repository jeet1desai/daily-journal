// Learn API with NEXT JS

import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const searchParam = request.nextUrl.searchParams;
  const query = searchParam.get("query");
  return Response.json("Hello");
}

// export async function GET_ONE(_request: Request, { params }: { params: { id: string } }) {
//   redirect("/login");
//   // return new Response("Hello");
// }

export async function POST(request: Request) {
  return Response.json("Hello", {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  return Response.json(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  const reqHeader = new Headers(request.headers); // bearer
  console.log(reqHeader.get("Authorization"));
  return new Response("Hello");
}
