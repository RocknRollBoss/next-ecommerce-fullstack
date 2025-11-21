import { Product } from "@prisma/client";
import { Filters } from "../features/filtersSlice";
import { api } from "./api";
import qs from "qs";

export type TProduct = Omit<Product, "userId" | "categoryId">;
export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      Product[],
      Partial<Filters & { search: string }>
    >({
      query: (filters = {}) => {
        const qsString = qs.stringify(filters, { skipNulls: true });
        return `api/products?${qsString}`;
      },
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
