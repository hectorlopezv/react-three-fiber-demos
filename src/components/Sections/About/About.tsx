import Section from "../../utils/Section";
import React from "react";
import { motion } from "framer-motion";
const AboutSection = ({ setSection, mobileTop }) => {
  return (
    <Section>
      <div className="md:space-y-10">
        <h1 className=" text-4xl md:text-6xl font-extrabold leading-snug text-black mt-8 md:mt-0">
          <div className="inline-flex space-x-3 items-center">
            <p> Hi, I'm</p>
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hectorviniciolopezmolinares-fullstackdeveloper/",
                    "_blank"
                  )
                }
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-[#0077b5] mb-2 inline-block rounded px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </div>
            <div>
              <button
                onClick={() =>
                  window.open("https://github.com/hectorlopezv", "_blank")
                }
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-[#333] mb-2 inline-block rounded px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>
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
          <p className="leading-9">
            FullStack Developer with 3 years of experience, based in Colombia,
            Who loves to learn new technologies and share knowledge with others,
            Works with, React, Next.js, Node, Express, MongoDB, PostgreSQL,
            GraphQL, Typescript, TailwindCSS, MaterialUI, Framer Motion, AWS,
            GCP, React Three Fiber and more............
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
