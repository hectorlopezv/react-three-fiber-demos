import { useProgress } from "@react-three/drei";
import React, { useEffect } from "react";

const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 800);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <h1
        className="text-4xl md:text-9xl font-bold 
      relative"
      >
        <div
          className="
          bg-clip-text
          text-transparent bg-gradient-to-r from-yellow-300 via-blue-400 to-red-400
          absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          Hector Lopez
        </div>
        <div className="opacity-40">Hector Lopez</div>
      </h1>
    </div>
  );
};
export default LoadingScreen;
