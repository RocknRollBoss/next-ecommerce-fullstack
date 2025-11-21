"use client";

import {
  selectFilters,
  setFilters,
  SortType,
} from "@/store/features/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const sortOptions: { label: string; value: SortType }[] = [
  { label: "Rating ↓", value: "rating_desc" },
  { label: "Rating ↑", value: "rating_asc" },
  { label: "Price ↓", value: "price_desc" },
  { label: "Price ↑", value: "price_asc" },
];
export const Sort: React.FC = () => {
  const { filters } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleClickSort = (val: SortType) => {
    dispatch(setFilters({ ...filters, sort: val }));
  };

  return (
    <Select
      value={filters.sort || ""}
      onValueChange={(val: SortType) => handleClickSort(val)}
    >
      <SelectTrigger className="w-[180px] border border-gray-300 rounded px-3 py-2 text-sm text-[#70C05B] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent className="bg-white border border-gray-200 rounded shadow-md">
        {sortOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-[#70C05B] 
                       data-[highlighted]:bg-[#FF6633] 
                       data-[highlighted]:text-white 
                       px-3 py-2 rounded"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
