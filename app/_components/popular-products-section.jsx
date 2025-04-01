"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { popularProducts } from "../../config/constant";
import { convertToDolar } from "../../utils/helper";
import Button from "./button";
import ParallaxImage from "./parallax-image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const PopularProductsSection = () => {
  const popularProductsRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".title-products-word",
        {
          y: (el) => (el % 2 === 0 ? 100 : -100),
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

      popularProducts.forEach((_, idx) => {
        gsap.fromTo(
          `.popular-product-${idx + 1}-word`,
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
    {
      scope: popularProductsRef,
    }
  );

  return (
    <section
      className="products-section"
      id="products"
      ref={popularProductsRef}
    >
      <div className="container-title">
        <div className="container">
          <h1 className="title-products">
            <span className="title-products-word">our</span>
            <span className="title-products-word">popular</span>
            <span className="title-products-word">products</span>
            <span className="title-products-word year">in</span>
            <span className="title-products-word year">2024</span>
          </h1>
        </div>
      </div>
      <div className="container">
        {popularProducts.map((product, idx) => (
          <article className="product-container" key={idx}>
            <div className={`col-left-product col-product-${idx + 1}`}>
              <h1>
                {product.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`popular-product-${idx + 1}-word`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <p className={`product-description`}>
                {product.description.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`popular-product-${idx + 1}-word`}
                  >
                    {word}
                  </span>
                ))}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`product-price popular-product-${idx + 1}-word`}
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
              <h2 className="popular">0{idx + 1}</h2>
            </div>
          </article>
        ))}
      </div>
      <div className="button-more-products">
        <Button
          text={"More products"}
          onClick={() =>
            window.open("https://www.nike.com/w/shoes-y7ok", "_blank")
          }
        />
      </div>
    </section>
  );
};

export default PopularProductsSection;
