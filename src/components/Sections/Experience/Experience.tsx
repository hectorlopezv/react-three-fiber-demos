import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { framerMotionConfig } from "../../../config";
import { Avatar } from "../../models/Avatar";
import { Office } from "../../models/Office";

export const Experience = ({ section, menuOpen }) => {
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtx = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -5 : 0, {
      ...framerMotionConfig,
    } as any);
    animate(cameraLookAtx, menuOpen ? 5 : 1, { ...framerMotionConfig } as any);
  }, [section, menuOpen]);
  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtx.get(), 0, 0);
  });
  const characterContainerAboutRef = useRef(null);
  return (
    <>
      <motion.group
        position={[1.9722059084763766, 0.1953, 2.781079740544645]}
        rotation={[-3.0050816480707785, 1.211858530263369, 3.00298425570614]}
        animate={"" + section}
        transition={{
          duration: 1,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 0.7,
            x: 0,
            z: 6.5,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            y: -viewport.height * 2 + 0.5,
            x: -2,
            z: 7,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={section === 0 ? "Typing" : "Salsa_Dancing"} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
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
    </>
  );
};
