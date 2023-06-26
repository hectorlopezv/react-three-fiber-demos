import React from "react";
import AboutSection from "./Sections/About/About";
import ContactSection from "./Sections/ContactMe/Contact";
import SkillsSection from "./Sections/Skills/Skills";
import Section from "./utils/Section";

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};
