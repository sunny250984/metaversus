import React from "react";
import styles from "./../styles/index";

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures: React.FC<Props> = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[14px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-semibold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[16.75px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
