import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Products", "User", "Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),

  endpoints: () => ({}),
});
