import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_EXPIRES = 7 * 24 * 60 * 60;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) {
      return NextResponse.json(
        { message: "Invalid login or password" },
        { status: 400 }
      );
    }

    const confirmPassword = await bcrypt.compare(password, findUser.password);

    if (!confirmPassword) {
      return NextResponse.json(
        { message: "Invalid login or password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: findUser.id, email: findUser.email },
      process.env.JWT_SECRET_KEY || "",
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({
      message: "Logged in",
      user: {
        id: findUser.id,
        email: findUser.email,
        username: findUser.username,
      },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: JWT_EXPIRES,
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
