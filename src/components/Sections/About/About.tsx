import Section from "../../utils/Section";
import React from "react"
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-white">
        Hi, I'm
        <br />
        <span className="bg-white px-2 rounded-sm italic text-black">
          Hector Lopez
        </span>
      </h1>
      <motion.p
        className="text-xl  mt-4 text-white font-semibold "
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        FullStack Developer with 3 years of experience, based in Colombia
        <br />
        Who loves to learn new technologies and share knowledge with others.
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

export default AboutSection;
