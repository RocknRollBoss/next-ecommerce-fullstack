"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PropsWithChildren, useState } from "react";
import { RegisterForm } from "../forms/register-form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LoginForm } from "../forms/login-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeAuthModal, openAuthModal } from "@/store/features/modalSlice";
export const AuthModal: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const openModal = useSelector((state: RootState) => state.modal.openModal);

  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <Dialog
      open={openModal}
      onOpenChange={(isOpen) =>
        isOpen ? dispatch(openAuthModal()) : dispatch(closeAuthModal())
      }
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogTitle>
          <VisuallyHidden>Create Account</VisuallyHidden>
        </DialogTitle>
        {isLoginForm ? (
          <LoginForm
            onSucces={() => dispatch(closeAuthModal())}
            setIsLoginForm={setIsLoginForm}
          />
        ) : (
          <RegisterForm
            onSucces={() => dispatch(closeAuthModal())}
            setIsLoginForm={setIsLoginForm}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
