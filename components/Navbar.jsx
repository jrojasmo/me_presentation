'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import {navVariants} from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    >
    <div className="absolute w-[50%] inset-0 gradient-02"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="Search" className="w-[50px] h-[50px] object-contain"/>
      <h2 className="font-semibold text-[32px] leading-[30px] text-white"> ¡HOLA! MI NOMBRE ES </h2>
      <img src="/menu.png" alt="Menu" className="w-[50px] h-[50px] object-contain"/>
    </div>
  </motion.nav>
);

export default Navbar;
