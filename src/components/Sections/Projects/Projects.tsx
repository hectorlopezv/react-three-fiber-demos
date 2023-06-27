import React, { useEffect, useRef } from "react";
import { projects } from "../../../constants";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { Image, Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from "framer-motion";
import {
  Shape,
  ExtrudeGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  BufferAttribute,
} from "three";

type Props = {};

const Project = (props) => {
  const { viewport } = useThree();
  const background = useRef<any>(null);
  const bgOpacity = useMotionValue(0.4);
  // Create a shape with rounded corners
  const roundedRectShape = new Shape();
  const isMobile = window.innerWidth < 768;
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);

    ctx.quadraticCurveTo(x, y, x, y + radius);
  }

  roundedRect(roundedRectShape, -2.3 / 2, -2.3 / 2, 2.3, 2.6, 0.2);

  // Extrude the shape to create a rounded plane geometry
  const extrudeSettings = {
    steps: 0,
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 1,
  };

  const geometry = new ExtrudeGeometry(roundedRectShape, extrudeSettings);
  useEffect(() => {
    animate(bgOpacity, props.highlighted ? 0.8 : 0.4);
  }, [props.highlighted]);
  useFrame(() => {
    if (background.current) {
      background.current.material.opacity = bgOpacity.get();
    }
  });
  return (
    <group {...props} scale={[0.85, 0.85, 0.85]}>
      <mesh
        geometry={geometry}
        ref={background}
        position={[0, 0, -0.201]}
        onClick={() => globalThis.open(props.project.url, "_blank")}
      >
        <pointLight position={[5, 5, 8]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>

      <Image
        scale={[2.1, 1.2]}
        url={props?.project?.image}
        position={[0, 0.72, 0]}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.02, 0]}
      >
        {props?.project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.12}
        position={[-1, -0.29, 0]}
      >
        {props?.project.description}
      </Text>
    </group>
  );
};
export const currentProjectAtom = atom(Math.floor(projects.length / 2));
export default function Projects({}: Props) {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  const isMobile = window.innerWidth < 768;
  return (
    <motion.group position={[isMobile ? 1 : 0, -viewport?.height * 2 + 1, 0]}>
      {projects.map((project, index) => {
        return (
          <motion.group
            key={`project_${index}`}
            position={[index * 1.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * 3,
              y: currentProject === index ? 0 : -0.1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 3,
              rotateY: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        );
      })}
    </motion.group>
  );
}
