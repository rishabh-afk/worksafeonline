"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const Banner = ({ banners }: { banners: any }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[EffectFade, Autoplay, Navigation]} // Add Navigation module
        // modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {banners &&
          banners.length > 0 &&
          banners.map((banner: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Link passHref href={banner?.PoductUrl || "/"}>
                  <Image
                    priority
                    width={100}
                    height={100}
                    unoptimized
                    alt={banner?.OfferName}
                    src={banner?.DesktopOfferImage}
                    className="object-contain h-[50vh] md:h-auto w-full hidden sm:block"
                    // style={{
                    //   clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
                    //   overflow: "hidden",
                    // }}
                  />
                </Link>
                <Link passHref href={banner?.PoductUrl || "/"}>
                  <Image
                    priority
                    width={100}
                    height={100}
                    unoptimized
                    alt={banner?.OfferName}
                    src={banner?.OfferImage}
                    className="object-cover h-[50vh] md:h-auto w-full block sm:hidden"
                    // style={{
                    //   clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
                    //   overflow: "hidden",
                    // }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <button className="custom-prev absolute top-1/2 left-4 z-10 text-white bg-[#1C1C1C] p-2.5 hover:bg-primary rounded-full">
        <FaArrowLeft size={20} />
      </button>
      <button className="custom-next absolute top-1/2 right-4 z-10 text-white bg-[#1C1C1C] p-2.5 hover:bg-primary rounded-full">
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Banner;
