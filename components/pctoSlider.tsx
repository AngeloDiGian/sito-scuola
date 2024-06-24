"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import PCTOCard from "./pctoCard";

interface AltreInfo {
  organizzazione: string;
  giornoInizio: string;
  giornoFine: string;
}

interface ProjectProps {
  titolo: string;
  descrizione: string;
  img: string;
  AS: string;
  importanza: number;
  altreInfo: AltreInfo;
}

interface PCTOSliderProps {
  pctos: ProjectProps[];
}

export default function PCTOSlider({ pctos }: { pctos: ProjectProps[] }) {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={0}
        /* autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} */
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {pctos.map((pcto, index) => (
          <SwiperSlide key={index}>
            <PCTOCard
              titolo={pcto.titolo}
              descrizione={pcto.descrizione}
              img={pcto.img}
              AS={pcto.AS}
              importanza={pcto.importanza}
              altreInfo={pcto.altreInfo}
            />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
            <BsArrowRightShort />
          </div>
          <div className="swiper-button-next slider-arrow bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
            <BsArrowRightShort />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
