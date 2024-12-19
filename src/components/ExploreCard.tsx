import React from "react";
import { motion } from "framer-motion";

import styles from "./../styles/index";
import { fadeIn } from "./../utils/motion";

import Headset from "./../assets/img/headset.svg";

interface Props {
  index: number;
  active: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  imgUrl: string;
  title: string;
}

const ExploreCard: React.FC<Props> = ({
  index,
  active,
  handleClick,
  id,
  imgUrl,
  title,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[450px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-6 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[14px] glassmorphism mb-[16px]`}
        >
          <img
            src={Headset}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[14px] leading-[16.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[18px] font-semibold sm:text-[24px] text-[18px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
