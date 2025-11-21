"use client";
import { selectFilters } from "@/store/features/filtersSlice";
import { useGetProductsQuery } from "@/store/services/products-api";
import { useSelector } from "react-redux";
import { Loader, Container, NewProducts, MainProducts, OldProducts } from ".";
import { Suspense } from "react";
import FiltersWrapper from "./filters-wrapper";

export const Products: React.FC = () => {
  const { filters } = useSelector(selectFilters);
  const { data: products, isLoading } = useGetProductsQuery(filters);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Suspense fallback={null}>
        <FiltersWrapper />
      </Suspense>
      <div className="mt-20">
        {products && (
          <div className="flex flex-col gap-30">
            <MainProducts products={products} />
            <NewProducts products={products} />
            <OldProducts products={products} />
          </div>
        )}
      </div>
    </Container>
  );
};
