"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Button = ({ text, isDark, ...rest }) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useGSAP((_, contextSafe) => {
    const xSet = gsap.quickSetter(flairRef.current, "xPercent");
    const ySet = gsap.quickSetter(flairRef.current, "yPercent");

    function getXY(e) {
      const { left, top, width, height } =
        buttonRef.current?.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    }

    const onMouseEnter = contextSafe((e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flairRef.current, {
        duration: 0.5,
        ease: "power3.out",
        scale: 1,
      });
    });

    const onMouseLeave = contextSafe((e) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flairRef.current);

      gsap.to(flairRef.current, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    const onMouseMove = contextSafe((e) => {
      const { x, y } = getXY(e);

      gsap.to(flairRef.current, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    });

    buttonRef.current?.addEventListener("mouseenter", onMouseEnter);
    buttonRef.current?.addEventListener("mouseleave", onMouseLeave);
    buttonRef.current?.addEventListener("mousemove", onMouseMove);

    return () => {
      buttonRef.current?.removeEventListener("mouseenter", onMouseEnter);
      buttonRef.current?.removeEventListener("mouseleave", onMouseLeave);
      buttonRef.current?.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div
      className={`button button--stroke ${isDark && "dark"}`}
      role="button"
      ref={buttonRef}
      {...rest}
    >
      <span className={`button__flair ${isDark && "dark"}`} ref={flairRef} />
      <span className={`button__label ${isDark && "dark"}`}>{text}</span>
    </div>
  );
};

export default Button;
