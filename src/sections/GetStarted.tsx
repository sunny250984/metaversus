import { motion } from "framer-motion";

import { StartSteps, TitleText, TypingText } from "../components";
import GetStartedImage from "./../assets/img/get-started.png";

import styles from "./../styles/index";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { startingFeatures } from "./../constants/index";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={GetStartedImage}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" textStyles="text-left" />
        <TitleText
          title={<>Get started with just a few clicks</>}
          textStyles="text-left"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => {
            return (
              <StartSteps
                key={feature}
                number={`${index < 10 ? "0" : ""}${index + 1}`}
                text={feature}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
