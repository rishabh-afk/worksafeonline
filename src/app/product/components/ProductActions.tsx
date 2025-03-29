import React from "react";
import Link from "next/link";
// import { BsHeart } from "react-icons/bs";
// import { TiMessages } from "react-icons/ti";
import { TfiRulerAlt2 } from "react-icons/tfi";
// import { GiWaterRecycling } from "react-icons/gi";

const ProductActions = ({ ProSpecsheet }: { ProSpecsheet: string }) => (
  <div className="uppercase mt-4 text-xs text-gray-700 grid grid-cols-3 gap-5 md:justify-between items-center md:gap-2">
    {/* <div className="flex items-center gap-2">
      <TiMessages size={20} />
      <span className="underline">Ask a question</span>
    </div> */}
    {ProSpecsheet ? (
      <div className="flex items-center mb-10 gap-2">
        <TfiRulerAlt2 size={20} />
        <Link
          href={ProSpecsheet}
          target="_blank"
          className="underline text-primary hover:text-black transition"
        >
          View Specifications
        </Link>
      </div>
    ) : (
      <div className="text-gray-500 text-sm flex items-center mb-6 gap-2">
        <TfiRulerAlt2 size={20} />
        <span className="font-bold">No Specifications Available</span>
      </div>
    )}
    {/* <div className="flex items-center gap-2">
      <BsHeart size={20} />
      <span className="underline">add to wishlist</span>
    </div> */}
    {/* <div className="flex items-center gap-2">
      <GiWaterRecycling size={20} />
      <span className="underline">compare</span>
    </div> */}
  </div>
);

export default ProductActions;
