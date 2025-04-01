"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { athlets } from "../../config/constant";
import ParallaxImage from "./parallax-image";
import Button from "./button";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AthletsSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".title-athlets-word",
      {
        y: (el) => (el % 2 === 0 ? -100 : 100),
      },
      {
        ease: "power3.out",
        stagger: 0.8,
        duration: 3.5,
        y: 0,
        scrollTrigger: {
          trigger: ".container-title.athlets",
          start: "top bottom-=200",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    athlets.forEach((_, idx) => {
      gsap.fromTo(
        `.athlet-${idx + 1}-word`,
        {
          opacity: 0.3,
        },
        {
          ease: "power1.inOut",
          stagger: 1,
          duration: 7,
          opacity: 1,
          scrollTrigger: {
            trigger: `.col-athlet-${idx + 1}`,
            start: "top bottom-=200",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  });
  return (
    <section className="athlets-section" id="athlets">
      <div className="container-title athlets">
        <div className="container">
          <h1 className="title-athlets">
            <span className="title-athlets-word">who</span>
            <span className="title-athlets-word">uses</span>
            <span className="title-athlets-word">nike</span>
            <span className="title-athlets-word">products</span>
          </h1>
        </div>
      </div>
      <div className="content-athlets">
        {athlets.map((athlet, idx) => (
          <section className="athlet-section" key={idx}>
            <ParallaxImage src={athlet.background} alt={athlet.name} />
            <div className="overlay-athlet-bg" />
            <div className="container">
              <article className="info-athlet-container">
                <div className={`col-left-athlet col-athlet-${idx + 1}`}>
                  <h1>
                    {athlet.name.split(" ").map((word, index) => (
                      <span key={index} className={`athlet-${idx + 1}-word`}>
                        {word}
                      </span>
                    ))}
                  </h1>
                  <p>
                    {athlet.athlet.split(" ").map((word, index) => (
                      <span key={index} className={`athlet-${idx + 1}-word`}>
                        {word}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="col-right-athlet">
                  <div
                    className="image-athlet-container"
                    style={{
                      aspectRatio: athlet.aspectRatio || "2/3",
                    }}
                  >
                    <ParallaxImage src={athlet.image} alt={athlet.name} />
                  </div>
                </div>
                <h2 className="number-athlet-list">0{idx + 1}</h2>
              </article>
            </div>
            <div className="button-more-athlets">
              <Button
                text={"More athlets"}
                onClick={() =>
                  window.open(
                    "https://about.nike.com/en/newsroom/releases/nike-athletes",
                    "_blank"
                  )
                }
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AthletsSection;
