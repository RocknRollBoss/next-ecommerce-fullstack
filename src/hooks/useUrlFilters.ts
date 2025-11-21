"use client";
import { selectFilters } from "@/store/features/filtersSlice";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useUrlFilters = () => {
  const { filters } = useSelector(selectFilters);
  const router = useRouter();
  useEffect(() => {
    const qsString = qs.stringify(filters, { skipNulls: true });
    router.replace(`?${qsString}`, { scroll: false });
  }, [filters, router]);
};
