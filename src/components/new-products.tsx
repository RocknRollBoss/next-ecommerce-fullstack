import { shuffleArray } from "@/utils";
import { ProductTitle, ProductItem } from ".";
import { Product } from "@prisma/client";
type Props = {
  products: Product[];
};
export const NewProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <ProductTitle text="New items" />
      <div className="flex gap-10 flex-wrap ">
        {products &&
          shuffleArray(products).slice(0,5).map((product: Product) => (
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
