import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assets/slider/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/slider/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/slider/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/slider/4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slide;
