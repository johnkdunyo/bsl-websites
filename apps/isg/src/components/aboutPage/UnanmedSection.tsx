/* eslint-disable import/no-unresolved */

import React, { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const SingleComponent = ({
  imageURL,
  description,
}: {
  imageURL: string;
  description: string;
}) => {
  return (
    <div className=" border-l border-[#82AEC9]  w-full px-6  h-[35rem] md:h-[36rem] ">
      <div className="flex flex-col  gap-6 ">
        <Image
          src={imageURL}
          alt={imageURL}
          width={1800}
          height={1800}
          className="rounded-[20px] object-cover h-[19rem] md:h-[20rem]"
          blurDataURL={imageURL}
          placeholder="blur"
        />
        <Animate.FadeUp>
          <p className="text-[#1D365A] paragraphText1 ">{description}</p>
        </Animate.FadeUp>
      </div>
    </div>
  );
};

const UnanmedSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="flex flex-col  relative ">
        <div className="flex flex-col justify-between gap-8 h-full">
          <Swiper
            onBeforeInit={onBeforeInit}
            spaceBetween={0}
            cssMode={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.1}
            loop={false}
            mousewheel={true}
            autoplay={{
              delay: 500,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
            }}
            modules={[Navigation]}
            keyboard={true}
            className="w-full"
          >
            <SwiperSlide>
              <SingleComponent
                imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065681/bsl-website/bsl/about/gcb1_urswup.jpg"
                description="Broadspectrum designed and implemented a Software-Defined Wide Area
          Network as an overlay network to provide intelligent traffic steering
          over GCB Bank’s MPLS and LTE WAN links."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SingleComponent
                imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065681/bsl-website/bsl/about/gcb2_psgjdw.jpg"
                description="Broadspectrum designed and implemented a Network Access Control (NAC) solution to enhance the security of GCB Bank’s network."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SingleComponent
                imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065681/bsl-website/bsl/about/eagric_fuqruq.jpg"
                description="Broadspectrum designed, built and operates an Agriculture Marketplace Platform (E-Agric) for the ministry of Food and Agriculture (MOFA). This has led to the registration of over 1 million farmers and agricultural value chain actors ."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SingleComponent
                imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065682/bsl-website/bsl/about/nedco_umdl1i.jpg"
                description="Broadspectrum designed, built and operates the electronic power payment system for the Nothern Electricty Distribution Company Limited (NEDCo) for the purchase of power by its customers "
              />
            </SwiperSlide>
          </Swiper>

          <div className=" custom-container flex justify-start gap-4    w-full sm:order-first sm:justify-end ">
            <button
              className=" z-10 w-14 h-14 sm:w-16 sm:h-16"
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <img
                src="/assets/icons/navs/left-blue.svg"
                className=" w-full "
              />
            </button>

            <button
              className=" z-10 w-14 h-14 sm:w-16 sm:h-16"
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <img src="/assets/icons/navs/right-blue.svg" className="w-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnanmedSection;
