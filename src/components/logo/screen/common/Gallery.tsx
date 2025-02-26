import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import React, { useEffect, useState } from "react";
import { formatPound } from "../../general";

interface GalleryProps {
  localData: {
    artworkList?: any[];
    savedLogos?: any[];
  };
  field: string;
  isLogoSelected: any;
  setCustomizeData: any;
  selectedOption: number;
}

const Gallery: React.FC<GalleryProps> = ({
  field,
  localData,
  isLogoSelected,
  selectedOption,
  setCustomizeData,
}) => {
  const [localSavedLogos, setLocalSavedLogos] = useState<any[]>([]);

  useEffect(() => {
    const logos =
      field === "artworkList" ? localData.artworkList : localData.savedLogos;
    if (logos) setLocalSavedLogos(logos);
  }, [field, localData]);

  if (!localSavedLogos.length) {
    return <p className="text-center text-gray-500">No logos available.</p>;
  }

  const selectLogo = (option: any) => {
    const key = field === "artworkList" ? "textDesign" : "logoDesign";
    setCustomizeData((prev: any) => ({ ...prev, [key]: option }));
  };

  return (
    <div
      className={`border-4 rounded-2xl p-5 ${
        selectedOption === 1 ? "border-green-500" : "border-gray-100"
      }`}
    >
      {/* Header */}
      <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
        <span
          className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
        >
          Option 1
        </span>
        <span className={`px-2 text-black ${bigShoulders.className}`}>
          - CHOOSE MY {field === "artworkList" ? "TEXT" : "LOGO"}
        </span>
      </div>

      {/* Logo Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 ${
          field === "logo" && "lg:grid-cols-4"
        } gap-3`}
      >
        {localSavedLogos.map((data, index) => {
          const isSelected = isLogoSelected?.Item_Code === data?.Item_Code;
          return (
            <div
              key={index}
              onClick={() => selectLogo(data)}
              className="group relative cursor-pointer"
            >
              {/* Logo Card */}
              <div
                className={`border-4 rounded-lg transition h-24 cursor-pointer bg-white p-2 flex flex-col items-center justify-center ${
                  isSelected ? "border-green-500" : "border-gray-100"
                }`}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <Image
                    priority
                    width={100}
                    alt="Design"
                    unoptimized
                    height={100}
                    src={data.LogoImage || "/placeholder.png"}
                    className="object-contain w-full max-h-full max-w-full"
                  />
                </div>
              </div>

              {/* Item Details */}
              <div className="text-xs text-left mt-1">
                <p className="font-semibold line-clamp-1">{data.Item_Code}</p>
                <p className="text-gray-500 line-clamp-1">{data.Description}</p>
              </div>

              {/* Tooltip */}
              <div className="hidden group-hover:block absolute top-24 left-40 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 shadow-md rounded-lg z-30 w-52 p-2 pt-3">
                <div className="text-xs text-left space-y-0.5">
                  <p className="font-bold leading-4 text-sm text-gray-700">
                    {data.Description} ({data.Item_Code})
                  </p>
                  <p className="text-gray-600">
                    Cost - {formatPound(data.Sales_Price)}
                  </p>
                  <p className="text-gray-600">Size - {data.Size}</p>
                  <p className="text-gray-600">Type - {data.ArtworkType}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
