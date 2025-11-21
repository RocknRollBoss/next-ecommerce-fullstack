import { useSelector } from "react-redux";
import { ProductTitle, ProductItem, ClearFavouritesBtn } from ".";
import { TProduct } from "@/store/services/products-api";
import { selectFavourites } from "@/store/features/favouritesSlice";
type Props = {
  products: TProduct[];
  isFavourites?: boolean;
};
export const MainProducts: React.FC<Props> = ({ products, isFavourites }) => {
  const { items } = useSelector(selectFavourites);
  const showBtn = isFavourites && items.length > 0;
  return (
    <div>
      <ProductTitle text={isFavourites ? "Favourites" : "Stocks"} />
      {showBtn && <ClearFavouritesBtn />}
      <div className="flex gap-10 flex-wrap ">
        {products &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              rating={product.rating}
              description={product.description}
            />
          ))}
      </div>
    </div>
  );
};
