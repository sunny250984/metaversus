import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "./../utils/motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => {
      return (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      );
    })}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: React.ReactNode;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-semibold md:text-[48px] text-[36px] md:leading-tight text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
