import { Product } from "@prisma/client";
import { ProductTitle, ProductItem } from ".";
import { shuffleArray } from "@/utils";
type Props = {
  products: Product[];
};
export const OldProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <ProductTitle text="Bought before" />
      <div className="flex gap-10 flex-wrap ">
        {products &&
          shuffleArray(products)
            .slice(0, 5)
            .map((product: Product) => (
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
