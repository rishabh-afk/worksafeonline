import { motion } from "framer-motion";
import { debounce } from "@/api/generalApi";
import { bigShoulders } from "@/app/layout";
import React, { useEffect, useState } from "react";
import { containerVariants, itemVariants } from "@/animation/framer";

const SizeQuantities = ({
  sizes,
  fieldsCheck,
  selectedFields,
  setSelectedFields,
}: {
  sizes: any[];
  fieldsCheck: any;
  selectedFields: any;
  setSelectedFields: any;
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (
      selectedFields &&
      selectedFields?.size &&
      selectedFields?.size.length > 0
    ) {
      const reducedSize: { [key: string]: number } =
        selectedFields?.size?.reduce((acc: any, size: any) => {
          const { Size, quantity } = size;
          acc[Size] = quantity;
          return acc;
        }, {} as { [key: string]: number });
      setQuantities(reducedSize ?? {});
    }
    // eslint-disable-next-line
  }, [selectedFields]);

  const handleIncrement = (size: any, isBlur?: boolean) => {
    if (fieldsCheck()) return;

    setQuantities((prev) => {
      const currentQuantity = prev[size.Size] || 0;
      if (currentQuantity < size.qty) {
        const newQuantity = currentQuantity + (isBlur ? 0 : 1);
        return { ...prev, [size.Size]: newQuantity };
      }
      return prev;
    });

    setSelectedFields((prevFields: any) => {
      const updatedFields = { ...prevFields };
      if (!updatedFields.size) updatedFields.size = [];
      const existingSizeIndex = updatedFields.size.findIndex(
        (item: any) => item.Size === size.Size
      );
      const updatedSize = {
        ...size,
        quantity: (quantities[size.Size] || 0) + (isBlur ? 0 : 1),
      };

      if (existingSizeIndex === -1) updatedFields.size.push(updatedSize);
      else updatedFields.size[existingSizeIndex] = updatedSize;

      return updatedFields;
    });
  };

  const handleDecrement = (size: any, isBlur?: boolean) => {
    if (fieldsCheck()) return;

    setQuantities((prev) => {
      const newQuantity = Math.max(
        (prev[size.Size] || 0) - (isBlur ? 0 : 1),
        0
      );
      return { ...prev, [size.Size]: newQuantity };
    });

    setSelectedFields((prevFields: any) => {
      const updatedFields = { ...prevFields };
      if (!updatedFields.size) updatedFields.size = [];

      const existingSizeIndex = updatedFields.size.findIndex(
        (item: any) => item.Size === size.Size
      );

      if (existingSizeIndex !== -1) {
        if ((quantities[size.Size] || 0) - (isBlur ? 0 : 1) <= 0) {
          updatedFields.size = updatedFields.size.filter(
            (item: any) => item.Size !== size.Size
          );
        } else {
          updatedFields.size[existingSizeIndex] = {
            ...updatedFields.size[existingSizeIndex],
            quantity: (quantities[size.Size] || 0) - (isBlur ? 0 : 1),
          };
        }
      }
      return updatedFields;
    });
  };

  return (
    <div className="pb-2">
      <p className="mt-4 mb-2 font-semibold">Sizes</p>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-3 lg:gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {sizes.map((size) => {
          const isActive = (quantities[size.Size] || 0) > 0;
          return (
            <motion.div
              key={size.Size}
              className={`spt-1 p-[2px] text-center cursor-pointer ${isActive ? "bg-primary/80" : "bg-gray-200/80"
                }`}
              variants={itemVariants}
            >
              <div
                className={`font-black ${isActive ? "text-white" : "text-gray-600"
                  } ${bigShoulders.className}`}
              >
                {size.Size}
              </div>
              <div className={`px-1 pt-px pb-1 mt-1 bg-white`}>
                <div className="flex items-center justify-between mt-2">
                  <button
                    className={`min-w-5 min-h-5 flex justify-center items-center active:scale-[0.9] transition ${isActive
                        ? "bg-primary/80 text-white hover:bg-primary"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                      }`}
                    onClick={debounce(() => handleDecrement(size), 150)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    disabled={!selectedFields?.color?.Colour_Sequence_No}
                    value={quantities[size.Size] || 0}
                    onChange={(e) => {
                      const newValue = Math.max(
                        0,
                        Math.min(9999, Number(e.target.value))
                        // Math.min(size.qty, Number(e.target.value))
                      );
                      setQuantities({ ...quantities, [size.Size]: newValue });
                    }}
                    onBlur={() => handleIncrement(size, true)}
                    className="text-xs py-1 w-full text-center focus:outline-none focus:ring-0"
                  />
                  <button
                    className={`min-w-5 min-h-5 flex disabled:cursor-not-allowed justify-center items-center active:scale-[0.9] transition ${isActive
                        ? "bg-primary/80 text-white hover:bg-primary"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                      }`}
                    // disabled={quantities[size.Size] === size.qty}
                    onClick={debounce(() => handleIncrement(size), 150)}
                  >
                    +
                  </button>
                </div>
                <div className="text-xs mt-2 font-semibold pb-px">In Stock</div>
                <div className="text-[10px] text-gray-600">
                  {size.qty} Available
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SizeQuantities;
