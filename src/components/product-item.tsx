import { Product } from "@prisma/client";
import { Title } from "./ui/title";
import { CartButton, FavouritesButton, Stars } from ".";
import Link from "next/link";

export type ProductProps = Omit<Product, "userId" | "categoryId">;
export const ProductItem: React.FC<ProductProps> = ({
  name,
  price,
  imageUrl,
  description,
  rating,
  id,
}) => {
  const priceWithCard = price - (price / 100) * 8;

  return (
    <div className="w-[275px] bg-white relative">
      <FavouritesButton
        name={name}
        price={price}
        imageUrl={imageUrl}
        description=""
        rating={rating}
        id={id}
      />
      <Link href={`/product/${id}`}>
        <div>
          <img
            className="w-full h-[160px] pb-2 "
            src={imageUrl}
            alt="product-item"
          ></img>
        </div>
      </Link>

      <Link href={`/product/${id}`}>
        <div className="flex flex-col gap-2 p-2">
          <div className=" flex justify-between">
            <div>
              <Title
                className="text-[18px] text-[#414141] font-bold leading-1.5"
                size="md"
                text={`${price}$`}
              ></Title>
              <p className="pt-2 text-[#BFBFBF] text-[12px]">Normal</p>
            </div>
            <div>
              <Title
                className="text-[18px] text-[#606060] font-bold leading-1.5"
                size="md"
                text={`${priceWithCard.toFixed(1)}$`}
              ></Title>
              <p className="pt-2 text-[#BFBFBF] text-[12px]">With card</p>
            </div>
          </div>
          <p className="text-[#414141] leading-1.5">
            {name.toUpperCase().slice(0, 15)}, {description.slice(0, 10)}
          </p>
          <Stars rating={rating} />
        </div>
      </Link>
      <div className="p-2">
        <CartButton productId={id} />
      </div>
    </div>
  );
};
