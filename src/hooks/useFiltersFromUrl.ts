import { setFilters } from "@/store/features/filtersSlice";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFiltersFromUrl = () => {
  const searchParams = useSearchParams();
  const dispach = useDispatch();
  useEffect(() => {
    const params = qs.parse(searchParams.toString());
    dispach(setFilters(params));
  }, [searchParams, dispach]);
};
