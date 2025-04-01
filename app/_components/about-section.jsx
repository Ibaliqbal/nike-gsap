"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { aboutData } from "../../config/constant";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection = () => {
  const aboutSectionRef = useRef(null);
  const colLeftRef = useRef(null);
  useGSAP(
    () => {
      const md = gsap.matchMedia();

      md.add("(min-width: 768px)", () => {
        gsap.set(colLeftRef.current, {
          position: "sticky",
          top: "2rem",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: false,
            anticipatePin: 1,
          },
        });

        tl.to(colLeftRef.current, {
          y: aboutSectionRef.current?.offsetHeight - 300,
          duration: 1,
          ease: "none",
        });
      });

      aboutData.forEach((_, idx) => {
        gsap.fromTo(
          `.about-nike-${idx + 1}-word`,
          {
            opacity: 0.4,
          },
          {
            ease: "power1.inOut",
            stagger: 1,
            duration: 7,
            opacity: 1,
            scrollTrigger: {
              trigger: `.about-nike-${idx + 1}`,
              start: "center bottom-=100",
              end: "center+=50 center",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: aboutSectionRef }
  );

  return (
    <section
      className="container about-section"
      id="about"
      ref={aboutSectionRef}
    >
      <div className="col-left-about" ref={colLeftRef}>
        <h1>
          <span>about</span>
          <span>nike</span>
        </h1>
      </div>
      <div className="col-right-about">
        {aboutData.map((item, index) => (
          <article key={index} className={`about-nike-${index + 1}`}>
            <h2>
              {item.title.split(" ").map((word, idx) => (
                <span key={idx} className={`about-nike-${index + 1}-word`}>
                  {word}
                </span>
              ))}
            </h2>
            <p>
              {item.description.split(" ").map((word, idx) => (
                <span key={idx} className={`about-nike-${index + 1}-word`}>
                  {word}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
