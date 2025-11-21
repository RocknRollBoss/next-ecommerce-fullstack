import { Button, Title } from "./ui";
interface Props {
  totalPrice?: number;
  discount: number;
  cartQuantity?: number;
  onClickOrder: () => void;
}
export const CartInfo: React.FC<Props> = ({
  totalPrice,
  discount,
  onClickOrder,
  cartQuantity,
}) => {
  return (
    <div className="w-full lg:w-[300px] rounded-2xl p-4 shadow-md">
      <div>
        <div className="flex justify-between items-baseline">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#8F8F8F]">{cartQuantity} products</div>
            <div className="text-[#8F8F8F]">Discount</div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#8F8F8F]">{totalPrice} $ </div>
            <div className="text-[#FF6633] font-bold">{discount} $</div>
          </div>
        </div>
        <div className="mt-12 flex flex-col ">
          <div className="flex justify-between items-baseline">
            <div className="text-[#8F8F8F]">Total</div>
            <Title
              size="md"
              text={`${totalPrice} $`}
              className="text-2xl font-bold "
            />
          </div>

          <div className="text-center">
            <div className="mt-3 text-[#70C05B] text-[12px]">
              You get 100 bonuses
            </div>
            <div className="mt-7">
              <Button className="bg-[#D80000] text-[12px] hover:bg-[#D80000] px-[8px] py-[3px] ">
                Minimum order amount 10 $
              </Button>
            </div>
            <Button
              onClick={onClickOrder}
              className="mt-5 text-[#FF6633] text-2xl bg-[#FCD5BA] cursor-pointer p-6 hover:bg-[#FCD5BA] font-normal hover:opacity-50  duration-300"
            >
              Place an order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
