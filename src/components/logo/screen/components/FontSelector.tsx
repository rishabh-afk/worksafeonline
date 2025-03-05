import { bigShoulders } from "@/app/layout";
import React, { useEffect, useState } from "react";

// Define types for the props
interface FontSelectorProps {
  field: string;
  localData: {
    textFontFamily: { FontFamily: string }[]; // assuming textFontFamily is an array of objects with FontFamily as string
  };
  updateForm: any;
  selectedFields: any;
}

const FontSelector = ({
  field,
  localData,
  updateForm,
  selectedFields,
}: FontSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Ensure dropdownOpen is typed as boolean
  const [selectedFont, setSelectedFont] = useState("");

  const handleFontChange = (field: string, font: string): void => {
    updateForm(field, "FontFamily", font);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (selectedFields && field)
      setSelectedFont(selectedFields[field]["FontFamily"]);
    else setSelectedFont("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field, selectedFields[field]["FontFamily"]]);

  return (
    <div className="grid grid-cols-4 items-center gap-2">
      <div className="col-span-4 flex justify-between mt-5 items-center gap-2">
        <h4
          className={`text-left font-bold whitespace-nowrap text-lg ${bigShoulders.className}`}
        >
          Select font:
        </h4>
        <div className="relative w-full">
          {/* Trigger Button */}
          <div
            tabIndex={0}
            onClick={() => setDropdownOpen((prev) => !prev)}
            onBlur={() => setDropdownOpen(false)}
            aria-expanded={dropdownOpen}
            className="border border-gray-300 text-left px-3 py-2 text-sm line-clamp-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full"
          >
            {selectedFont || "Select Font"}
          </div>

          {/* Dropdown List */}
          {dropdownOpen && (
            <ul
              className="absolute left-0 top-full mt-1 h-48 overflow-auto w-full border border-gray-300 bg-white shadow-md rounded z-10"
              role="listbox"
            >
              {localData.textFontFamily.map((font) => (
                <li
                  tabIndex={0}
                  key={font.FontFamily}
                  onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                  onClick={() => {
                    setSelectedFont(font.FontFamily);
                    handleFontChange(field, font.FontFamily);
                  }}
                  style={{ fontFamily: font.FontFamily }}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                >
                  {font.FontFamily}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FontSelector;
