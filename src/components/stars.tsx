import { Star } from "lucide-react";
import React from "react";
interface Props {
  rating: number;
}
export const Stars: React.FC<Props> = ({ rating }) => {
  const stars = [...Array(5 - rating)].fill(0);
  const ratingStars = [...Array(rating).fill(0)];
  return (
    <div className="flex gap-1">
      {ratingStars.map((_, idx) => (
        <Star fill="#FF6633" size={16} key={idx} />
      ))}
      {stars.map((_, idx) => (
        <Star size={16} key={idx} />
      ))}
    </div>
  );
};
