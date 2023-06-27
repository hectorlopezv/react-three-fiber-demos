import { motion } from "framer-motion";
import React from "react";
const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={
        props.className ||
        `
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start ${
      mobileTop ? " justify-start md:justify-center" : "justifiy-center"
    }
    `
      }
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
export default Section;
