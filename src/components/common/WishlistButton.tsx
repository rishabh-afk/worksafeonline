"use client";

import Image from "next/image";
import { Get } from "@/api/generalApi";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { includes } from "@/utils/polyfills";
import { RxEnterFullScreen } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import QuickViewModal from "../modals/QuickViewModal";
import eventEmitter, { handleAddToWishlist } from "@/hooks/useEventEmitter";
import { removeFromWishlist } from "@/api/wishlistApis";

const WishlistButton = ({
  imgSrc,
  product,
  setImgSrc,
}: {
  product: any;
  imgSrc: string;
  setImgSrc: any;
}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [disable, setDIisabled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      if (Array.isArray(parsedWishlist)) {
        setIsSelected(includes(parsedWishlist, product.Style));
      } else console.warn("Wishlist is not in the correct format.");
    }
  }, [product.Style]);

  const handleQuickView = async ({
    category,
    productId,
  }: {
    productId: string;
    category: string | number;
  }) => {
    const toastId = toast.loading("Please wait...");
    try {
      setDIisabled(true);
      const productResponse = await Get(
        `api/ProductDetails12?product_id=${productId}&category_id=${category}`
      );
      if (productResponse?.ProductID) {
        toast.dismiss(toastId);
        setIsVisible(true);
        setData({
          ...productResponse,
          slug: `/product/${category}/${productId}`,
        });
        toast.dismiss(toastId);
      } else {
        toast.dismiss(toastId);
        toast.update(toastId, {
          render: "Product not found!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error: unknown) {
      toast.dismiss(toastId);
      const errMessage = (error as Error).message || "Failed to delete data";
      console.log("first error", errMessage);
      toast.error("An error occurred while fetching product details!");
    } finally {
      setDIisabled(false);
    }
  };

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  const selectProductToWishlist = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (eventEmitter && !token) {
        eventEmitter.emit("openLoginModal");
      } else if (await handleAddToWishlist(product)) {
        setIsSelected(true);
      }
    } catch (error) {
      console.log("AddToWishlist error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    const id = product.Style;
    const removedResponse = await removeFromWishlist(id);
    if (removedResponse?.status) {
      let ids: any[] = [];
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        try {
          const parsedWishlist = JSON.parse(storedWishlist);
          if (Array.isArray(parsedWishlist))
            ids = parsedWishlist.filter((wishlist: any) => wishlist !== id);
        } catch (error) {
          console.error("Error parsing wishlist:", error);
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(ids));
      eventEmitter?.emit("removeFromWishlist", id);
      setIsSelected(false);
    }
  };

  const debouncedRemoveToWishlist = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      handleRemove();
    }, 1000);
  };

  const debouncedSelectProductToWishlist = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      selectProductToWishlist();
    }, 1000);
  };

  return (
    <>
      <QuickViewModal
        data={data}
        isVisible={isVisible}
        onclose={handleToggle}
      />
      <span className="text-black absolute hover:bg-slate-100 rounded-full p-[6px] top-1 right-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear">
        {isSelected ? (
          <FaHeart
            size={25}
            className="text-red-500"
            onClick={debouncedRemoveToWishlist}
            title="Already added to wishlist"
          />
        ) : (
          <CiHeart
            size={25}
            title="Add to wishlist"
            onClick={debouncedSelectProductToWishlist}
          />
        )}
      </span>
      <span
        onClick={() => {
          if (!disable)
            handleQuickView({
              category: product?.MenuId,
              productId: product?.Style,
            });
        }}
        className="text-black absolute hover:bg-slate-100 rounded-full p-[6px] top-10 right-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear"
      >
        <RxEnterFullScreen title="Quick Shop" size={24} />
      </span>
      {product?.MultipleImage && product?.MultipleImage.length > 0 && (
        <div className="grid p-1.5 grid-cols-5 gap-1 absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear">
          {product?.MultipleImage.slice(0, 5).map(
            (productImage: any, index: number) => {
              return (
                <Image
                  width={96}
                  height={96}
                  alt={"Image"}
                  src={productImage?.ThumbnailImage}
                  key={`${productImage?.Style}-${index}`}
                  onMouseEnter={() => setImgSrc(productImage?.ProductImage)}
                  onMouseLeave={() => setImgSrc(productImage?.ProductImage)}
                  className={`w-full h-full object-contain aspect-square transition-all duration-200 ease-linear border rounded ${
                    imgSrc === productImage?.ProductImage && "border-black"
                  }`}
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default WishlistButton;
