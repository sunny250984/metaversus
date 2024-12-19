import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import Arrow from "./../assets/img/arrow.svg";

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard: React.FC<Props> = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[160px] w-full h-[130px] rounded-[24px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[20px] text-[16px] text-white">
          {title}
        </h4>
        <p className="mt-[12px] font-normal lg:text-[16px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-white cursor-pointer">
        <img
          src={Arrow}
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
