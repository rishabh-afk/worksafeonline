"use client";

import Image from "next/image";
import { TbZoomScan } from "react-icons/tb";
import React, { useCallback, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import ZoomableImage from "./ZoomableImage";

type ProductImageProps = {
  image: any;
  imagesObj: any;
  images: string[];
};

const ProductImage: React.FC<ProductImageProps> = ({ images, image, imagesObj }) => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const handleSwiperInstance = useCallback((swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!image || !image.Colour || !image.Colour_Description || !imagesObj?.length) return;

    const cleanedColour = image.Colour.trim();
    const cleanedDesc = image.Colour_Description.trim().toLowerCase();

    const matched = imagesObj.find(
      (item: any) =>
        item.Colour.trim() === cleanedColour &&
        item.Colour_Description.trim().toLowerCase() === cleanedDesc
    );

    if (matched) setSelectedColor(matched.ProductImage);
  }, [image, imagesObj]);

  useEffect(() => {
    if (!swiperInstance || !selectedColor) return;

    const index = images.findIndex((img) => img === selectedColor);
    if (index !== -1) {
      swiperInstance.slideTo(index);
      swiperInstance?.autoplay?.stop();
    }
    // eslint-disable-next-line
  }, [selectedColor, swiperInstance]);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedImage]);

  if (!mounted) {
    return <div className="w-full lg:w-1/2 aspect-square bg-gray-200 animate-pulse rounded-md" />;
  }

  if (!images || images.length === 0) {
    return <div className="text-center">No images available</div>;
  }

  return (
    <div className="w-full lg:w-1/2 lg:sticky top-40 lg:h-screen flex flex-col items-center">
      {/* Main Swiper */}
      <div className="w-full aspect-square border-2 border-black/10 overflow-hidden">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
          onSwiper={handleSwiperInstance}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Thumbs, Autoplay]}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <div
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
                  className="absolute top-0 left-0 w-full h-full cursor-zoom-in object-contain transition-transform duration-300 rounded-md"
                />
                <TbZoomScan className="absolute top-3 right-3 text-4xl" />
                {selectedImage === src && (
                  <ZoomableImage src={src} isOpen={true} setIsOpen={setSelectedImage} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="w-full mt-2 md:mt-5 lg:mt-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          watchSlidesProgress
          modules={[Navigation, Thumbs]}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={`thumb-${src}`} className="cursor-pointer">
              <div
                className={`border ${activeIndex === index ? "border-primary shadow-lg" : "border-gray-300"}`}
                onClick={() => {
                  swiperInstance?.slideTo(index);
                }}
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
