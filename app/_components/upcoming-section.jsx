"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { upcomingProducts } from "../../config/constant";
import { convertToDolar } from "../../utils/helper";
import ParallaxImage from "./parallax-image";
import Button from "./button";
import { ScrollTrigger } from "gsap/all"; // Import all plugins from gsap/all t

gsap.registerPlugin(ScrollTrigger, useGSAP);

const UpcomingSection = () => {
  const upcomingProductsRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".title-upcoming-products-word",
        {
          y: (el) => (el % 2 === 0 ? -100 : 100),
        },
        {
          ease: "power3.out",
          stagger: 0.8,
          duration: 3.5,
          y: 0,
          scrollTrigger: {
            trigger: ".container-title",
            start: "top bottom-=200",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      upcomingProducts.forEach((_, idx) => {
        gsap.fromTo(
          `.upcoming-product-${idx + 1}-word`,
          {
            opacity: 0.3,
          },
          {
            ease: "power1.inOut",
            stagger: 1,
            duration: 7,
            opacity: 1,
            scrollTrigger: {
              trigger: `.col-product-${idx + 1}`,
              start: "top bottom-=200",
              end: "center center",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: upcomingProductsRef }
  );
  return (
    <section className="upcoming-products-section" ref={upcomingProductsRef}>
      <div className="container-title upcoming">
        <div className="container">
          <h1 className="title-upcoming-products">
            <span className="title-upcoming-products-word">upcoming</span>
            <span className="title-upcoming-products-word">products</span>
          </h1>
        </div>
      </div>
      <div className="container">
        {upcomingProducts.map((product, idx) => (
          <article className="product-container" key={idx}>
            <div className={`col-left-product col-product-${idx + 1}`}>
              <h1>
                {product.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`upcoming-product-${idx + 1}-word`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <p className={`product-description`}>
                {product.description.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`upcoming-product-${idx + 1}-word`}
                  >
                    {word}
                  </span>
                ))}
              </p>
              <p className={`upcoming-product-${idx + 1}-word`}>
                Avalable : {product.available}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`product-price upcoming-product-${idx + 1}-word`}
              >
                {convertToDolar(product.price)}
              </a>
            </div>
            <div className="col-right-product">
              <div
                className="image-product-container"
                style={{
                  aspectRatio: product.aspectRatio,
                }}
              >
                <ParallaxImage src={product.image} alt={product.title} />
              </div>
              <h2 className="upcoming">0{idx + 1}</h2>
            </div>
          </article>
        ))}
      </div>
      <div className="button-more-products">
        <Button
          isDark
          text={"More update"}
          onClick={() => window.open("https://www.nike.com/launch", "_blank")}
        />
      </div>
    </section>
  );
};

export default UpcomingSection;
