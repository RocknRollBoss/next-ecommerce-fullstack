"use client";
import { EllipsisVertical, Minus, Plus, Trash2 } from "lucide-react";
import { Button, Title } from "./ui";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { QuantityParams } from "@/store/services/cart-api";
interface Props {
  id: Number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  increasedItemQuantity: (body: QuantityParams) => void;
  decreaseItemQuantity: (body: QuantityParams) => void;
  removeCartItemFromCart: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  increasedItemQuantity,
  decreaseItemQuantity,
  removeCartItemFromCart,
}) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          <img className="w-20 h-20 " src={imageUrl} alt={name} />
          <div className="flex flex-col gap-2">
            <Title size="sm" text={name.toUpperCase()} />
            <div className="flex gap-2 items-center">
              <p className="text-[12px] font-bold">{+price}$</p>
              <span className="text-[#606060] text-[12px]">per piece</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              disabled={quantity === 1}
              className="bg-[#70C05B] hover:bg-[#FF6633] duration-300 px-2 py-1"
              onClick={() =>
                decreaseItemQuantity({
                  productId: Number(id),
                  quantity: +quantity > 1 ? +quantity - 1 : 1,
                })
              }
            >
              <Minus className="w-[15px] h-[15px]" />
            </Button>

            <span className="text-[14px]">{+quantity}</span>

            <Button
              className="bg-[#70C05B] hover:bg-[#FF6633] duration-300 px-2 py-1"
              onClick={() =>
                increasedItemQuantity({
                  productId: Number(id),
                  quantity: +quantity + 1,
                })
              }
            >
              <Plus className="w-[15px] h-[15px]" />
            </Button>
          </div>

          <div className="min-w-[80px] text-right">
            <Title
              size="sm"
              text={`${Number(price) * Number(quantity)} $`}
              className="text-[#565656] font-bold text-[18px]"
            />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <EllipsisVertical />
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <button
                className="flex gap-2 border-none outline-0 hover:text-red-500 w-full"
                onClick={() => removeCartItemFromCart(Number(id))}
              >
                <Trash2 />
                <span>Delete</span>
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
