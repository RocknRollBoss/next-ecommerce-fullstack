"use client";
import { useGetCategoriesQuery } from "@/store/services/categories-api";
import { Button } from "./ui";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, selectFilters } from "@/store/features/filtersSlice";

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(selectFilters);
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const handleCategoryClick = (id: number) => {
    dispatch(setFilters({ ...filters, category: String(id) }));
  };

  return (
    <div className="flex gap-4">
      {!isLoading && (
        <Button
          type="button"
          className="text-[#70C05B] border-[#70C05B] bg-white hover:bg-[#FF6633] hover:text-white cursor-pointer"
          onClick={() => dispatch(setFilters({ ...filters, category: null }))}
        >
          all
        </Button>
      )}
      {categories &&
        categories.map((cat) => (
          <Button
            type="button"
            className="text-[#70C05B] border-[#70C05B] bg-white hover:bg-[#FF6633] hover:text-white cursor-pointer"
            onClick={() => handleCategoryClick(cat.id)}
            key={cat.id}
          >
            {cat.name}
          </Button>
        ))}
    </div>
  );
};
