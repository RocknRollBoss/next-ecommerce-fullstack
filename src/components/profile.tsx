"use client";
import { Button, Loader } from ".";
import { useGetMeQuery, useLogOutMutation } from "@/store/services/user-api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { openAuthModal } from "@/store/features/modalSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export const Profile: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: user, isLoading } = useGetMeQuery();
  const [logOut] = useLogOutMutation();
  if (isLoading) {
    return <Loader className="w-5 h-5" />;
  }
  const handleLogoutClick = () => {
    logOut().unwrap();
    router.push("/");
  };

  return (
    <>
      {user && user.username ? (
        <div className="md:ml-4">
          <div className="flex gap-2 items-center">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>{user.username}</span>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-1 hover:opacity-80">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <div className="flex flex-col border-b pb-2 mb-2">
                    <span className="font-semibold">{user.username}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                  <button className="text-left px-2 py-1 rounded-lg hover:bg-gray-100 transition">
                    Settings
                  </button>
                  <button
                    disabled={isLoading}
                    className="text-left px-2 py-1 rounded-lg hover:bg-gray-100 text-red-500 transition"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => dispatch(openAuthModal())}
          className="px-6 bg-[#70C05B] hover:bg-[#FF6633] duration-350 cursor-pointer"
        >
          Sign in
        </Button>
      )}
    </>
  );
};
