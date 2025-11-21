import React from "react";
import { Title } from "./ui/title";
type Props = {
  text: "Stocks" | "New items" | "Bought before" | "Favourites";
};
export const ProductTitle: React.FC<Props> = ({ text }) => {
  return (
    <Title
      className="mb-10 text-[#414141] text-[36px] font-bold"
      size="md"
      text={text}
    ></Title>
  );
};
