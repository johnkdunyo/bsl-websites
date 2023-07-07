import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SingleSlide = ({
  title,
  description,
  id,
  prevID,
  nextID,
}: {
  title?: string;
  description?: string;
  id?: string;
  prevID?: string;
  nextID?: string;
}) => {
  return (
    <div
      id={id}
      className="carousel-item relative   flex flex-col  my-10 sm:mx-10   "
    >
      <div className="h-full flex flex-col sm:flex-row justify-between items-center  gap-8   sm:w-2/3 w-full">
        <img src="/assets/icons/certified/placeholder.svg" className="" />

        <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 max-w-xl    gap-3 ">
          <h1 className="text-2xl font-bold"> ISO/IEC 27001:2013</h1>
          <p className="text-lg font-medium">
            Information Security management System (ISMS)
          </p>
          <p>
            We adhere to data protection standards both Internally and
            Externally so your data is secured
          </p>
        </div>
      </div>
      {/* 
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[41%] sm:top-[52%]  md:top-[48%]  mx-auto px-3=1 max-w-6xl">
        <a href={prevID} className="btn sm:btn-lg btn-circle bg-transparent">
          <img src="/assets/icons/nav-left.svg" />
        </a>

        <a href={nextID} className="btn sm:btn-lg  btn-circle bg-transparent">
          <img src="/assets/icons/nav-right.svg" />
        </a>
      </div> */}
    </div>
  );
};

const CertifiedSection = () => {
  return (
    <div className="we-are-certified-section py-18">
      <div className="pt-10 custom-container flex flex-col justify-center items-center ">
        <div className="text-center max-w-3xl">
          <h1 className="font-bold text-4xl sm:text-6xl mb-5">
            We are Certified
          </h1>
          <p className="text-base sm:text-lg">
            Our certifications reveal our commitment to providing quality
            products and services to all our existing and prospective customers.
          </p>
        </div>
      </div>

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 500,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          keyboard={true}
          className=" border-red-600 "
        >
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
        </Swiper>
      </>

      {/* carousel */}
    </div>
  );
};

export default CertifiedSection;
