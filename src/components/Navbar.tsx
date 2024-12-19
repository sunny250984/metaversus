import { motion } from "framer-motion";

import styles from "./../styles";
import { navVariants } from "./../utils/motion";

import Logo from "./../assets/img/search.svg";
import Menu from "./../assets/img/menu.svg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src={Logo} alt="search" className="w-[20px] h-[20px] object-contain" />
      <h2 className="uppercase font-semibold text-[16px] leading-[24px] text-white">
        metaversus
      </h2>
      <img src={Menu} alt="menu" className="w-[20px] h-[20px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
