"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import WishlistButton from "./WishlistButton";

const ImageComponent = ({ product, slug }: { product: any; slug: string }) => {
  const [imgSrc, setImgSrc] = useState(product?.ListingImage);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    const fallbackImageUrl =
      "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg";
    setImgSrc(fallbackImageUrl);
    setIsLoading(false); // Stop loading on error
  };

  const handleLoad = () => {
    setIsLoading(false); // Stop loading when the image is fully loaded
  };

  useEffect(() => {
    setImgSrc(product?.ListingImage);
    setIsLoading(true); // Reset loading state when the image source changes
  }, [product?.ListingImage]);

  return (
    <div className="relative group">
      <Link href={slug}>
        <div className="relative">
          {/* Image with loading overlay */}
          <Image
            width={564}
            key={imgSrc}
            height={564}
            src={imgSrc}
            onLoad={handleLoad}
            onError={handleError}
            alt={product?.Description}
            className={`h-48 md:h-64 object-contain transition-all duration-200 ease-linear p-2 border-2 mb-4 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-wave"></div>
            </div>
          )}
        </div>
      </Link>
      <WishlistButton product={product} imgSrc={imgSrc} setImgSrc={setImgSrc} />
    </div>
  );
};

export default ImageComponent;
