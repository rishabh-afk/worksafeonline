"use client";

import { useState } from "react";
import ProductImage from "../../components/ProductImage";
import ProductContent from "../../components/ProductContent";

const ClientPage = ({
  slug,
  category,
  productResponse,
  productListImages,
}: {
  slug: any;
  category: any;
  productResponse: any;
  productListImages: any;
}) => {
  const [image, setImage] = useState<any>({});
  return (
    <>
      <ProductImage
        image={image}
        images={productListImages}
        imagesObj={productResponse.ProductImageList}
      />
      <ProductContent
        product={{ ...productResponse, category, slug }}
        setImage={setImage}
      />
    </>
  );
};

export default ClientPage;
