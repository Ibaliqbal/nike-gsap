"use client";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();
  const lenis = useLenis();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
