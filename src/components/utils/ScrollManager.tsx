import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";

type Props = {
  section: number;
  setSection: (section: number) => void;
  children?: React.ReactNode;
};
export default function ScrollManager({
  section,
  setSection,
  children,
}: Props) {
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const data: any = useScroll();
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data?.scroll.current;
      return;
    }

    const currentSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && currentSection === 0) {
      setSection(1);
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      setSection(0);
    }

    lastScroll.current = data.scroll.current;
  });
  useLayoutEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);
  return <>{children}</>;
}
