"use client";
import { useFiltersFromUrl, useUrlFilters } from "@/hooks";

export default function FiltersWrapper() {
  useFiltersFromUrl();
  useUrlFilters();
  return null;
}
