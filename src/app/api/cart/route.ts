import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { getUserFromToken } from "@/lib/getUserFromToken";

export async function GET() {
  const user = await getUserFromToken();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const cart = await prisma.cart.findUnique({
    where: { userId: user.id },
    include: { items: { include: { product: true } } },
  });

  return NextResponse.json(cart ?? { items: [] });
}

export async function POST(req: NextRequest) {
  const user = await getUserFromToken();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId, quantity = 1 } = await req.json();

  let cart = await prisma.cart.findUnique({ where: { userId: user.id } });
  if (!cart) {
    cart = await prisma.cart.create({ data: { userId: user.id } });
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity },
    });
  }

  return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest) {
  const user = await getUserFromToken();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId, quantity } = await req.json();
  if (!productId || quantity < 1) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const cart = await prisma.cart.findUnique({ where: { userId: user.id } });
  if (!cart)
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });

  const item = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });
  if (!item)
    return NextResponse.json({ error: "Item not found" }, { status: 404 });

  const updatedItem = await prisma.cartItem.update({
    where: { id: item.id },
    data: { quantity },
  });

  return NextResponse.json(updatedItem);
}

export async function DELETE(req: NextRequest) {
  const user = await getUserFromToken();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId } = await req.json();

  const cart = await prisma.cart.findUnique({ where: { userId: user.id } });
  if (!cart)
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id, productId },
  });

  return NextResponse.json({ success: true });
}
