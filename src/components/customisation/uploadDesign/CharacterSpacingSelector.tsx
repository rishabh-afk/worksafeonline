import React, { useEffect, useState } from "react";

const CharacterSpacingSelector = ({
  space,
  updateForm,
  selectedFields,
}: {
  space: string;
  updateForm: any;
  selectedFields: any;
}) => {
  const spacingOptions = [
    "tracking-tighter",
    "tracking-tight",
    "tracking-normal",
    "tracking-wide",
    "tracking-wider",
    "tracking-widest",
  ];

  const [characterSpacingIndex, setCharacterSpacingIndex] = useState(2); // Default to "Normal"

  useEffect(() => {
    setCharacterSpacingIndex(
      spacingOptions.indexOf(selectedFields[space]["TextSpacing"])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [space, selectedFields[space]["TextSpacing"]]);

  const handleSliderChange = (index: number) => {
    setCharacterSpacingIndex(index);
    updateForm(space, "TextSpacing", spacingOptions[index]);
  };

  return (
    <>
      <p className="text-xs font-semibold text-left">Spacing</p>
      <input
        min="0"
        type="range"
        max={spacingOptions.length - 1}
        value={characterSpacingIndex}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
        className="w-full appearance-none rounded-lg bg-gray-200 outline-none range-input"
      />
    </>
  );
};

export default CharacterSpacingSelector;
