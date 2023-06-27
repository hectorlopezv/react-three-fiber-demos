import React from "react";
import Section from "../../utils/Section";
import { useAtom } from "jotai";
import { currentProjectAtom } from "./Projects";
import { projects } from "../../../constants";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
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
      <div className="flex h-screen w-screen items-center justify-center space-x-3">
        <button
          disabled={disabledPrevious}
          className="hover:text-indigo-600 transition-colors block"
          onClick={previousProject}
        >
          <ArrowLeftCircle className="text-red-500"/>
        </button>

        <h2 className="text-3xl md:text-5xlfont-bold italic block">Projects</h2>

        <button
          disabled={disabledNext}
          className="hover:text-indigo-600 transition-colors block"
          onClick={nextProject}
        >
          <ArrowRightCircle className="text-blue-600"/>
        </button>
      </div>
    </Section>
  );
}
