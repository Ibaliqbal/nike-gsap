"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const boundsRef = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        boundsRef.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const handleScroll = () => {
      if (boundsRef.current && lenisRef.current) {
        const scroll = lenisRef.current.scroll;
        const relativeScroll = scroll - boundsRef.current.top;
        targetTranslateY.current = relativeScroll * 0.1;
      }
    };

    const animate = () => {
      if (imageRef.current && boundsRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    lenisRef.current.on("scroll", handleScroll);
    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      lenisRef.current?.destroy();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      fill
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
      }}
      className="parallax-image"
      sizes="100%"
    />
  );
};

export default ParallaxImage;
