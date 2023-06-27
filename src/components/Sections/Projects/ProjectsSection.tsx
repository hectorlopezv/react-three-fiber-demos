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
      <div className="flex w-full h-full gap-8 p-8 items-center justify-center -translate-x-28 mt-24">
        <div>
          <button
            disabled={disabledPrevious}
            className="hover:text-indigo-600 transition-colors"
            onClick={previousProject}
          >
            Previous
          </button>
        </div>
        <h2 className="text-3xl md:text-5xlfont-bold italic">Projects</h2>
        <div>
          <button
            disabled={disabledNext}
            className="hover:text-indigo-600 transition-colors"
            onClick={nextProject}
          >
            Next
          </button>
        </div>
      </div>
    </Section>
  );
}
