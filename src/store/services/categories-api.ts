import { Category } from "@prisma/client";
import { api } from "./api";
import { ApiRoutesEnum } from "./constants";

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ApiRoutesEnum.CATEGORIES,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
