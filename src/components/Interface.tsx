import React from "react";
import AboutSection from "./Sections/About/About";
import ContactSection from "./Sections/ContactMe/Contact";
import SkillsSection from "./Sections/Skills/Skills";

import ProjectsSection from "./Sections/Projects/ProjectsSection";

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};