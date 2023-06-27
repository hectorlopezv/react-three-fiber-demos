import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as Three from "three";
import { gsap } from "gsap";
type Props = {};

export default function Background({}: Props) {
  const material = useRef<any>(null);
  const color = useRef({
    color: "#b9cff",
  });

  const data: any = useScroll();
  const tl = useRef<any>(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      duration: 1,
      color: "#E2E8F0",
      ease: "none",
    });

    tl.current.to(color.current, {
      duration: 1,
      color: "#E2E8F0",
      ease: "none",
    });
  }, []);

  useFrame(() => {
    tl.current?.progress(data.scroll.current);
    material.current.color = new Three.Color(color.current?.color);
  });
  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={Three.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
}
