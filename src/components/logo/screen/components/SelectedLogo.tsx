import Image from "next/image";
import { Fetch } from "@/utils/axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { bigShoulders } from "@/app/layout";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { formatPound } from "../../general";

interface LogoData {
  name?: string;
  Size?: string;
  Item_Code?: string;
  LogoImage?: string;
  Description?: string;
  Sales_Price?: number;
  ArtworkType?: string;
}

// Define the props
interface SelectedLogoProps {
  isLogoSelected: any;
  setIsLogoSelected: (logo: LogoData | null) => void;
}

const SelectedLogo: React.FC<SelectedLogoProps> = ({
  isLogoSelected,
  setIsLogoSelected,
}) => {
  const [selectedFav, setSelectedFav] = useState<string | null>(null);

  // Function to handle API requests
  const handleWishlistAction = async (
    itemCode: string,
    action: "add" | "remove"
  ) => {
    if (!itemCode) {
      toast.warn("Please select an item first!");
      return;
    }
    const url =
      action === "add" ? "api/AddArtworkWishlist" : "api/RemoveArtworkWishlist";
    try {
      await Fetch(url, { artcode: itemCode }, 5000, true);
      setSelectedFav(action === "add" ? itemCode : null);
    } catch (error: any) {
      if (error.message.includes("401")) {
        toast.warn("Please login to manage your wishlist!", {
          autoClose: 2000,
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center ${bigShoulders.className}`}
    >
      <div className="flex pb-5 gap-5 w-full items-center justify-between">
        <p className="text-2xl font-semibold">Selected Logo</p>
        {/* Action Buttons */}
        {isLogoSelected?.Item_Code && (
          <div className="flex items-center space-x-2">
            {selectedFav === isLogoSelected.Item_Code ||
            isLogoSelected.Wishlist ? (
              <FaHeart
                size={25}
                className="cursor-pointer text-red-500"
                title="Remove from favorites"
                onClick={() =>
                  handleWishlistAction(isLogoSelected.Item_Code, "remove")
                }
              />
            ) : (
              <FaRegHeart
                size={25}
                className="cursor-pointer text-red-500"
                title="Add to favorites"
                onClick={() =>
                  handleWishlistAction(isLogoSelected.Item_Code, "add")
                }
              />
            )}
            <MdDelete
              size={26}
              title="Remove"
              className="cursor-pointer text-red-500"
              onClick={() => setIsLogoSelected(null)}
            />
          </div>
        )}
      </div>

      {/* Logo Image */}
      {isLogoSelected?.LogoImage && (
        <Image
          priority
          alt="Design"
          width={100}
          height={100}
          unoptimized
          src={isLogoSelected.LogoImage ?? null}
          className="object-contain w-2/3 h-32"
        />
      )}

      {/* Logo Details */}
      {isLogoSelected && (
        <div className="text-center mt-4">
          <p className="font-semibold text-center leading-3">
            {isLogoSelected.name}{" "}
            <span className="font-extrabold text-lg text-gray-800">
              {isLogoSelected.Description} ({isLogoSelected.Item_Code})
            </span>
          </p>

          <div className="flex justify-center items-center flex-wrap pt-1 gap-10">
            <p className="text-gray-700">
              Cost - {formatPound(isLogoSelected.Sales_Price)}
            </p>
            <p className="text-gray-700">Size - {isLogoSelected.Size}</p>
            <p className="text-gray-700">Type - {isLogoSelected.ArtworkType}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedLogo;
