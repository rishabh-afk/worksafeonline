"use client";

import { useRef, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { bigShoulders } from "@/app/layout";
import { formatPound } from "@/components/logo/general";

interface FilterProps {
  filters: any;
  heading: string;
  setFilters: (filters: any) => void;
  options: Array<Record<string, any>>;
  handleProducts: (filters: any) => void;
}

const PriceFilter = ({
  heading,
  options,
  filters,
  setFilters,
  handleProducts,
}: FilterProps) => {
  const step = 0.1;
  const min = options[0]?.LowestPrice || 0;
  const max = options[0]?.HighestPrice || 100;

  const [value, setValue] = useState<number>(options[0]?.HighestPrice || 0);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const previousValue = useRef<number>(value);

  const handleChange = (newValue: string) => {
    const numericValue = parseFloat(newValue);
    const clampedValue = Math.min(Math.max(numericValue, min), max);
    previousValue.current = value;
    setValue(clampedValue);
    const valueToBeSent = `${formatPound(min)} to ${formatPound(clampedValue)}`;
    const updatedFilters = { ...filters, price: valueToBeSent };
    setFilters(updatedFilters);
  };

  const applyFilter = async () => {
    const valueToBeSent = `${formatPound(min)} to ${formatPound(value)}`;
    const updatedFilters = { ...filters, price: valueToBeSent };
    setFilters(updatedFilters);
    handleProducts(updatedFilters);
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer ${
          isOpen ? "pb-2 border-b" : "pb-4"
        }`}
      >
        <h2
          className={`text-lg font-black uppercase ${bigShoulders.className}`}
        >
          {heading}
        </h2>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaAngleUp size={18} />
        </div>
      </div>

      {/* Single Range Slider */}
      {isOpen && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-col space-y-2">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full appearance-none rounded-lg bg-gray-200 outline-none range-input"
            />
          </div>

          <div
            className={`flex justify-between items-center ${bigShoulders.className} font-extrabold pt-2`}
          >
            <span
              className={`${bigShoulders.className} font-black uppercase text-gray-500`}
            >
              Price:{" "}
              <span className="text-black">
                {formatPound(min)} - {formatPound(value)}
              </span>
            </span>
            <button
              type="button"
              onClick={applyFilter}
              className="bg-black text-white text-sm py-1 px-4 rounded hover:bg-primary transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
