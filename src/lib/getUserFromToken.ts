import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "../../prisma/prisma-client";

export async function getUserFromToken() {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "secret"
    ) as { id: number };
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    return user;
  } catch {
    return null;
  }
}
