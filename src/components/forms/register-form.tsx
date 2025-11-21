"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, TRegisterForm } from "./schemas";
import { useRegisterMutation } from "@/store/services/user-api";
import toast from "react-hot-toast";
interface Props {
  onSucces: () => void;
  setIsLoginForm: (value: boolean) => void;
}

export function RegisterForm({ onSucces, setIsLoginForm }: Props) {
  const [register, { isLoading }] = useRegisterMutation();
  const form = useForm<TRegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  async function onSubmit(values: TRegisterForm) {
    try {
      const { password, username, email } = values;
      await register({ password, username, email }).unwrap();
      toast.success(" Registration was successful");
      onSucces?.();
    } catch (error) {
      return toast.error("Failed to register");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Register
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      className="border-2 border-[#70C05B] focus:border-[#70C05B]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...field}
                      className="border-2 border-[#70C05B] focus:border-[#70C05B]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      className="border-2 border-[#70C05B] focus:border-[#70C05B]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      {...field}
                      className="border-2 border-[#70C05B] focus:border-[#70C05B]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full mt-2 bg-[#70C05B] text-white hover:bg-[#FF6633]"
            >
              Register
            </Button>
            <p
              className="text-center mt-4 text-sm text-gray-600"
              onClick={() => setIsLoginForm(true)}
            >
              Don't have an account?
              <span className="text-[#70C05B] hover:text-[#FF6633] font-medium">
                Login
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
