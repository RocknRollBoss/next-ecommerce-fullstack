"use client";
import { motion } from "motion/react";
import { BannerOne } from "./banner-one";
import { BannerTwo } from "./banner-two";
export const Banners: React.FC = () => {
  const banners = [<BannerOne key={"banner1"} />, <BannerTwo key="banner2" />];
  const repeatDel = banners.length * 5 - 5;
  return (
    <div className="relative h-20 md:h-80 xl:h-100 w-full pb-10 md:pb-15 xl:pb-20">
      {banners.map((banner, index) => (
        <motion.div
          key={`${banner}__${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: repeatDel,
            delay: index * 5,
          }}
          className="absolute w-full h-full"
        >
          {banner}
        </motion.div>
      ))}
    </div>
  );
};
