import React from "react";
import { prisma } from "../../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import {
  Container,
  FavouritesButton,
  ProductBlock,
  Stars,
  Title,
} from "@/components";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }

  const reviews = [...Array(product.rating)];
  const priceWithCard = (product.price * 0.8).toFixed(2);

  return (
    <Container>
      <div className="mt-[70px] flex flex-col gap-6">
        <Title
          className="text-[#414141] font-bold text-2xl"
          size="md"
          text={`${product.name.toUpperCase()}, ${product.description}`}
        />

        <div className="flex flex-wrap gap-4 items-center">
          <Stars rating={product.rating} />
          <span className="text-sm text-[#414141]">
            {reviews.length} reviews
          </span>
          <FavouritesButton
            isProductBlock
            name={product.name}
            id={product.id}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
            rating={product.rating}
          />
        </div>

        <ProductBlock priceWithCard={priceWithCard} product={product} />
      </div>
    </Container>
  );
}
