import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

type Product = {
  ID: string;
  EndPrice: string;
  createdAt: string;
  Description: string;
  ListingImage: string;
};

type WishlistCardProps = {
  product: Product;
  onAddToCart: any;
  handleRemove: any;
};

const WishlistCard: React.FC<WishlistCardProps> = ({
  product,
  onAddToCart,
  handleRemove,
}) => {
  const newdate: any = new Date(product?.createdAt);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-linear">
      <div className="flex w-full justify-start items-start md:items-center">
        <span
          onClick={() => handleRemove(product?.ID)}
          className="flex justify-center hover:bg-gray-200 items-center my-auto h-full p-3 md:p-4 transition-all duration-200 ease-linear"
        >
          <RxCross1 />
        </span>
        <div className="flex items-start border-l border-gray-300 gap-4 p-3 md:p-4">
          <Image
            width={200}
            height={200}
            alt={product.Description}
            src={product.ListingImage}
            className="max-w-20 max-h-20 my-auto h-full aspect-square object-cover rounded-md"
          />
        </div>
        <div className="pt-2 w-full md:pt-0">
          <h2 className="text-lg md:text-xl line-clamp-1 font-bold text-gray-800">
            {product.Description}
          </h2>
          <div className="flex md:flex-col justify-between items-center md:items-start gap-5 md:gap-0">
            <p className="text-gray-500 font-medium">{product.EndPrice}$</p>
            <p className="text-gray-400 text-sm hidden md:block">
              {newdate.toString()}
            </p>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-yellow-400 md:hidden my-2 text-black whitespace-nowrap font-semibold px-6 text-xs md:text-sm mr-2 md:mr-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-150 ease-in-out"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-yellow-400 hidden md:block text-black whitespace-nowrap font-semibold px-6 text-sm mr-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-150 ease-in-out"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default WishlistCard;
