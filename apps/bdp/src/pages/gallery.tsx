import SiteLayout from "@/components/Layout/SiteLayout";
import React, { useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const SingleSlide = ({
  id,
  currentIndex,
  title,
  imageURL,
}: {
  id: number;
  currentIndex: number;
  title: string;
  imageURL: string;
}) => {
  return (
    <div>
      <div
        className={`w-full flex flex-col justify-center  bg-transparent z-20  items-center   h-[25rem] ${
          currentIndex !== id && "py-10"
        } `}
      >
        <div
          className={` border-red-500 relative w-full  ${
            currentIndex === id ? "h-full " : "h-full"
          } `}
        >
          <Image
            src={imageURL}
            className="h-full  w-full object-cover "
            alt="image"
            fill
          />
        </div>
      </div>
      <div className={` ${currentIndex !== id && "hidden"}`}>
        <h1 className="text-center text-xl sm:text-2xl mt-4">{title}</h1>
      </div>
    </div>
  );
};

const Gallery = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(swiperInstance.realIndex + 1);
  };

  return (
    <SiteLayout pageName={"Galley"}>
      <section className="bg-white text-[#1D365A] border py-36">
        <div className="relative">
          <Swiper
            onBeforeInit={onBeforeInit}
            initialSlide={1}
            onActiveIndexChange={updateIndex}
            // cssMode={true}
            effect={"coverflow"}
            spaceBetween={30}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 500,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            // bigger screens
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 180,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: false,
                },
              },
            }}
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
            }}
            modules={[Pagination, Navigation]}
            keyboard={true}
            className="w-full  relative"
          >
            <SwiperSlide>
              <SingleSlide
                id={1}
                currentIndex={currentIndex}
                title="Breast Cancer Awareness months"
                imageURL={"/assets/img/gallery/image1.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={2}
                currentIndex={currentIndex}
                title="Breast Cancer Awareness months"
                imageURL={"/assets/img/gallery/image2.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={3}
                currentIndex={currentIndex}
                title="Breast Cancer Awareness months"
                imageURL={"/assets/img/gallery/image3.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={4}
                currentIndex={currentIndex}
                title="Breast Cancer Awareness months"
                imageURL={"/assets/img/gallery/image1.png"}
              />
            </SwiperSlide>
            <div className=" flex justify-between   absolute top-[50%] bottom-[50%] sm:px-[25%] w-full px-6">
              <button
                className=" z-10 w-16 h-16 sm:w-18 sm:h-18"
                ref={swiperNavPrevRef}
                onClick={() => swiperRef!.current?.slidePrev()}
              >
                <img
                  src="/assets/icons/navs/left-blue.svg"
                  className=" w-full "
                />
              </button>

              <button
                className=" z-10 w-16 h-16 sm:w-18 sm:h-18"
                ref={swiperNavNextRef}
                onClick={() => swiperRef!.current?.slideNext()}
              >
                <img
                  src="/assets/icons/navs/right-blue.svg"
                  className="w-full"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Gallery;
