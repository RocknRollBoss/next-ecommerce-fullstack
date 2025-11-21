import { Product } from "@prisma/client";
import { api } from "./api";
import { ApiRoutesEnum } from "./constants";

interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  product: Product;
}

export interface CartResponse {
  id: number;
  userId: number;
  items: CartItem[];
}

export type QuantityResponse = Omit<CartItem, "product">;
export type QuantityParams = Pick<CartItem, "quantity" | "productId">;

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCartItems: builder.query<CartResponse, void>({
      query: () => ApiRoutesEnum.CART,
      providesTags: ["Cart"],
    }),
    addCartItem: builder.mutation({
      query: (body) => ({
        url: ApiRoutesEnum.CART,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    changeItemQuantity: builder.mutation<QuantityResponse, QuantityParams>({
      query: (body) => ({
        method: "PATCH",
        url: ApiRoutesEnum.CART,
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation<string, number>({
      query: (productId) => ({
        method: "DELETE",
        url: ApiRoutesEnum.CART,
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useChangeItemQuantityMutation,
  useRemoveCartItemMutation,
} = cartApi;
