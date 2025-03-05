import React, { useEffect, useState } from "react";

const ItalicButton = ({
  italic,
  updateForm,
  selectedFields,
}: {
  italic: string;
  updateForm: any;
  selectedFields: any;
}) => {
  const [isItalic, setIsItalic] = useState(0);

  useEffect(() => {
    setIsItalic(selectedFields[italic]["TextItalic"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [italic, selectedFields[italic]["TextItalic"]]);

  const handleToggleItalic = () => {
    const newItalicState = isItalic === 1 ? 0 : 1;
    setIsItalic(newItalicState);
    updateForm(italic, "TextItalic", newItalicState);
  };

  return (
    <div className="mt-4">
      <button
        title="Italic"
        onClick={handleToggleItalic}
        className={`px-3 py-1 italic border rounded ${
          isItalic
            ? "text-white bg-black font-bold"
            : "text-gray-400 bg-white hover:bg-black hover:text-white"
        }`}
      >
        I
      </button>
    </div>
  );
};

export default ItalicButton;
