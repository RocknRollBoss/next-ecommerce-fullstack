import z from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Please enter the correct email" }),
    password: z
      .string()
      .min(4, { message: "Please enter the correct password" }),
    confirmpassword: z
      .string()
      .min(4, { message: "Please enter the correct password" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter the correct email" }),
  password: z.string().min(4, { message: "Please enter the correct password" }),
});

export type TRegisterForm = z.infer<typeof registerSchema>;
export type TLoginForm = z.infer<typeof loginSchema>;
