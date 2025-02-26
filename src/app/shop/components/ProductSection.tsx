"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";

const ProductSection = ({
  products,
  category,
  isLoading,
}: {
  products: any[];
  isLoading: boolean;
  category: string | number;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skeletonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      key={category}
      className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center h-fit p-4 bg-gray-200 rounded-lg shadow-md space-y-3 animate-pulse"
            variants={skeletonVariants}
          >
            <div className="w-full h-40 md:h-56 bg-gray-300 rounded-md"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="flex gap-5 w-full ">
              <div className="w-1/2 text-left mr-auto h-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 text-right ml-auto h-4 bg-gray-300 rounded"></div>
            </div>
          </motion.div>
        ))
      ) : products && products.length > 0 ? (
        products.map((product: any) => (
          <motion.div
            key={product?.ID}
            className="flex items-center justify-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))
      ) : (
        <div>No Product Available</div>
      )}
    </motion.div>
  );
};

export default ProductSection;
