import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
export const Experience = ({ section, menuOpen }) => {
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue();
  const cameraLookAtx = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtx, menuOpen ? 5 : 1, { ...framerMotionConfig });
  }, [section, menuOpen]);
  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtx.get(), 0, 0);
  });
  return (
    <>
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
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        opacity={1}
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
              distort={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <group scale={[2, 2, 2]} position-y={1.5}>
          <Avatar animation={section === 0 ? "Capoeira" : "Salsa_Dancing"} />
        </group>
      </motion.group>
    </>
  );
};
