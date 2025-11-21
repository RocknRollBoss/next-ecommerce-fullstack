import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  amount: number;
  currency?: string;
}

export const OrderSummary: React.FC<Props> = ({ amount }) => {
  return (
    <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Your order is ready
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">Total order amount:</p>
        <div className="text-3xl font-bold text-[#FF6633]">
          {amount.toLocaleString()} $
        </div>
        <Link href="/">
          <Button
            className={cn(
              "w-full text-[#70C05B] border border-[#70C05B] bg-white hover:bg-[#FF6633] hover:text-white cursor-pointer duration-350"
            )}
          >
            Proceed to payment
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
