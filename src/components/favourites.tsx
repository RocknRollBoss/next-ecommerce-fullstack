"use client";
import { selectFavourites } from "@/store/features/favouritesSlice";
import { Container, EmptyList, MainProducts, TopNavigation } from ".";
import { useSelector } from "react-redux";

export const Favourites: React.FC = () => {
  const { items } = useSelector(selectFavourites);

  return (
    <Container>
      <TopNavigation name="Favourites" href="/favourites" />
      <div className="mt-[35px]">
        {items.length > 0 ? (
          <div className="flex flex-col gap-30  ">
            <MainProducts products={items} isFavourites />
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
    </Container>
  );
};
