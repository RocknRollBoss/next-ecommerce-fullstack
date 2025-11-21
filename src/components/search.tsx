"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { useDebounce } from "@/hooks";
import { useGetProductsQuery } from "@/store/services/products-api";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";

export const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const { data: searchResults, isLoading } = useGetProductsQuery(
    { search: debouncedSearch },
    { skip: !debouncedSearch }
  );

  return (
    <div className="relative w-full max-w-[380px]">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full placeholder:#8F8F8F placeholder:text-[16px] border border-[#70C05B] focus-visible:border-[#70C05B]"
        placeholder="Search product ..."
      />
      <SearchIcon className="absolute w-5 h-5 top-1 right-2 text-gray-400" />

      {debouncedSearch && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-auto rounded-md">
          {isLoading && (
            <div className="px-4 py-2 text-gray-500">Loading...</div>
          )}

          {!isLoading && searchResults?.length === 0 && (
            <div className="px-4 py-2 text-gray-500">No products found</div>
          )}

          {searchResults?.slice(0, 5).map((product) => (
            <Link
              onClick={() => setSearch("")}
              key={product.id}
              href={`/product/${product.id}`}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{product.name}</span>
              <img
                className="w-6 h-6 object-cover"
                src={product.imageUrl}
                alt={product.name}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
