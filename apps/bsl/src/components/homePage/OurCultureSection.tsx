import React, { useRef } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

const SingleSlide = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="carousel-item relative w-full sm:py-10   flex flex-col sm:h-[20rem] h-[15rem] pb-[5rem]">
      <div className=" flex flex-col w-full justify-between h-full items-center text-center py-2 sm:py-0  gap-20 sm:gap-0 ">
        <div className="text-[#0C233E] font-bold text-[3.5rem]  sm:text-[5.3rem] md:text-[6.1rem] lg:text-[7.9rem] xl:text-[10.2rem] 2xl:text-[12rem]  w-full whitespace-nowrap text-center  flex justify-center items-center h-fit">
          {title}
        </div>
        <div className="text-base  container mx-auto  leading-6 max-w-xl px-5  w-full ">
          {description}
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };
  return (
    <div className="carousel w-full   ">
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        cssMode={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
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
        className="w-full relative "
      >
        <SwiperSlide>
          <SingleSlide
            title="Innovation"
            description="We adapt to market trends and foster creativity that challenges
          constraints and drives progress"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SingleSlide
            title="Agility"
            description="We see opportunities that adds value by welcoming new perspectives to improve productivity. We don’t stand still!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Results-Driven"
            description="We are passionate about achieving results and strive for quality in rendering services"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Integrity"
            description="We build trust with our clients and partners by upholding ethical standards"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Team Spirit"
            description="We communicate and work together to offer excellent service to our clients."
          />
        </SwiperSlide>

        <div className=" flex justify-between   absolute top-[20%] sm:top-[50%] bottom-[50%] w-full  px-10 sm:px-[15%]">
          <button
            className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
            ref={swiperNavPrevRef}
            onClick={() => swiperRef!.current?.slidePrev()}
          >
            <img src="/assets/icons/nav-left.svg" className=" w-full " />
          </button>

          <button
            className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
            ref={swiperNavNextRef}
            onClick={() => swiperRef!.current?.slideNext()}
          >
            <img src="/assets/icons/nav-right.svg" className="w-full" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

const OurCultureSection = () => {
  return (
    <section className=" relative h-fit py-10 ">
      <div className="absolute inset-0       ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full  object-cover object-bottom "
        >
          <source src="/assets/videos/core-values.webm" type="video/mp4" />
        </video>
      </div>
      <div className="custom-container pt-10 flex justify-center relative   pb-10  bg-transparent">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <h1 className="text-[#AB2346] font-medium tracking-widest uppercase">
            <Animate.FadeUp>Our Culture</Animate.FadeUp>
          </h1>

          <Animate.FadeUp>
            <p className="text-base tracking-wide leading-7">
              From our diverse selection of services to our corporate culture
              and relationships, our goal is for all our services to live up to
              the tenets of our Core Values. Because we know that what we do
              everyday determines our reputation, the level of success we
              achieve, and the positive impact we can make in Africa and beyond.
            </p>
          </Animate.FadeUp>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default OurCultureSection;
