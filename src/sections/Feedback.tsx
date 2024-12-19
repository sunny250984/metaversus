import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

import Stamp from "./../assets/img/stamp.png";
import Planet from "./../assets/img/planet-09.png";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col  gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative "
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[24px] text-[18px] sm:leading-[24.32px] leading-[18.32px] text-white">
            Samantha
          </h4>
          <p className="mt-[6px] font-normal sm:text-[16px] text-[14px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Metaverus
          </p>
        </div>

        <p className="mt-[20px] font-normal sm:text-[18px] text-[16px] sm:leading-[32.6px] leading-[24.6px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src={Planet}
          alt="planet-09"
          className="w-full lg:h-[490px] h-auto min-h-[210px] object-cover rounded-[30px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[8%] top-[1%]"
        >
          <img
            src={Stamp}
            alt="stamp"
            className="w-[105px] h-[105px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
