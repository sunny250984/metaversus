import { motion } from "framer-motion";

import { NewFeatures, TitleText, TypingText } from "../components";
import whatNewImage from "./../assets/img/whats-new.png";

import { newFeatures } from "./../constants/index";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import styles from "./../styles/index";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" textStyles="text-left" />
        <TitleText
          title={<>What's new about Metaversus?</>}
          textStyles="text-left"
        />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => {
            return <NewFeatures key={feature.title} {...feature} />;
          })}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={whatNewImage}
          alt="what's new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
