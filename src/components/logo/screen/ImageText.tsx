import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";

interface Option {
  id: number;
  icon: string;
  title: string;
  terms: string;
  description: string;
  description2: string;
}

const ImageText = ({
  modalData,
  customizeData,
  setCustomizeData,
}: {
  modalData: any;
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.imageText?.id ?? null
  );

  const handleSelect = (option: any) => {
    setSelectedOption(option.id);
    let data;
    if (option.id === 1) {
      data = { textDesign: null };
    } else data = { logoDesign: null, designImage: null };
    setCustomizeData((prev: any) => ({ ...prev, imageText: option, ...data }));
  };

  // Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const optionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const options: Option[] = [
    {
      id: 1,
      icon: modalData.RightTopImg,
      title: modalData.RightTopText1,
      terms: modalData.RightTopTerms,
      description: modalData.RightTopText2,
      description2: modalData.RightTopText3,
    },
    {
      id: 2,
      icon: modalData.RightBottomImg,
      title: modalData.RightBottomText1,
      terms: modalData.RightBottomTerms,
      description: modalData.RightBottomText2,
      description2: modalData.RightBottomText3,
    },
  ];

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center mt-2 lg:mt-6 justify-between gap-5 lg:gap-10 w-full pb-3 lg:px-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="h-full w-full lg:w-[45%]">
        <Image
          priority
          unoptimized
          width={100}
          alt="Image"
          height={100}
          src={modalData?.LeftImg ?? null}
          className="w-full object-contain rounded-2xl mx-auto"
        />
      </div>
      <div className="grid w-full lg:w-[55%] grid-cols-1 gap-5">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className={`p-4 rounded-xl border-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-green-500"
                : "border-gray-100"
            } transition-all duration-200 active:scale-[0.95] ease-linear bg-white`}
            onClick={() => handleSelect(option)}
            variants={optionVariants}
          >
            <div
              className={`flex flex-col items-center space-y-2 ${bigShoulders.className}`}
            >
              <div>
                <Image
                  width={56}
                  height={56}
                  priority
                  unoptimized
                  alt={option.title}
                  src={option.icon ?? null}
                  className="object-contain w-fit"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-center">
                {option.title}
              </h3>
              <div
                className="text-lg font-semibold text-center"
                dangerouslySetInnerHTML={{
                  __html: option.description,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageText;
