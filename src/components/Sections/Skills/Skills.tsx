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
        className="flex items-center gap-8 w-full h-full justify-center"
      >
        <div className="space-y-4 w-full h-full">
          <h2 className="text-5xl font-bold text-black italic">Skills</h2>
          <div className="flex  gap-8 pb-24 md:pb-16 flex-wrap">
            <SkillsRender skills={skills.slice(0, 4)} />
            <SkillsRender skills={skills.slice(4, 8)} />
            <SkillsRender skills={skills.slice(8, 12)} />
            <SkillsRender skills={skills.slice(12, 16)} />
          </div>
          <div className="w-ful">
            <h2 className="text-5xl font-bold mt-8 text-black italic">
              Languages
            </h2>
            <div className="space-y-7 pt-8 mt-2">
              <Languages languages={languages} />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
