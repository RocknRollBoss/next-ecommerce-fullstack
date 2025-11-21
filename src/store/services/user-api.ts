import { api } from "./api";
import { ApiRoutesEnum } from "./constants";
import { User } from "@prisma/client";
import { TLoginForm, TRegisterForm } from "@/components/forms/schemas";
type RegisterForm = Omit<TRegisterForm, "confirmpassword">;

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<User, RegisterForm>({
      query: (body) => ({
        url: ApiRoutesEnum.REGISTER,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<User, TLoginForm>({
      query: (body) => ({
        url: ApiRoutesEnum.LOGIN,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User", "Cart"],
    }),
    getMe: builder.query<User, void>({
      query: () => ApiRoutesEnum.ME,
      providesTags: ["User"],
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: ApiRoutesEnum.LOGOUT,
        method: "POST",
      }),
      invalidatesTags: ["User", "Cart"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useLogOutMutation,
} = userApi;
