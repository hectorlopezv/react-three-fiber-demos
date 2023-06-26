import { useProgress } from "@react-three/drei";
import React from "react";

export default function LoadingScreen({ started, onStarted }) {
  const { progress } = useProgress();

  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 bottom-0 right-0 flex items-center 
      justify-center z-[1] transition-opacity duration-[8000] ease-in delay-100  ${
        started ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="absolute bottom-0 left-0 w-full h-[12px]">
        <div
          className="absolute left-0 top-0 bottom-0 bg-black bg-opacity-50 transition-width duration-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="p-16 rounded-xl text-center  border border-gray-300
        duration-400 group:transition-all group:ease-in-out group:duration-200  bg-gray-200
        group
        "
      >
        <button
          onClick={onStarted}
          className="text-[4rem] m-0 mb-2 text-indigo-700 font-semibold group-hover:scale-105 transition-all ease-in-out duration-200"
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
}
