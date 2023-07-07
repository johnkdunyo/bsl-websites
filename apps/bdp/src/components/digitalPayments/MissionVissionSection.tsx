import React, { useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleSlider = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" w-full  custom-container  border-green-800 flex flex-col items-center">
      <div className=" flex flex-col justify-between items-center gap-12 md:gap-5 px-14 md:px-0  w-full md:max-w-3xl">
        <h1 className="text-ruby text-5xl md:text-7xl font-bold  w-full">
          {title}
        </h1>
        <div className="text-primary  paragraphText1 leading-6 tracking-wide  w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

const MissionVissionSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <section className=" border-red-800 h-[36rem] bg-white text-black relative">
      <div className="absolute left-0 top-0 ">
        <img
          src="/assets/img/bdp/mission/left1.png"
          className="h-full -ml-4 md:hidden"
        />
        <img
          src="/assets/img/bdp/mission/left2.png"
          className="h-full -ml-3 hidden md:block"
        />
      </div>
      <div className="absolute right-0 top-0 z-[5px]">
        <img
          src="/assets/img/bdp/mission/right1.png"
          className="h-full -mr-4 md:hidden"
        />
        <img
          src="/assets/img/bdp/mission/right2.png"
          className="h-full  hidden md:block"
        />
      </div>
      <div className=" w-full inset-0   top-[31%]  md:top-[38%]  absolute">
        <Swiper
          onBeforeInit={onBeforeInit}
          spaceBetween={0}
          cssMode={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 500,
          }}
          navigation={{
            prevEl: swiperNavPrevRef?.current,
            nextEl: swiperNavNextRef?.current,
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <SingleSlider
              title="Mision"
              description="Empowering individuals, businesses and communities with innovative and
          easy-to-use digital solutions that enhance financial inclusion, foster
          economic growth and drive sustainable development."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider
              title="Vision"
              description="The preferred brand in providing a unified platform for digital financial services."
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" h-full w-full inset-0   top-[53%] md:top-[48%]  absolute">
        <div className="w-full flex justify-between custom-container md:justify-end md:gap-5 ">
          <button
            className=" z-20 w-14 h-14 md:w-12 md:h-12 "
            ref={swiperNavPrevRef}
            onClick={() => swiperRef!.current?.slidePrev()}
          >
            <img src="/assets/icons/navs/left-blue.svg" className=" w-full " />
          </button>

          <button
            className=" z-20 w-14 h-14 md:w-12 md:h-12"
            ref={swiperNavNextRef}
            onClick={() => swiperRef!.current?.slideNext()}
          >
            <img src="/assets/icons/navs/right-blue.svg" className="w-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionVissionSection;
