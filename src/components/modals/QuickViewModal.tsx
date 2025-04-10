// import Link from "next/link";
import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
// import { bigShoulders } from "@/app/layout";
import { productData } from "@/data/productData";
import QuickViewProductSwiper from "./QuickViewProductSwiper";
import ProductDetails from "@/app/product/components/ProductDetail";
// import ProductMetaInfo from "@/app/product/components/ProductMetaInfo";
import QuantitySelector from "@/app/product/components/QuantitySelector";
import { useState } from "react";

const QuickViewModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
  isVisible: boolean;
  onclose: () => void;
}) => {
  const [image, setImage] = useState<any>({});

  if (!data) return null;

  const productListImages =
    data?.ProductImageList &&
    data?.ProductImageList.length > 0 &&
    data?.ProductImageList.map((image: any) => image?.ProductImage);
  const product = { ...data, ...productData };

  return (
    <Modal
      onClose={onclose}
      removePadding={true}
      isVisible={isVisible}
      showCloseButton={false}
    >
      <p className="w-full flex justify-end items-center bg-white rounded-t-xl fixed p-4">
        <RxCross1
          size={24}
          className="cursor-pointer text-black"
          onClick={onclose}
        />
      </p>
      <div className="flex flex-col pt-14 p-4 lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <QuickViewProductSwiper
            image={image}
            imagesObj={data?.ProductImageList}
            productListingImages={productListImages ?? []}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <ProductDetails product={product} />
            <QuantitySelector
              product={product}
              setImage={setImage}
              showLogoCustomisation={product.ShowDesignLogo}
            />
          </div>
          {/* <div className="bg-gray-300 mt-5 h-[1px]" /> */}
          {/* <ProductMetaInfo /> */}
          {/* <div className="bg-gray-300 h-[1px] mt-5" /> */}
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
