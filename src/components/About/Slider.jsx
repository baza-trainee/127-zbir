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
        pagination={true}
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
                srcSet={`${slide.about_webp} 1x, ${slide.webp_src_2x} 2x`}
                media="(min-width: 1440px)"
                type="image/webp"
              />
              <source
                srcSet={`${slide.about_jpg} 1x, ${slide.src_2x} 2x`}
                media="(min-width: 1440px)"
                type="image/jpeg"
              />
              <source
                srcSet={`${slide.about_webp_mob} 1x, ${slide.mob_webp_src_2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${slide.mob_src_2x} 2x`} type="image/jpeg" />
              <img
                className={S.about__img}
                src={slide.about_jpg_mob}
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
