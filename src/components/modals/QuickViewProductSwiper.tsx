"use client";

import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

const QuickViewProductSwiper = ({
  productListingImages,
}: {
  productListingImages: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  }, []);

  const handleSwiperInstance = useCallback((swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  const handleImageError = (index: number) => {
    const fallbackImageUrl =
      "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg";
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = false;
      return newLoaded;
    });
    return fallbackImageUrl;
  };

  return (
    <div className="sticky top-16 border rounded-xl">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        onSwiper={handleSwiperInstance}
        onSlideChange={handleSlideChange}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {productListingImages &&
          productListingImages.length > 0 &&
          productListingImages.map((banner: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="relative group cursor-zoom-in overflow-hidden w-full h-[50vh] lg:h-screen rounded-md"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Skeleton Loader */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gray-200 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-wave"></div>
                    </div>
                  )}

                  {/* Image */}
                  <Image
                    priority
                    width={100}
                    height={100}
                    unoptimized
                    src={banner}
                    style={{
                      transformOrigin: `${position.x}% ${position.y}%`,
                    }}
                    className={`absolute top-0 left-0 object-contain transition-transform duration-300 group-hover:scale-[2.25] rounded-md h-auto lg:h-[75vh] w-full ${
                      imageLoaded[index] ? "" : "opacity-0"
                    }`}
                    alt={`QuickViewProductSwiper-${index + 1}`}
                    onLoadingComplete={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default QuickViewProductSwiper;
