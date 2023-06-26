import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import MenuBar from "./components/utils/MenuBar";
import { Interface } from "./components/Interface";
import LoadingScreen from "./components/utils/LoadingScreen";
import Cursor from "./components/utils/Cursor";
import ScrollManager from "./components/utils/ScrollManager";
import { framerMotionConfig } from "./config";
import React from "react";
import { Experience } from "./components/Sections/Experience/Experience";
function App() {
  const [start, setStart] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
  }, [section]);
  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#E2E8F0"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} setSection={setSection} />
            <Scroll>
              <Suspense fallback={null}>
                {start ? <Experience menuOpen={menuOpen} /> : null}
              </Suspense>
            </Scroll>

            <Scroll html>{start ? <Interface /> : null}</Scroll>
          </ScrollControls>
        </Canvas>
        {start ? (
          <MenuBar
            setSection={setSection}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
          />
        ) : null}

        <Cursor />
        <LoadingScreen started={start} onStarted={() => setStart(true)} />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
