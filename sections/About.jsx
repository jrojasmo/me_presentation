'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Mí " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Soy un apasionado <span className="font-extrabold text-[#D8E9A8]">científico de la computación</span>{' '}con un enfoque dinámico para la resolución de {' '}
        <span className="font-extrabold text-white">problemas</span>{' '} y mi constante deseo de aprendizaje.
        Mi entusiasmo por el futuro de la{' '}<span className="font-extrabold text-[#D8E9A8]">informática</span>{' '}y mi determinación me impulsan a aplicar activamente 
        mis habilidades, con el objetivo de contribuir creando de{' '}<span className="font-extrabold text-[#D8E9A8]">soluciones</span>{' '}innovadoras.
        Me esfuerzo por tener habilidades interpersonales sólidas para colaborar efectivamente en equipo.
        {' '}<span className="font-extrabold text-white">Desplázate hacia abajo!</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;