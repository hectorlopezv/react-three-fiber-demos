import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import React, { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { framerMotionConfig } from "../../../config";
import { Avatar } from "../../models/Avatar";
import { Office } from "../../models/Office";
import Projects from "../Projects/Projects";
import Background from "../../Background";

export const Experience = ({ menuOpen }) => {
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtx = useMotionValue(0);
  const [section, setsection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const data: any = useScroll();
  const animations = {
    0: "Typing",
    1: "Salsa_Dancing",
    2: "Dancing",
    3: "Capoeira",
  };

  const iSMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(
    0.4,
    Math.min(0.9 * responsiveRatio, 0, 0.9)
  );
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(animations[section] ?? animations[1]);
    }, 600);
  }, [section]);
  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -5 : 0, {
      ...framerMotionConfig,
    } as any);
    animate(cameraLookAtx, menuOpen ? 5 : 1, { ...framerMotionConfig } as any);
  }, [section, menuOpen]);
  useFrame((state) => {
    let currentSection = Math.floor(data.scroll.current * data.pages);
    if (currentSection > 3) {
      currentSection = 3;
    }
    if (currentSection !== section) {
      setsection(currentSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtx.get(), 0, 0);
    if (section === 0) {
      characterContainerAboutRef.current?.getWorldPosition(
        characterGroupRef.current?.position
      );
    }
  });
  const characterContainerAboutRef = useRef<any>(null);
  const characterGroupRef = useRef<any>(null);

  return (
    <>
      {/* <Background /> */}
      <motion.group
        ref={characterGroupRef}
        // position={[1.9722059084763766, 0.1953, 2.781079740544645]}
        rotation={[-3.0050816480707785, 1.211858530263369, 3.00298425570614]}
        animate={String(section)}
        transition={{
          duration: 1,
        }}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
          1: {
            y: -viewport.height + 0.7,
            x: iSMobile ? 0.4 : 0,
            z: 6.5,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          2: {
            y: iSMobile
              ? -viewport.height * 2  -2
              : -viewport.height * 2 + 0.5,
            x: iSMobile ? 0.6 : 0.6,
            z: iSMobile ? 0 : 6,
            rotateX: 0,
            rotateY: 0.3,
            rotateZ: -0.4,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: iSMobile?0.5:1.5,
            z: iSMobile ? 4 : 6,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        <Avatar animation={characterAnimation} wireframe={section === 1} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        animate={{
          y: iSMobile ? -viewport.height / 6 : 0,
        }}
        position={[
          iSMobile ? 0.7 : 1.5 * officeScaleRatio,
          iSMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
      >
        <Office section={section} />

        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.199, 0.217, -0.543]}
          rotation={[-3.089, 0.429, 3.109]}
        ></group>
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y:
            section === 1 || section === 0
              ? -viewport.height * 1.2
              : -viewport.height * 10,
          opacity: section === 1 || section === 0 ? 1 : 0,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"purple"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[2, 2, 2]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};
