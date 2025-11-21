import React from "react";
import { Container, Profile } from ".";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
interface Props {
  favCount: number;
  cartCount: number;
  userId?: number;
  setMenuOpen: (value: boolean) => void;
}

export const MobileMenu: React.FC<Props> = ({
  favCount,
  cartCount,
  userId,
  setMenuOpen,
}) => {
  return (
    <div className="md:hidden bg-white border-t shadow-sm">
      <Container>
        <ul className="flex flex-col gap-4 py-4">
          <li>
            <Link
              href="/favourites"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <Heart
                className={cn("text-[#414141]", {
                  "text-[#FF6633]": favCount > 0,
                })}
              />
              <span
                className={cn("text-sm", {
                  "text-[#FF6633]": favCount > 0,
                })}
              >
                Favorites
              </span>
            </Link>
          </li>

          <li>
            <Link
              href={userId ? "/cart" : ""}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 relative"
            >
              {userId && cartCount > 0 && (
                <span className="absolute -top-2 left-4 w-4 h-4 rounded-full bg-[#FF6633] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <ShoppingCart
                className={cn("text-[#414141]", {
                  "text-[#FF6633]": cartCount > 0 && userId,
                })}
              />
              <span
                className={cn("text-sm", {
                  "text-[#FF6633]": cartCount > 0 && userId,
                })}
              >
                Cart
              </span>
            </Link>
          </li>

          <li>
            <Profile />
          </li>
        </ul>
      </Container>
    </div>
  );
};
