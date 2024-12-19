import { motion } from "framer-motion";

import styles from "./../styles";
import { TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[24px] font-normal sm:text-[18px] text-[16px] leading-relaxed md:w-[80%] text-center text-secondary-white"
      >
        <span className="font-semibold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-semibold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-semibold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{" "}
        <span className="font-semibold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
    </motion.div>
  </section>
);

export default About;
