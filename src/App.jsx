import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import MenuBar from "./components/MenuBar";
import ScrollManager from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
function App() {
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
          <color attach="background" args={["#93e6f9"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} setSection={setSection}>
              <Experience />
              <Scroll html>
                <Interface />
              </Scroll>
            </ScrollManager>
          </ScrollControls>
        </Canvas>
        <MenuBar
          setSection={setSection}
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
