"use client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store";
import { AuthModal } from "./modals";
import NextTopLoader from "nextjs-toploader";
export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <NextTopLoader color="#70C05B" height={3} />
      <AuthModal />
      <Toaster position="top-right" />
    </Provider>
  );
};
