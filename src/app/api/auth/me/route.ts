import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../../prisma/prisma-client";
export async function GET() {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
      return NextResponse.json({ user: null });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "") as {
      id: number;
    };
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}
