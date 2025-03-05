"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { includes } from "@/utils/polyfills";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FilterProps {
  filters: any;
  brand?: string;
  setFilters: any;
  heading: string;
  labelKey: string;
  countKey: string;
  category: number;
  handleProducts: any;
  subcategory: number;
  options: Array<Record<string, any>>;
}

const Filter = ({
  heading,
  options,
  labelKey,
  countKey,
  filters,
  setFilters,
  subcategory,
  handleProducts,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    labelKey === "menu_name" ? true : false
  );
  const [subcategoryInput, setSubcategory] = useState<string | null>(
    subcategory ? subcategory.toString() : null
  );
  const handleUrl = async (data: any) => {
    try {
      const updatedValues =
        filters[labelKey] && includes(filters[labelKey], data[labelKey])
          ? filters[labelKey].filter((value: any) => value !== data[labelKey]) // Remove if exists
          : [...(filters[labelKey] || []), data[labelKey]]; // Add if not exists

      const updated = { ...filters, [labelKey]: updatedValues };
      setFilters(updated);

      const element = document.getElementById("filterSection");
      if (element) {
        const offset = -100;
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop + offset;

        if ("scrollBehavior" in document.documentElement.style)
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        else window.scrollTo(0, targetPosition);
      }
      await handleProducts(updated);
    } catch (error) {
      console.log("Error updating filters or handling products:", error);
      toast.error(
        "Something went wrong while updating filters. Please try again."
      );
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer ${
          isOpen && "pb-2 border-b"
        }`}
      >
        <h2
          className={`text-lg font-black uppercase ${bigShoulders.className}`}
        >
          {heading}
        </h2>
        <div className="transition-transform duration-300">
          {isOpen ? (
            <FaMinus size={14} className="animate-scaleIn" />
          ) : (
            <FaPlus size={14} className="animate-scaleIn" />
          )}
        </div>
      </div>

      {/* Filter Options with scrollable animation and blurred edges */}
      <div
        className={`overflow-y-auto hide-scrollbar transition-["height"] duration-100 ease-in-out space-y-3  ${
          isOpen ? "md:max-h-96 lg:max-h-[33vh] mt-4" : "max-h-0"
        }`}
      >
        {options.map((option: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => handleUrl(option)}
              className="flex justify-between cursor-pointer items-center text-gray-800"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={Boolean(
                    (filters?.[labelKey]?.length > 0 &&
                      option?.[labelKey] &&
                      includes(filters[labelKey], option[labelKey])) ||
                      (option?.menu_id &&
                        subcategoryInput === option?.menu_id.toString())
                  )}
                  onChange={(e) => {
                    setSubcategory(e.target.checked ? option?.menu_id : null);
                  }}
                  className="w-4 h-4 border-gray-300 rounded !text-primary focus:ring-primary"
                />
                <span
                  className={`text-sm cursor-pointer ${
                    ((option?.[labelKey] &&
                      filters?.[labelKey]?.length > 0 &&
                      filters[labelKey].includes(option[labelKey])) ||
                      (option?.menu_id &&
                        subcategoryInput === option?.menu_id.toString())) &&
                    "text-primary"
                  }`}
                >
                  {option[labelKey]}
                </span>
              </span>
              <span className="text-sm text-gray-500">
                ({option[countKey] ?? 1})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
