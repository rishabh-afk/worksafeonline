"use client";

import { Product } from "@/types/api";
import { Fetch } from "@/utils/axios";
import { toast } from "react-toastify";
import Logo from "@/components/logo/Logo";
import ProductColors from "./ProductColor";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import SizeQuantities from "./SizeQuantities";
import ProductFitting from "./ProductFitting";
import AddToCartButton from "./AddToCartButton";
import { isTokenExist } from "@/api/generateDeviceId";

interface QuantitySelectorProps {
  product: Product;
  showLogoCustomisation?: any;
}

const QuantitySelector = ({
  product,
  showLogoCustomisation,
}: QuantitySelectorProps) => {
  const [price, setPrice] = useState({
    ProductSellingPrice: product?.ProductSellingPrice,
    ProductActualPrice: product?.ProductActualPrice,
  });
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [filterProductSizes, setFilterProductSizes] = useState<any>(
    product?.ProductSizes
  );
  const [selectedFields, setSelectedFields] = useState<any>({
    size: [],
    color: { Colour_Sequence_No: "" },
    fitting: { Fitting_Sequence_No: "" },
  });

  const filterProductFittings = product?.ProductFittings.filter(
    (fittings: any) => fittings?.Fitting?.trim() !== "NA"
  );

  useEffect(() => {
    const filterProductsForStock = (
      products: any[],
      filterProductSizes: any[]
    ) => {
      if (!Array.isArray(products) || !Array.isArray(filterProductSizes))
        return [];

      // Filter out invalid sizes
      const validProductSizes: any[] =
        filterProductSizes?.filter(
          (size: any) => size?.Size?.trim() !== "NA"
        ) || [];

      // Create a stock map from products
      const productStockMap = products.reduce((acc, product) => {
        if (
          product &&
          typeof product.Size_Sequence_No !== "undefined" &&
          typeof product.StockQty !== "undefined"
        ) {
          const keyParts = [
            selectedFields.color ? product.Colour_Sequence_No : null,
            product.Size_Sequence_No, // Always include size
            selectedFields.fitting ? product.Fitting_Sequence_No : null,
          ].filter((part) => part !== null); // Remove null values

          const key = keyParts.join("_");
          acc[key] = product.StockQty;
        }
        return acc;
      }, {} as Record<string, number>);

      // Map sizes to include stock quantity
      const updatedSizes = validProductSizes.map((size) => {
        const keyParts = [
          selectedFields.color?.Colour_Sequence_No ?? null, // Include selected color if exists
          size.Size_Sequence_No, // Always include size
          selectedFields.fitting?.Fitting_Sequence_No ?? null, // Include selected fitting if exists
        ].filter((part) => part !== null); // Remove null values

        const key = keyParts.join("_");

        const findStockQty = (keyPart: string) => {
          const matchingKeys = Object.keys(productStockMap).filter((key) =>
            key.includes(keyPart)
          );
          if (matchingKeys.length > 0) return productStockMap[matchingKeys[0]];
          else return 0;
        };
        return {
          ...size,
          qty:
            key && productStockMap[key]
              ? productStockMap[key]
              : findStockQty(key),
        };
      });
      return updatedSizes;
    };

    if (
      product?.ProductPricingByColourSizeFit &&
      product?.ProductPricingByColourSizeFit.length > 0 &&
      Array.isArray(filterProductSizes)
    ) {
      const filteredProductsForStock = filterProductsForStock(
        product.ProductPricingByColourSizeFit,
        product?.ProductSizes
      );
      setFilterProductSizes(filteredProductsForStock);
    } else {
      setFilterProductSizes([]);
    }
    // eslint-disable-next-line
  }, [selectedFields, product]);

  useEffect(() => {
    const filterProducts = (products: any[], config: any) => {
      return products.filter((product) => {
        const sizeMatch = config?.size?.some(
          (selectedSize: any) =>
            selectedSize.Size_Sequence_No === product?.Size_Sequence_No
        );
        return (
          sizeMatch &&
          product?.Colour_Sequence_No === config?.color?.Colour_Sequence_No &&
          product?.Fitting_Sequence_No === config?.fitting?.Fitting_Sequence_No
        );
      });
    };

    if (
      product?.ProductPricingByColourSizeFit &&
      product?.ProductPricingByColourSizeFit.length > 0
    ) {
      const filteredProducts = filterProducts(
        product?.ProductPricingByColourSizeFit,
        selectedFields
      );
      if (filteredProducts.length > 0) {
        setPrice({
          ProductSellingPrice: filteredProducts[0]?.SPPrice,
          ProductActualPrice: filteredProducts[0]?.TCPrice,
        });
      }
    }
  }, [selectedFields, product]);

  const fieldsCheck = () => {
    if (
      product?.ProductColour &&
      product?.ProductColour.length > 0 &&
      !selectedFields?.color?.Colour_Sequence_No
    ) {
      toast.info("Please select a color!");
      return true;
    }
    if (
      filterProductFittings &&
      filterProductFittings.length > 0 &&
      !selectedFields?.fitting?.Fitting_Sequence_No
    ) {
      toast.info("Please select a fitting!");
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (
      !product ||
      !Array.isArray(product.ProductColour) ||
      !Array.isArray(filterProductFittings)
    )
      return;

    const hasSingleColor = product.ProductColour.length === 1;
    const hasSingleFitting = filterProductFittings.length === 1;

    if (hasSingleColor || hasSingleFitting) {
      setSelectedFields((prev: any) => {
        const newSelectedFields = {
          size: [],
          color: hasSingleColor ? product.ProductColour[0] : prev.color,
          fitting: hasSingleFitting ? filterProductFittings[0] : prev.fitting,
        };
        return JSON.stringify(prev) === JSON.stringify(newSelectedFields)
          ? prev
          : newSelectedFields;
      });
    }
    // eslint-disable-next-line
  }, [product?.ProductColour.length, filterProductFittings.length]);

  // fetch customization logo check for loggedIn users
  useEffect(() => {
    const fetchProduct = async () => {
      console.log(showLogoCustomisation);
      if (!isTokenExist() || showLogoModal) return;
      const url = `api/ProductDetails12`;
      const params = {
        product_id: product?.slug,
        category_id: product?.category,
      };
      const productResponse: any = await Fetch(url, params, 5000, true, false);
      if (productResponse?.ShowDesignLogo === 1) setShowLogoModal(true);
      else setShowLogoModal(false);
    };
    if (product?.category && product?.slug) fetchProduct();
    // eslint-disable-next-line
  }, [product]);

  return (
    <>
      {price?.ProductActualPrice && price?.ProductSellingPrice && (
        <p className={`mt-4 text-4xl space-x-2 ${bigShoulders.className}`}>
          <span>£{price.ProductSellingPrice.toFixed(2)}</span>
          <span className="text-3xl text-gray-500 line-through">
            £{price.ProductActualPrice.toFixed(2)}
          </span>
        </p>
      )}
      {product?.ProductColour.length > 0 && (
        <ProductColors
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          productColors={product?.ProductColour}
        />
      )}
      {filterProductFittings.length > 0 && (
        <ProductFitting
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          productFittings={filterProductFittings}
        />
      )}
      {filterProductSizes.length > 0 && (
        <SizeQuantities
          fieldsCheck={fieldsCheck}
          sizes={filterProductSizes}
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
        />
      )}
      <div className="flex text-center py-5 gap-3">
        <AddToCartButton
          fieldsCheck={fieldsCheck}
          selectedFields={selectedFields}
          filterProductSizes={filterProductSizes}
          product={{
            ...product,
            ProductSellingPrice: price.ProductSellingPrice,
          }}
        />
      </div>
      {showLogoModal && (
        <Logo
          fieldsCheck={fieldsCheck}
          selectedFields={selectedFields}
          filterProductSizes={filterProductSizes}
          product={{
            ...(product || {}),
            ...(selectedFields || {}),
            quantity: 0,
          }}
        />
      )}
    </>
  );
};

export default QuantitySelector;
