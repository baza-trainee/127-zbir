import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";
import { data_slider } from "./helper/data.js";

import "swiper/css";
import "swiper/css/pagination";
import "../../index.scss";
import S from "./about.module.scss";

export const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        cssMode={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Keyboard, Autoplay]}
        className="swiper"
      >
        {data_slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source
                srcSet={`${slide.webp_src} 1x, ${slide.webp_src_2x} 2x`}
                media="(min-width: 1440px)"
                type="image/webp"
              />
              <source
                srcSet={`${slide.src} 1x, ${slide.src_2x} 2x`}
                media="(min-width: 1440px)"
                type="image/jpeg"
              />
              <source
                srcSet={`${slide.mob_webp_src} 1x, ${slide.mob_webp_src_2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${slide.mob_src_2x} 2x`} type="image/jpeg" />
              <img
                className={S.about__img}
                src={slide.mob_src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
