"use client";
import { useFiltersFromUrl, useUrlFilters } from "@/hooks";
import { selectFilters } from "@/store/features/filtersSlice";
import { useGetProductsQuery } from "@/store/services/products-api";
import { useSelector } from "react-redux";
import { Loader, Container, NewProducts, MainProducts, OldProducts } from ".";

export const Products: React.FC = () => {
  const { filters } = useSelector(selectFilters);
  const { data: products, isLoading } = useGetProductsQuery(filters);
  useFiltersFromUrl();
  useUrlFilters();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <div className="mt-20">
        {products && (
          <div className="flex flex-col gap-30  ">
            <MainProducts products={products} />
            <NewProducts products={products} />
            <OldProducts products={products} />
          </div>
        )}
      </div>
    </Container>
  );
};
