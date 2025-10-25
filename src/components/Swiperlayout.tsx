"use client";

import { useSize } from "@/hooks/useSizeWindow";
import styled from "@emotion/styled";
import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Slide {
  title: string;
  image: string;
  path: string;
}

interface CardProps extends Slide {}
interface IModalBase {
  slides: Slide[];
  isContainer?: "Swiper" | "Listnganh" | "Listgt";
  cardComponent: React.FC<CardProps>;
  hidePagination?: boolean;
  navigation: boolean;
  loop: boolean;
  slidesPerView: Record<string, number>;
  grid?: {
    rows: number;
  };
}

const SwiperContainer = styled.div`
  .swiperSlide {
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  .mySwiper {
    border-radius: 20px;
    padding: 0 20px;
    transition: all 0.5s;
  }
  .swiper-button-next {
    right: 2px;
  }
  .swiper-button-prev {
    left: 2px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background-color: hsl(0, 0%, 100%);
    color: #00b14f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 3px;
    transition: all 0.5s;

    &:hover {
      background-color: #00b14f;
      cursor: pointer;
      color: #ffffff;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      display: none;
    }
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    font-size: 12px;
    font-weight: bold;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    font-size: 12px;
    font-weight: bold;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #000000;
  }

  .swiper-pagination-bullet-active {
    background-color: #00b14f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const ListnganhSwiperContainer = styled.div`
  .swiperSlide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0.5px solid #dee0e2;
    transition: all 0.5s;
  }
  .swiperSlide:hover {
    border: 0.5px solid #00b14f;
    background: #ffffff;
    box-shadow: #00d86144 0px 7px 15px;
  }
  .mySwiper {
    border-radius: 10px;
    padding: 20px;
    transition: all 0.5s;
  }
`;
const ListgtSwiperContainer = styled.div`
  .swiper-grid-column > .swiper-wrapper {
    flex-direction: inherit;
  }
  .swiperSlide {
    margin-top: 21px !important;
    height: calc((100%-30px) / 2) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  .mySwiper {
    border-radius: 12px;
    transition: all 0.5s;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 47px;
    z-index: 2;
    position: absolute;
    border-radius: 50px;
    width: 32px;
    height: 32px;
    border: none;
    outline: none;
    background-color: hsl(0, 0%, 100%);
    color: #00b14f;
    border: 1px solid #00b14f;
    transition: all 0.5s;

    &:hover {
      background-color: #00b14f;
      cursor: pointer;
      color: #ffffff;
    }
    &.swiper-button-prev {
      left: 92%;
    }

    &.swiper-button-next {
      right: 1%;
    }
  }
  @media (max-width: 768px) {
    .swiper-button-next {
      right: 5% !important;
      top: 140px; /* Adjust the right position */
    }
    .swiper-button-prev {
      left: 75% !important;
      top: 140px; /* Adjust the left position */
    }
    .mySwiper {
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .swiper-button-next {
      right: 3% !important;
      top: 110px; /* Tablet style */
    }
    .swiper-button-prev {
      left: 88% !important;
      top: 110px; /* Tablet style */
    }
    .mySwiper {
      padding: 130px 20px 20px;
    }
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    font-size: 12px;
    font-weight: bold;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    font-size: 12px;
    font-weight: bold;
  }
`;
const containerComponents: Record<string, React.FC<any>> = {
  Swiper: SwiperContainer,
  Listnganh: ListnganhSwiperContainer,
  Listgt: ListgtSwiperContainer
};
export const Swiperlayout = ({
  slides,
  slidesPerView,
  cardComponent,
  hidePagination = false,
  isContainer = "Swiper",
  grid,
  loop
}: IModalBase) => {
  const { size } = useSize();
  const dynamicSlidesPerView = slidesPerView[sizeKey(size)];

  function sizeKey(size: { width: number }) {
    if (size.width < 768) {
      return "base";
    } else if (size.width < 992) {
      return "md";
    } else if (size.width < 1280) {
      return "lg";
    } else if (size.width < 1536) {
      return "xl";
    } else {
      return "2xl";
    }
  }

  const ContainerComponent =
    containerComponents[isContainer] || SwiperContainer;

  return (
    <>
      <ContainerComponent>
        <Swiper
          slidesPerView={dynamicSlidesPerView}
          spaceBetween={21}
          autoplay={{
            delay: 3000
          }}
          loop={loop}
          grid={grid}
          modules={[Grid, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          pagination={
            !hidePagination && { el: ".swiper-pagination", clickable: true }
          }
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index} className="swiperSlide">
              {React.createElement(cardComponent, {
                key: index,
                title: slide.title,
                image: slide.image,
                path: slide.path
              })}
            </SwiperSlide>
          ))}
          {!hidePagination && <div className="swiper-pagination"></div>}
        </Swiper>
      </ContainerComponent>
    </>
  );
};
