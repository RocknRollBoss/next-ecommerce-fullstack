import { Loader as Spinner } from "lucide-react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
interface Props{
  className?:string
}
export const Loader: React.FC<Props> = ({className}) => {
  return (
    <Container>
      <Spinner className={cn("w-8 h-8 animate-spin flex justify-center",className)}></Spinner>
    </Container>
  );
};
