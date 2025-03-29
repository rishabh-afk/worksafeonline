"use client";

import Image from "next/image";
import { TbZoomScan } from "react-icons/tb";
import React, { useState, useCallback, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import ZoomableImage from "./ZoomableImage";

type ProductImageProps = {
  images: string[];
};

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [mounted, setMounted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [position, setPosition] = useState({ x: 50, y: 50 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  // const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
  //   const { left, top, width, height } =
  //     e.currentTarget.getBoundingClientRect();
  //   const x = ((e.clientX - left) / width) * 100;
  //   const y = ((e.clientY - top) / height) * 100;
  //   setPosition({ x, y });
  // }, []);

  // const handleMouseEnter = () => swiperInstance?.autoplay.stop();
  // const handleMouseLeave = () => swiperInstance?.autoplay.start();

  const handleSwiperInstance = useCallback((swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    setMounted(false);
  }, []);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedImage]);

  if (!images || images.length === 0) {
    return <div className="text-center">No images available</div>;
  }

  if (mounted)
    return (
      <div className="w-full lg:w-1/2 aspect-square bg-gray-200 animate-pulse rounded-md" />
    );

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
                // onMouseMove={handleMouseMove}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedImage(src)}
                className="relative group overflow-hidden w-full h-full"
              >
                <Image
                  src={src}
                  alt={`Main Image ${index + 1}`}
                  width={600}
                  height={400}
                  unoptimized
                  priority
                  // style={{
                  //   transformOrigin: `${position.x}% ${position.y}%`,
                  // }}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 rounded-md"
                />
                <TbZoomScan className="absolute top-3 right-3 text-4xl" />
                {selectedImage === src && <ZoomableImage src={src} isOpen={selectedImage === src} setIsOpen={setSelectedImage} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Thumbnails */}
      <div className="w-full mt-2 md:mt-5 lg:mt-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3} // Default: 3 thumbnails
          breakpoints={{
            0: { slidesPerView: 4 }, // 4 thumbnails on md
            1024: { slidesPerView: 5 }, // 5 thumbnails on lg
          }}
          modules={[Navigation, Thumbs]}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={src} className="cursor-pointer">
              <div
                className={`border ${activeIndex === index
                  ? "border-primary shadow-lg"
                  : "border-gray-300"
                  }`}
                onClick={() => swiperInstance?.slideTo(index)}
              >
                <Image
                  src={src}
                  width={60}
                  height={60}
                  priority
                  unoptimized
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full aspect-square p-1 md:p-2 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImage;
