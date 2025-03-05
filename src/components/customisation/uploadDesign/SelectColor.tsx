import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoAddOutline } from "react-icons/io5";

function removeDuplicateHtmlCodes(colourArray: any) {
  const uniqueHtmlCodes = new Map();

  colourArray.forEach((colour: any) => {
    if (!uniqueHtmlCodes.has(colour.Html_Code)) {
      uniqueHtmlCodes.set(colour.Html_Code, colour);
    }
  });
  return Array.from(uniqueHtmlCodes.values());
}

const SelectColor = ({
  field,
  localData,
  selectedFields,
  handleColorChange,
}: {
  field: any;
  localData: any;
  selectedFields: any;
  handleColorChange: any;
}) => {
  const [colorsData, setColors] = useState(
    removeDuplicateHtmlCodes(localData.textColours)
  );
  const [newColor, setNewColor] = useState("#000000");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (selectedFields && field)
      setSelectedColor(selectedFields[field]["TextColour"]);
    else setSelectedColor("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field, selectedFields[field]["TextColour"]]);

  return (
    <div>
      <h4
        className={`text-left font-bold pb-2 text-lg ${bigShoulders.className}`}
      >
        Choose Colour:
      </h4>
      <div className="flex flex-wrap gap-2">
        {colorsData.map((color: any) => {
          const isSelected = selectedColor === color.Html_Code;
          return (
            <div
              key={color.Html_Code}
              onClick={() => {
                setSelectedColor(color.Html_Code);
                handleColorChange(field, color.Html_Code);
              }}
              style={{
                boxShadow: !isSelected
                  ? "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.2)"
                  : "",
              }}
              className="relative group cursor-pointer rounded-full"
            >
              <div
                className={`w-8 h-8 transition-all duration-200 ease-linear rounded-full ${
                  isSelected
                    ? "p-[2px] border-2 border-black/80"
                    : "p-0 border-none"
                }`}
              >
                <div
                  className={`w-full h-full rounded-full overflow-hidden`}
                  style={{ backgroundColor: color?.Html_Code }}
                ></div>
              </div>
              <span className="hidden group-hover:block absolute -top-5 left-5 bg-white font-normal px-4 py-1 rounded z-20 border text-sm">
                {color?.Colour_Description}
              </span>
            </div>
          );
        })}

        {/* Add new color section */}
        <div className="relative group cursor-pointer">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300 transition-colors">
            {/* Color Picker Input */}
            <input
              type="color"
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              className="absolute top-0 left-0 w-8 h-8 opacity-0 cursor-pointer"
            />
            <span title="Add Color" className="text-xl text-black font-bold">
              <IoAddOutline />
            </span>

            <p className="text-xs group-hover:block hidden absolute top-10 left-0 w-40 bg-white border rounded-lg p-2 shadow-md text-left text-gray-600">
              Disclaimer: {localData.modalData?.TextColourDisclaimer}
            </p>
          </div>

          {/* Color Picker with Add Button */}
          {newColor &&
            !localData.textColours.some(
              (color: any) => color.Html_Code === newColor
            ) && (
              <div className="absolute top-12 left-0 z-30">
                <button
                  onClick={() => {
                    setColors([
                      ...localData.textColours,
                      { Colour_Description: newColor, Html_Code: newColor },
                    ]);
                    setSelectedColor(newColor);
                    handleColorChange(newColor);
                  }}
                  className="w-full whitespace-nowrap text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  + Add
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
