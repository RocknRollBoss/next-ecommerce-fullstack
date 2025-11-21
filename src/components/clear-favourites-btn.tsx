import React from "react";
import { clearItems } from "@/store/features/favouritesSlice";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";

export const ClearFavouritesBtn: React.FC = () => {
  const dispatch = useDispatch();
  const onClearFavourites = () => {
    dispatch(clearItems());
  };
  return (
    <button
      onClick={onClearFavourites}
      className="bg-[#F3F2F1] hover:text-[#70C05B] text-[#606060] mb-[50px] py-[8px] p-[15px] rounded-sm"
    >
      <div className="flex items-center gap-[15px]">
        <span className="text-[12px] ">Clear all</span>
        <X className="w-[13px] h-[13px]" />
      </div>
    </button>
  );
};
