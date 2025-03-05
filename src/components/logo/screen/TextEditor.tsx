import { useState } from "react";
import AddText from "./components/AddText";
import TextGalleryFilters from "../../customisation/screens/TextGalleryFilters";

const TextEditor = ({
  localData,
  customizeData,
  setCustomizeData,
  getFilteredResults,
}: {
  localData: any;
  customizeData: any;
  setCustomizeData: any;
  getFilteredResults: any;
}) => {
  const [selectedFields, setSelectedFilters] = useState({
    textLine1: {
      TextLine: "",
      TextSize: "text-[12px]",
      TextItalic: 0,
      FontFamily: "",
      TextAlign: "text-left",
      TextColour: "",
      FontSize: "font-normal",
      UploadImage: "",
      TextSpacing: "tracking-normal",
    },
    textLine2: {
      TextLine: "",
      TextSize: "text-[12px]",
      TextItalic: 0,
      FontFamily: "",
      TextAlign: "text-left",
      TextColour: "",
      FontSize: "font-normal",
      UploadImage: "",
      TextSpacing: "tracking-normal",
    },
    textLine3: {
      TextLine: "",
      TextSize: "text-[12px]",
      TextItalic: 0,
      FontFamily: "",
      TextAlign: "text-left",
      TextColour: "",
      FontSize: "font-normal",
      UploadImage: "",
      TextSpacing: "tracking-normal",
    },
  });

  const updateForm = (line: string, field: string, value: string | number) => {
    setSelectedFilters((prevForm: any) => ({
      ...prevForm,
      [line]: {
        ...prevForm[line],
        [field]: value,
      },
    }));
  };

  return (
    <>
      <TextGalleryFilters
        productID={customizeData.ProductID}
        getFilteredResults={getFilteredResults}
      />
      <div className="flex flex-col lg:flex-row justify-center items-start w-full mx-auto mb-5 gap-5 lg:gap-10">
        <AddText
          localData={localData}
          updateForm={updateForm}
          customizeData={customizeData}
          selectedFields={selectedFields}
          setCustomizeData={setCustomizeData}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </>
  );
};

export default TextEditor;
