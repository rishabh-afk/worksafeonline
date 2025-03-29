"use client";

import { toast } from "react-toastify";
import { FaRegImage } from "react-icons/fa";
import { bigShoulders } from "@/app/layout";
import { useEffect, useState } from "react";
import CustomizeLogoModal from "./CustomizeLogoModal";

const Logo = ({
  product,
  fieldsCheck,
  selectedFields,
  filterProductSizes,
}: {
  product: any;
  fieldsCheck: any;
  selectedFields: any;
  filterProductSizes: any;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const {
    size,
    color,
    fitting,
    quantity,
    ProductID,
    ProductName,
    ProductImage,
  } = product;

  const updatedProduct = {
    size,
    color,
    fitting,
    quantity,
    ProductID,
    ProductName,
    ProductImage,
  };

  const handleCustomizeLogo = () => {
    if (fieldsCheck()) return;
    if (
      filterProductSizes &&
      filterProductSizes.length > 0 &&
      selectedFields?.size.length === 0
    )
      return toast.info("Please select a size");

    handleToggle();
  };

  return (
    <>
      {isVisible && (
        <CustomizeLogoModal
          data={updatedProduct}
          isVisible={isVisible}
          onclose={handleToggle}
        />
      )}
      <button
        type="button"
        onClick={handleCustomizeLogo}
        className={`w-full flex items-center justify-center gap-3 px-4 py-2 border transition-all duration-200 ease-linear border-primary hover:bg-primary text-2xl font-bold uppercase bg-black text-white ${bigShoulders.className}`}
      >
        <FaRegImage className="text-2xl" />
        Add Logo
      </button>
    </>
  );
};

export default Logo;
