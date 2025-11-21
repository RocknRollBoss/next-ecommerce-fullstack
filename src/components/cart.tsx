"use client";
import { Title } from "./ui";
import { CartItem } from "./cart-item";
import { CartInfo } from "./cart-info";
import { EmptyCart, Loader, OrderSummary, TopNavigation } from ".";
import { useCart } from "@/hooks";
import { useGetMeQuery } from "@/store/services/user-api";
export const Cart: React.FC = () => {
  const {
    cartItems,
    totalPrice,
    discount,
    increasedItemQuantity,
    decreaseItemQuantity,
    removeCartItemFromCart,
    isLoading,
    onClickOrder,
    isOrderExist,
  } = useCart();
  const { data: user } = useGetMeQuery();

  return (
    <div>
      <TopNavigation name="Cart" href="/cart" />
      {isOrderExist ? (
        <OrderSummary amount={totalPrice} />
      ) : (
        <div>
          <Title
            className="mt-6 text-4xl text-[#414141] font-bold"
            size="md"
            text="Cart"
          />

          {isLoading ? (
            <Loader className="mt-[35px]" />
          ) : cartItems?.userId === user?.id ? (
            <div className="mt-[35px] flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col flex-1 gap-6">
                {cartItems?.items.map((item) => (
                  <CartItem
                    removeCartItemFromCart={removeCartItemFromCart}
                    decreaseItemQuantity={decreaseItemQuantity}
                    increasedItemQuantity={increasedItemQuantity}
                    key={item.product.id}
                    name={item.product.name}
                    id={item.product.id}
                    imageUrl={item.product.imageUrl}
                    price={item.product.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
              <CartInfo
                cartQuantity={cartItems?.items.length}
                totalPrice={totalPrice}
                discount={discount}
                onClickOrder={onClickOrder}
              />
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
      )}
    </div>
  );
};
