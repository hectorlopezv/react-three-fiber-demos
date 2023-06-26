import React from "react";
import Section from "../../utils/Section";
import { useAtom } from "jotai";
import { currentProjectAtom } from "./Projects";
import { projects } from "../../../constants";
const length = projects.length;
export default function ProjectsSection({}) {
  const [currentProject, setcurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    console.log("currentProject, length", currentProject, length);
    if (currentProject + 1 < length) {
      setcurrentProject((currentProject) => currentProject + 1);
    }
  };
  const previousProject = () => {
    if (currentProject - 1 >= 0) {
      setcurrentProject((currentProject) => currentProject - 1);
    }
  };
  const disabledPrevious = !(currentProject - 1 >= 0);
  const disabledNext = !(currentProject + 1 < length);
  return (
    <Section>
      <div className="flex w-full pt-8 h-full gap-8 items-center justify-center">
        <button
          disabled={disabledPrevious}
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          disabled={disabledNext}
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next
        </button>
      </div>
    </Section>
  );
}
