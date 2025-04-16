import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const CircularArrowLoader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <div className="animate-[spin_1.5s_linear_infinite] text-primary">
        <FaArrowsRotate className="w-20 h-20" />
      </div>
      <p className="text-lg font-semibold text-primary">Please wait...</p>
    </div>
  );
};

export default CircularArrowLoader;
