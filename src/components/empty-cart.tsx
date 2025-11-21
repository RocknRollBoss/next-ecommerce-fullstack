import React from "react";
import { Button } from "./ui";
import Link from "next/link";

export const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <img
        src="images/cart/empty-cart.png"
        alt="Empty cart"
        className="w-32 h-32"
      />
      <h2 className="text-xl font-semibold">Your cart is empty</h2>
      <p className="text-sm text-muted-foreground">
        Looks like you haven’t added anything yet.
      </p>
      <Link href="/">
        <Button
          className=" text-[#70C05B] border border-[#70C05B] bg-white hover:bg-[#FF6633] hover:text-white cursor-pointer duration-350"
          variant="default"
        >
          Start shopping
        </Button>
      </Link>
    </div>
  );
};
