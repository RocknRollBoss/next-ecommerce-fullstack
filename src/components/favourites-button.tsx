"use client";
import { Heart, X } from "lucide-react";
import React from "react";
import { Button } from ".";
import {
  addItem,
  removeItem,
  selectFavourites,
} from "@/store/features/favouritesSlice";
import { TProduct } from "@/store/services/products-api";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
interface Props extends TProduct {
  isProductBlock?: boolean;
}
export const FavouritesButton: React.FC<Props> = ({
  name,
  id,
  price,
  imageUrl,
  description,
  rating,
  isProductBlock,
}) => {
  const { items } = useSelector(selectFavourites);
  const isAdded = items.find((item) => item.id === id);

  const dispatch = useDispatch();
  const pathName = usePathname();
  const onAddToFavourites = () => {
    if (isAdded?.id) {
      dispatch(removeItem(id));
      toast.success("Product delete from favourites");
    } else {
      dispatch(addItem({ name, id, price, imageUrl, description, rating }));
      toast.success("Product added to favourites");
    }
  };
  const onRemoveItem = () => {
    dispatch(removeItem(id));
    toast.success("Product delete from favourites");
  };

  return (
    <>
      {!isProductBlock ? (
        <div className="absolute top-2 right-2  p-2 hover:opacity-80 cursor-pointer">
          {pathName === "/" ? (
            <Button
              className={cn("bg-white hover:bg-white duration-300", {
                "bg-amber-500 hover:bg-amber-500 duration-300": isAdded,
              })}
              onClick={onAddToFavourites}
            >
              <Heart className="h-5 w-5 text-black" />
            </Button>
          ) : (
            <Button className="bg-white hover:bg-white" onClick={onRemoveItem}>
              <X className="h-5 w-5 text-black" />
            </Button>
          )}
        </div>
      ) : (
        <button
          onClick={onAddToFavourites}
          className="flex gap-2 items-center hover:opacity-70 duration-300"
        >
          <Heart
            className={cn("h-5 w-5 text-black", { "text-amber-500": isAdded })}
          />
          <span
            className={cn("text-sm text-[#414141] ", {
              "text-amber-500": isAdded,
            })}
          >
            favourites
          </span>
        </button>
      )}
    </>
  );
};
