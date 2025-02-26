"use client";

import Image from "next/image";
import { TbZoomScan } from "react-icons/tb";
import React, { useState, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

type ProductImageProps = {
  images: string[];
};

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  }, []);

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

  const handleSwiperInstance = useCallback((swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  if (!images || images.length === 0) {
    console.log(setThumbsSwiper);
    return <div className="text-center">No images available</div>;
  }

  return (
    <div className="w-full lg:w-1/2 lg:sticky top-40 lg:h-screen flex flex-col items-center">
      {/* Main Swiper (Bigger) */}
      <div className="w-full aspect-square border-2 border-black/10 overflow-hidden">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
          onSwiper={handleSwiperInstance}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Thumbs, Autoplay]}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative group cursor-zoom-in overflow-hidden w-full h-full"
              >
                <Image
                  src={src}
                  alt={`Main Image ${index + 1}`}
                  width={600}
                  height={400}
                  unoptimized
                  priority
                  style={{
                    transformOrigin: `${position.x}% ${position.y}%`,
                  }}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[2.25] rounded-md"
                />
                <TbZoomScan className="absolute top-3 right-3 text-4xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Horizontal Thumbnails Grid */}
      <div className="w-full mt-2 md:mt-5 lg:mt-3 grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-3 justify-start">
        {images.map((src, index) => (
          <div
            key={src}
            className={`w-fit shadow-sm cursor-pointer ${
              activeIndex === index
                ? "border-primary shadow-lg border-2"
                : "border-gray-300 border"
            }`}
            onClick={() => thumbsSwiper?.slideTo(index)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={60}
              height={60}
              priority
              unoptimized
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] p-1 md:p-2 h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
