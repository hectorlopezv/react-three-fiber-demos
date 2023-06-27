import Section from "../../utils/Section";
import React from "react";
import { motion } from "framer-motion";
const AboutSection = ({ setSection, mobileTop }) => {
  return (
    <Section>
      <div className="md:space-y-10">
        <h1 className=" text-4xl md:text-6xl font-extrabold leading-snug text-black mt-8 md:mt-0">
          Hi, I'm
          <br />
          <span className="bg-white max-w-fit px-2 rounded-sm italic text-black md:mt-5 block">
            Hector Lopez
          </span>
        </h1>
        <motion.div
          className="text-md  md:text-xl  mt-4 text-gray-950 font-semibold space-y-1"
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
          <p>
            FullStack Developer with 3 years of experience, based in Colombia
          </p>
          <p>
            Who loves to learn new technologies and share knowledge with others.
          </p>
          <p>
            Works with, React, Next.js, Node, Express, MongoDB, PostgreSQL,
            GraphQL, Typescript,
          </p>
          <p>
            TailwindCSS, MaterialUI, Framer Motion, AWS, GCP, React Three Fiber
            and more.......
          </p>
        </motion.div>
        <motion.button
          onClick={() => setSection(3)}
          className={`bg-indigo-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-5 md:mt-16`}
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
      </div>
    </Section>
  );
};

export default AboutSection;
