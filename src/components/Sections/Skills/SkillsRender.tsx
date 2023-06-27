import React from "react";
import { motion } from "framer-motion";
const SkillsRender = ({ skills }) => {
  return (
    <div className="flex flex-col gap-7 mt-2">
      {skills.map((skill, index) => (
        <div className="w-[80%] md:w-[95%]" key={index}>
          <motion.h3
            className="text-xs md:text-xl font-bold text-gray-100"
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1 + index * 0.2,
                },
              },
            }}
          >
            {skill.title}
          </motion.h3>
          <div className="h-2 bg-white rounded-full mt-2">
            <motion.div
              className="h-full bg-indigo-800 rounded-full "
              style={{ width: `${skill.level}%` }}
              initial={{
                scaleX: 0,
                originX: 0,
              }}
              variants={{
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkillsRender;
