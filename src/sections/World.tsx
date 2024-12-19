import { motion } from "framer-motion";

import { TitleText, TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "./../styles/index";

import Map from "./../assets/img/map.png";
import People1 from "./../assets/img/people-01.png";
import People2 from "./../assets/img/people-02.png";
import People3 from "./../assets/img/people-03.png";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[360px]"
      >
        <img src={Map} alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[50px] h-[50px] p-[4px] rounded-full bg-[#5D6680]">
          <img src={People1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[50px] h-[50px] p-[4px] rounded-full bg-[#5D6680]">
          <img src={People2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[50px] h-[50px] p-[4px] rounded-full bg-[#5D6680]">
          <img src={People3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
