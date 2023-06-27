import React from "react";
import { motion } from "framer-motion";
import Section from "../../utils/Section";
import SkillsRender from "./SkillsRender";
import Languages from "./Languages";
import { skills, languages } from "../../../constants";
const SkillsSection = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="flex flex-row  md:flex-wrap gap-8 w-full  justify-center items-start
         h-screen"
      >
        <div
          className=" flex flex-col flex-1 space-y-4 overflow-hidden overflow-y-scroll max-h-[80%] 
         scrollbar-thumb-[#64748b80] scrollbar-track-gray-100"
        >
          <h2 className="text-xl md:text-5xl font-bold text-white italic">
            Skills
          </h2>
          <div className="flex flex-col  gap-8 pb-24 md:pb-16">
            <SkillsRender skills={skills.slice(0, 4)} />
            <SkillsRender skills={skills.slice(4, 8)} />
            <SkillsRender skills={skills.slice(8, 12)} />
            <SkillsRender skills={skills.slice(12, 16)} />
          </div>
        </div>

        <div className=" flex flex-col flex-1 overflow-auto">
          <h2 className="text-xl md:text-5xl font-bold mt-8 text-white italic">
            Languages
          </h2>
          <div className="space-y-7 pt-8 mt-2">
            <Languages languages={languages} />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
