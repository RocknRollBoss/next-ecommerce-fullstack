import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, username, password } = await req.json();
    if (!email || !username || !password) {
      return NextResponse.json({
        message: "All fields are required",
        status: 400,
      });
    }
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (findUser) {
      return NextResponse.json({ message: '"User already exists" ' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashPassword,
      },
    });
    return NextResponse.json({ user, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", status: 500 });
  }
}
