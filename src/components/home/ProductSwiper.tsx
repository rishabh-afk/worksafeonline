"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import ProductCard from "../common/ProductCard";

const ProductSwiper = ({
  products,
  slidesPerViewDesktop,
}: {
  products: any;
  slidesPerViewDesktop?: number;
}) => {
  if (!products || !Array.isArray(products) || products.length === 0)
    return (
      <div className="text-center text-gray-500">
        <p>No products available at the moment.</p>
      </div>
    );
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: slidesPerViewDesktop ?? 4,
            spaceBetween: 40,
          },
          1680: {
            slidesPerView: products.length >= 5 ? 5 : 4,
            spaceBetween: 25,
          },
          1920: {
            slidesPerView: products.length >= 6 ? 6 : 4,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        {products &&
          products.length > 0 &&
          products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
