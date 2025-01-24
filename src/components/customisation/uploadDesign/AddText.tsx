import { useRef, useState } from "react";
import SelectColor from "./SelectColor";
import { bigShoulders } from "@/app/layout";
import TextSizeSelector from "./TextSizeSelector";
import CharacterSpacingSelector from "./CharacterSpacingSelector";
import FontWeightSelector from "./FontWeightSelector";
import ItalicButton from "./ItalicText";
import TextAlignButtons from "./TextAlignButtons";

const fonts = [
  { name: "Select Font", value: "" },
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Verdana", value: "Verdana, sans-serif" },
  { name: "Helvetica", value: "Helvetica, sans-serif" },
  { name: "Tahoma", value: "Tahoma, sans-serif" },
  { name: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
  { name: "Times New Roman", value: "'Times New Roman', serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Courier New", value: "'Courier New', monospace" },
  { name: "Palatino", value: "Palatino, serif" },
  { name: "Garamond", value: "Garamond, serif" },
  { name: "Segoe UI", value: "'Segoe UI', sans-serif" },
  { name: "Roboto", value: "Roboto, sans-serif" },
];

interface AddTextProps {
  modalData: any;
  setSelectedFilters: any;
  selectedFields: Record<string, string | undefined>;
}

const AddText: React.FC<AddTextProps> = ({
  modalData,
  selectedFields,
  setSelectedFilters,
}) => {
  // const [index, setIndex] = useState(1);
  const index = 1;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus(); // Focus the next input field
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedFilters((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (hexCode: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, color: hexCode }));
  };

  const handleFontChange = (font: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, font }));
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <>
      <div className="w-3/5 flex flex-col space-y-2">
        <SelectColor
          modalData={modalData}
          handleColorChange={handleColorChange}
        />

        <div className="grid grid-cols-4 items-center gap-2">
          <div className="col-span-4 flex justify-between mt-5 items-center gap-20">
            <h4
              className={`text-left font-bold whitespace-nowrap text-xl ${bigShoulders.className}`}
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
                className="border border-gray-300 text-left p-3 text-sm line-clamp-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full"
              >
                {selectedFields?.font || "Select Font"}
              </div>

              {/* Dropdown List */}
              {dropdownOpen && (
                <ul
                  className="absolute left-0 top-full mt-1 h-48 overflow-auto w-full border border-gray-300 bg-white shadow-md rounded z-10"
                  role="listbox"
                >
                  {fonts.map((font) => (
                    <li
                      tabIndex={0}
                      key={font.value}
                      onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                      onClick={() => handleFontChange(font.value)}
                      style={{ fontFamily: font.value }}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                    >
                      {font.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Text Inputs */}
        <h4
          className={`text-left font-bold pt-3 text-xl ${bigShoulders.className}`}
        >
          Add Text:
        </h4>
        <div className="space-y-2">
          {["textLine1", "textLine2", "textLine3"].map((name, index) => (
            <div key={name} className="flex gap-3 justify-center items-center">
              <input
                type="text"
                maxLength={30}
                name={name}
                placeholder={`Enter Text ${name.replace("textLine", "Line ")} ${
                  index > 0 ? "(optional)" : ""
                }`}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyPress(e, index)}
                ref={(el: any) => (inputRefs.current[index] = el)} // Assign input ref
                className="border w-full text-sm border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full p-3 outline-none"
              />
              <TextSizeSelector
                hideText={true}
                size={`textSize${index + 1}`}
                setSelectedFilters={setSelectedFilters}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/5 my-auto min-h-full">
        <div className="space-y-2">
          <div className="flex gap-3 mb-5 justify-center items-center">
            <CharacterSpacingSelector
              space={`spacing${index + 1}`}
              setSelectedFilters={setSelectedFilters}
            />
            <FontWeightSelector
              font={`fontWeight${index + 1}`}
              setSelectedFilters={setSelectedFilters}
            />
            <ItalicButton
              font={`fontStyle${index + 1}`}
              setSelectedFilters={setSelectedFilters}
            />
            <TextAlignButtons
              font={`textAlign${index + 1}`}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
        </div>
        <div
          style={{
            color: selectedFields?.color,
            fontFamily: selectedFields?.font,
          }}
          className="col-span-2 flex-col rounded-lg py-10 min-h-full bg-gray-100 flex justify-center items-center"
        >
          <div className="relative w-fit">
            <div className={`flex flex-col`}>
              <span
                className={`${selectedFields?.textSize1} ${selectedFields?.fontStyle1} ${selectedFields?.textAlign1} ${selectedFields?.spacing1} ${selectedFields?.fontWeight1}`}
              >
                {selectedFields?.textLine1}
              </span>
              <span
                className={`${selectedFields?.textSize2} ${selectedFields?.fontStyle2} ${selectedFields?.textAlign2} ${selectedFields?.spacing2} ${selectedFields?.fontWeight2}`}
              >
                {selectedFields?.textLine2}
              </span>
              <span
                className={`${selectedFields?.textSize3} ${selectedFields?.fontStyle3} ${selectedFields?.textAlign3} ${selectedFields?.spacing3} ${selectedFields?.fontWeight3}`}
              >
                {selectedFields?.textLine3}
              </span>
            </div>
          </div>
        </div>
        <textarea
          rows={2}
          className="w-full border mt-5 border-gray-300 text-xs rounded-lg p-2 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
          placeholder="Add Notes (optional)..."
        ></textarea>
      </div>
    </>
  );
};

export default AddText;
