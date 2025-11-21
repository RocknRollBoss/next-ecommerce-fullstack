import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export const EmptyList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] md:min-h-[60vh] text-center gap-4 px-4">
      <Heart className="w-12 h-12 text-gray-400" />
      <h1 className="text-xl font-semibold text-gray-700">No favorites yet</h1>
      <p className="text-gray-500">
        You haven't added any products to favorites.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-[#FF6633] text-white rounded-lg hover:bg-[#e65528] transition"
      >
        Browse products
      </Link>
    </div>
  );
};
