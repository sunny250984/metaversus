import React from "react";
import styles from "./../styles/index";

interface Props {
  number: string;
  text: string;
}

const StartSteps: React.FC<Props> = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[14px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[18px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[16px] text-[#B0B0B0] leading-[28.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
