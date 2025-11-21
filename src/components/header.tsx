"use client";
import React from "react";
import { Container } from "./container";
import { MainLogo, MobileMenu, Profile, Search } from ".";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useGetCartItemsQuery } from "@/store/services/cart-api";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectFavourites } from "@/store/features/favouritesSlice";
import { useGetMeQuery } from "@/store/services/user-api";

export const Header: React.FC = () => {
  const { data: user } = useGetMeQuery();
  const [mounted, setMounted] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const { data: cartItems } = useGetCartItemsQuery();
  const { items } = useSelector(selectFavourites);

  const favCount = mounted ? items.length : 0;
  const cartCount = mounted ? cartItems?.items?.length || 0 : 0;

  return (
    <header className="bg-white sticky top-0 z-20 border-b">
      <Container className="py-3">
        <div className="flex justify-between items-center">
          <MainLogo />
          <div className="hidden md:block flex-shrink-0 w-[300px]">
            <Search />
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center">
              <li>
                <Link
                  href="/favourites"
                  className="flex flex-col gap-1 items-center"
                >
                  <Heart
                    className={cn("text-[#414141]", {
                      "text-[#FF6633]": favCount > 0,
                    })}
                  />
                  <span
                    className={cn("text-[10px]", {
                      "text-[#FF6633]": favCount > 0,
                    })}
                  >
                    Favorites
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={user?.id ? "/cart" : ""}
                  className="flex flex-col gap-1 items-center relative"
                >
                  {user?.id && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-[#FF6633] text-white text-[10px] flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                  <ShoppingCart
                    className={cn("text-[#414141]", {
                      "text-[#FF6633]": cartCount > 0 && user?.id,
                    })}
                  />
                  <span
                    className={cn("text-[10px]", {
                      "text-[#FF6633]": cartCount > 0 && user?.id,
                    })}
                  >
                    Cart
                  </span>
                </Link>
              </li>

              <Profile />
            </ul>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="mt-3 block md:hidden">
          <Search />
        </div>
      </Container>

      {menuOpen && (
        <MobileMenu
          favCount={favCount}
          cartCount={cartCount}
          userId={user?.id}
          setMenuOpen={setMenuOpen}
        />
      )}
    </header>
  );
};
