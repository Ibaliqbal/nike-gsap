"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const progressRef = useRef(null);
  useGSAP(() => {
    const scrollingText = gsap.utils.toArray(".title");

    const tlSlider = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    let speedTween;

    ScrollTrigger.create({
      trigger: ".wrapper-title",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        speedTween && speedTween.kill();
        speedTween = gsap
          .timeline()
          .to(tlSlider, {
            timeScale: 3 * self.direction,
            duration: 0.25,
          })
          .to(
            tlSlider,
            {
              timeScale: 1 * self.direction,
              duration: 1.5,
            },
            "+=0.5"
          );
      },
    });

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 0.5) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }

    const md = gsap.matchMedia();

    const tl = gsap.timeline();
    tl.fromTo(
      progressRef.current,
      {
        height: 0,
      },
      {
        height: "10%",
        duration: 1,
        ease: "power3.inOut",
      }
    )
      .to(progressRef.current, {
        width: "100%",
        duration: 5,
        ease: "power3",
        delay: 0.5,
      })
      .to(
        ".text-loading",
        {
          textContent: "100%",
          duration: 5,
          ease: "power3",
          snap: { textContent: 1 },
        },
        "<"
      )
      .to(".text-loading", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.in",
      })
      .to(
        progressRef.current,
        {
          height: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(".block-top", {
        top: "-50%",
        duration: 1.5,
        ease: "power3.inOut",
        display: "none",
      })
      .to(
        ".block-bottom",
        {
          bottom: "-50%",
          duration: 1.5,
          ease: "power3.inOut",
          display: "none",
        },
        "<"
      );

    md.add("(max-width: 768px)", () => {
      tl.to(".my-video", {
        height: "90%",
        duration: 1,
        ease: "power3.inOut",
      });
    });

    md.add("(min-width: 768px)", () => {
      tl.to(".my-video", {
        height: "88%",
        duration: 1,
        ease: "power3.inOut",
      });
    });

    tl.fromTo(
      ".nav",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.3,
      }
    )
      .fromTo(
        ".main-page",
        {
          overflow: "hidden",
          height: "100vh",
        },
        {
          overflow: "auto",
          duration: 0.5,
          height: "fit-content",
        }
      )
      .from(".title", {
        opacity: 0,
        y: 100,
        x: -25,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.3,
      });
  });

  return (
    <section className="hero-section">
      <video autoPlay playsInline muted loop className="my-video">
        <source src="/ad-nike-2.mp4" type="video/mp4" />
      </video>
      <div className="wrapper-title">
        <div className="wrapper-title-children">
          <h1 className="title text-1">• JUST DO IT</h1>
          <h1 className="title text-2">• JUST DO IT</h1>
          <h1 className="title text-3">• JUST DO IT</h1>
        </div>
      </div>
      <div className="wrapper-blocks">
        <div className="block-top"></div>
        <div className="block-bottom"></div>
      </div>
      <div className="progress-bar" ref={progressRef}>
        <p className="text-loading">0%</p>
      </div>
    </section>
  );
};

export default HeroSection;
