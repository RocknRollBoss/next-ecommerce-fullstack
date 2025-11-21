"use client";

import { CartButton } from "@/components";
import { CircleAlert, Bell } from "lucide-react";
import { Product } from "@prisma/client";
interface Props {
  product: Product;
  priceWithCard: string;
}

export const ProductBlock: React.FC<Props> = ({ product, priceWithCard }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full max-w-[500px] order-1">
        <img
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="flex flex-row lg:flex-col gap-3 order-2 justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <img
            key={i}
            className="h-[70px] w-[60px] sm:h-[85px] sm:w-[65px] object-cover rounded-md"
            src={product.imageUrl}
            alt={`preview-${i}`}
          />
        ))}
      </div>

      <div className="flex-1 order-3">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-baseline">
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#606060] text-xl sm:text-2xl">
              {product.price} $
            </p>
            <span className="text-[#BFBFBF] text-xs">Normal price</span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <p className="text-[#414141] text-2xl sm:text-4xl font-bold">
              {priceWithCard} $
            </p>
            <div className="flex gap-2 items-center">
              <span className="text-[#BFBFBF] text-xs">With discount card</span>
              <CircleAlert className="w-4 h-4 text-[#BFBFBF]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[300px] mx-auto lg:mx-0">
          <CartButton
            className="w-full mt-6 py-4 sm:py-5 text-lg sm:text-xl"
            productId={product.id}
          />

          <div className="mt-4">
            <div className="flex gap-1 hover:text-[#70C05B] items-center">
              <Bell className="w-4 h-4" />
              <p className="text-[#606060] text-[12px] sm:text-sm hover:text-[#70C05B]">
                Price drop notifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
