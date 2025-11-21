import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryIdParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const sortParam = searchParams.get("sort");

  let orderBy: any = undefined;

  if (sortParam) {
    switch (sortParam) {
      case "rating_desc":
        orderBy = { rating: "desc" };
        break;
      case "rating_asc":
        orderBy = { rating: "asc" };
        break;
      case "price_desc":
        orderBy = { price: "desc" };
        break;
      case "price_asc":
        orderBy = { price: "asc" };
        break;
    }
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          categoryIdParam ? { categoryId: Number(categoryIdParam) } : {},
          searchParam ? { name: { contains: searchParam } } : {},
        ],
      },
      orderBy,
      include: {
        category: true,
        user: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
