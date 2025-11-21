"use client";
import React from "react";
import { Button } from ".";
import { cn } from "@/lib/utils";
import { useAddCartItemMutation } from "@/store/services/cart-api";
import { errorHelper } from "@/utils";
import toast from "react-hot-toast";
import { useGetMeQuery } from "@/store/services/user-api";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/store/features/modalSlice";

interface Props {
  className?: string;
  productId: number;
}

export const CartButton: React.FC<Props> = ({ className, productId }) => {
  const dispatch = useDispatch();
  const [addCartItem] = useAddCartItemMutation();
  const { data: user, isLoading, isError } = useGetMeQuery();

  const onClickToAdd = async () => {
    if (isLoading) return;

    if (!user?.id || isError) {
      dispatch(openAuthModal());
      return;
    }

    try {
      await addCartItem({ productId, quantity: 1 }).unwrap();
      toast.success("Product added to cart");
    } catch (error) {
      if (errorHelper(error)) {
        console.log(error.status);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  return (
    <Button
      onClick={onClickToAdd}
      disabled={isLoading}
      className={cn(
        "w-full  text-[#70C05B] border border-[#70C05B] bg-white hover:bg-[#FF6633] hover:text-white cursor-pointer duration-350",
        className
      )}
    >
      Add to cart
    </Button>
  );
};
