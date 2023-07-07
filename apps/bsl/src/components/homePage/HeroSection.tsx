import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import ActiveLottieLoader from "../../../public/assets/lottie/loader/active-loader.json";
import InactiveLottieLoader from "../../../public/assets/lottie/loader/inactive-loader.json";
import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";
import SwiperCore, { Autoplay } from "swiper";
import { motion, useScroll, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Animate } from "../animations/ScrollAnimator";

const CustomLottieLoader = ({ status }: { status: "active" | "inactive" }) => {
  const defaultLottieOptions = {
    loop: true,
    autoPlay: true,
    animationData:
      status === "active" ? ActiveLottieLoader : InactiveLottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="-ml-4">
      <Lottie options={defaultLottieOptions} height={50} width={50} />
    </div>
  );
};

const HeroSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <section className="  h-[90vh] sm:h-[100vh] relative top-0">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-fixed  bg-video   "
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          playsInline
        >
          <source src="/assets/videos/homepage.webm" type="video/webm" />
        </video>
      </motion.div>
      <div className="relative  h-full  flex flex-col   justify-end gap-0 sm:gap-20  ">
        <div className="  text-white flex h-full   ">
          <div className="  w-full   flex  flex-col justify-end  gap-8 sm:gap-16 ">
            <Swiper
              onBeforeInit={onBeforeInit}
              spaceBetween={0}
              cssMode={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={false}
              mousewheel={true}
              autoplay={{
                delay: 5000,
              }}
              navigation={{
                prevEl: swiperNavPrevRef?.current,
                nextEl: swiperNavNextRef?.current,
              }}
              modules={[Navigation, Autoplay]}
              keyboard={true}
              className="w-full "
            >
              <SwiperSlide>
                <div className="custom-container flex flex-col gap-8 sm:gap-10 pt-0  w-full ">
                  <div className="flex justify-start  items-start -gap-1 -mb-12">
                    <CustomLottieLoader status={"active"} />
                    <CustomLottieLoader status={"inactive"} />
                  </div>
                  <Animate.FadeUp>
                    <div className="text-4xl sm:text-6xl mr-6 leading-[3rem]  font-extralight ">
                      <h2 className="">We are Engineering </h2>
                      <h2 className="font-bold sm:mt-4">
                        Africa&apos;s Digital Future
                      </h2>
                    </div>
                  </Animate.FadeUp>
                  <Animate.FadeIn>
                    <p className="flex  text-2xl sm:text-3xl  ">
                      We&apos;re offering 360 digital <br />
                      solutions Globally from African by Africans.
                    </p>
                  </Animate.FadeIn>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="custom-container flex flex-col gap-8 sm:gap-10 pt-0 ">
                  <div className="flex justify-start  items-start -gap-1 -mb-12">
                    <CustomLottieLoader status={"active"} />
                    <CustomLottieLoader status={"inactive"} />
                  </div>
                  <Animate.FadeUp>
                    <div className="text-4xl sm:text-6xl mr-6 leading-[3rem]   font-extralight ">
                      <h2 className="">We are Engineering </h2>
                      <h2 className="font-bold sm:mt-4">
                        Africa&apos;s Digital Future
                      </h2>
                    </div>
                  </Animate.FadeUp>
                  <Animate.FadeIn>
                    <p className="flex  text-2xl sm:text-3xl  ">
                      We&apos;re offering 360 digital <br />
                      solutions Globally from African by Africans.
                    </p>
                  </Animate.FadeIn>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className=" flex justify-end sm:justify-start  custom-container">
              <button
                ref={swiperNavPrevRef}
                onClick={() => swiperRef!.current?.slidePrev()}
              >
                <img src="/assets/icons/nav-left.svg" className=" w-2/3" />
              </button>

              <button
                ref={swiperNavNextRef}
                onClick={() => swiperRef!.current?.slideNext()}
              >
                <img src="/assets/icons/nav-right.svg" className="w-2/3" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[12%] mb-0 pb-0 sm:pb-10 ">
          <button>
            <Lottie options={lottieDefaultOptions} height={160} width={160} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
