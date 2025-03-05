import React, { useEffect, useState } from "react";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

const TextAlignButtons = ({
  align,
  updateForm,
  selectedFields,
}: {
  align: string;
  updateForm: any;
  selectedFields: any;
}) => {
  const [selectedAlignment, setSelectedAlignment] = useState("text-center");

  useEffect(() => {
    setSelectedAlignment(selectedFields[align]["TextAlign"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [align, selectedFields[align]["TextAlign"]]);

  const handleAlignmentChange = (alignment: string) => {
    setSelectedAlignment(alignment);
    updateForm(align, "TextAlign", alignment);
  };

  return (
    <div className="flex space-x-2 mt-4">
      <button
        onClick={() => handleAlignmentChange("text-left")}
        className={`p-2 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-left"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => handleAlignmentChange("text-center")}
        className={`p-2 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-center"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => handleAlignmentChange("text-right")}
        className={`p-2 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-right"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white border hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignRight />
      </button>
    </div>
  );
};

export default TextAlignButtons;
