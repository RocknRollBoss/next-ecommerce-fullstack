import { CartResponse } from "@/store/services/cart-api";

export const calcTotalPrice = (cartItems: CartResponse | 0): number => {
  if (!cartItems) {
    return 0;
  }
  return cartItems?.items.reduce(
    (ac, item) => ac + item.product.price * item.quantity,
    0
  );
};
