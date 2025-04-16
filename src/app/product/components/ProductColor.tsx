import { includes } from "@/utils/polyfills";

export const extractColorFromDescription = (description: string) => {
  return description.split("/").map((color) => color.trim());
};

const ProductColors = ({
  productColors,
  selectedFields,
  setSelectedFields,
}: {
  productColors: any;
  selectedFields: any;
  setSelectedFields: any;
}) => {
  return (
    <div>
      <p className="mt-4 font-semibold">Colour</p>
      <div className="mt-2 flex flex-wrap gap-2 items-center">
        {productColors.map((color: any) => {
          const [primaryColor, secondaryColor] =
            (color.Html_Code && color.Html_Code?.split("/")) ||
            extractColorFromDescription(color.Colour_Description);

          const isSelected =
            selectedFields?.color?.Colour_Sequence_No ===
            color.Colour_Sequence_No;

          return (
            <div
              key={color.Colour_Sequence_No}
              onClick={() =>
                setSelectedFields({ ...selectedFields, color: color })
              }
              title={color.Colour_Description}
              className="relative group cursor-pointer"
            >
              {/* Outer Wrapper for Border */}
              <div
                className={`w-10 h-10 p-[2px] transition-all duration-200 ease-linear rounded-full ${
                  isSelected ? "border-2 border-black" : "border-none"
                }`}
              >
                {/* Inner Circle */}
                <div
                  className={`w-full h-full rounded-full overflow-hidden flex`}
                >
                  {/* Primary Color */}
                  <div
                    className={`flex justify-center items-center ${
                      includes(["#ffffff", "#FFFFFF"], primaryColor) &&
                      "bg-gray-50"
                    } ${
                      primaryColor && secondaryColor ? "w-1/2" : "w-full"
                    } h-full`}
                    style={{
                      backgroundColor:
                        primaryColor &&
                        !includes(["#ffffff", "#FFFFFF"], primaryColor)
                          ? primaryColor
                          : "",
                    }}
                  >
                    {includes(["#ffffff", "#FFFFFF"], primaryColor) && "W"}
                  </div>
                  {/* Secondary Color */}
                  {secondaryColor && (
                    <div
                      className="w-1/2 h-full"
                      style={{ backgroundColor: secondaryColor }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColors;
