import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = ["4000+km of Fibre optic cable"];

const Marquee: React.FC = () => {
  const marqueeElements = useRef<HTMLParagraphElement[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      resizeHandler();
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
        marqueeTween.current?.pause().kill();
      };
    }
  }, []);

  useEffect(() => {
    if (screenWidth) {
      marqueeInitialSet();
      if (marqueeTween.current) {
        marqueeTween.current.pause().kill();
      }
      marqueeTween.current = gsap.to(marqueeElements.current, {
        x: `+=${screenWidth * 1.5}`,
        ease: "none",
        repeat: -1,
        duration: 10,
        rotation: 0.1,
        modifiers: {
          x: (x: string) => {
            return (parseFloat(x) % (screenWidth * 1.5)) + "px";
          },
        },
      });
    }
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    if (typeof window !== "undefined") {
      gsap.set(marqueeElements.current, {
        xPercent: -100,
        x: function (index: number) {
          return (screenWidth / 2) * index;
        },
      });
    }
  };

  const resizeHandler = () => {
    if (typeof window !== "undefined") {
      gsap.set(marqueeElements.current, { clearProps: "all" });
      setScreenWidth(window.innerWidth);
    }
  };

  const marqueeElementsRefHandler = (
    e: HTMLParagraphElement | null,
    i: number
  ) => {
    if (e) {
      marqueeElements.current[i] = e;
    }
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <p
        className="text-center  text-xs md:text-2xl font-bold absolute pin-l w-1/2 "
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      >
        {e}
      </p>
    ));
  };

  return (
    <div
      className="relative w-screen py-0 md:py-4 bg-white text-[#234222] flex flex-row overflow-hidden items-center  gap-10"
      style={{ minHeight: "110px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
};

export default Marquee;
