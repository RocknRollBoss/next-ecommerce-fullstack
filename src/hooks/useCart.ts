import {
  QuantityParams,
  useChangeItemQuantityMutation,
  useGetCartItemsQuery,
  useRemoveCartItemMutation,
} from "@/store/services/cart-api";
import { calcTotalPrice, errorHelper } from "@/utils";
import { useState } from "react";

export const useCart = () => {
  const [isOrderExist, setIsOrderExist] = useState(false);
  const { data: cartItems, isLoading } = useGetCartItemsQuery();
  const [changeItemQuantity] = useChangeItemQuantityMutation();
  const [removeCartItem] = useRemoveCartItemMutation();
  const totalPrice = calcTotalPrice(cartItems || 0);

  const discount = (totalPrice! / 100) * 8;
  const onClickOrder = () => {
    setIsOrderExist(true);
  };
  const increasedItemQuantity = async (body: QuantityParams) => {
    try {
      const { productId, quantity } = body;
      await changeItemQuantity({
        productId,
        quantity,
      }).unwrap();
    } catch (error) {
      if (errorHelper(error)) {
        console.log(error.status);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  const decreaseItemQuantity = async (body: QuantityParams) => {
    try {
      const { productId, quantity } = body;
      await changeItemQuantity({ productId, quantity }).unwrap();
    } catch (error) {
      if (errorHelper(error)) {
        console.log(error.status);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };
  const removeCartItemFromCart = async (id: number) => {
    try {
      await removeCartItem(id).unwrap();
    } catch (error) {
      if (errorHelper(error)) {
        console.log(error.status);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  return {
    cartItems,
    discount,
    increasedItemQuantity,
    decreaseItemQuantity,
    removeCartItemFromCart,
    isLoading,
    totalPrice,
    onClickOrder,
    isOrderExist,
  };
};
