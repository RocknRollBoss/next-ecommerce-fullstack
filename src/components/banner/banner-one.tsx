import React from "react";

export const BannerOne: React.FC = () => {
  return (
    <div className="h-full  w-full relative">
      <img
        src="/images/banners/banner1.svg"
        alt="banner-one"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
