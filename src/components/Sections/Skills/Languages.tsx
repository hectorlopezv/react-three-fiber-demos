import React from "react";
import { motion } from "framer-motion";
const Languages = ({ languages }) => {
  return (
    <>
      {languages.map((lng, index) => (
        <div className="" key={index}>
          <motion.h3
            className="text-sm md:text-xl font-bold text-gray-200"
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 2 + index * 0.2,
                },
              },
            }}
          >
            {lng.title}
          </motion.h3>
          <div className="h-2 bg-white rounded-full mt-2">
            <motion.div
              className="h-full bg-indigo-800 rounded-full"
              style={{ width: `${lng.level}%` }}
              initial={{
                scaleX: 0,
                originX: 0,
              }}
              variants={{
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 1,
                    delay: 2 + index * 0.2,
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Languages;
