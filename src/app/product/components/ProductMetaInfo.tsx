const ProductMetaInfo = ({
  productSKU,
  productCategory,
}: {
  productSKU: string;
  productCategory: string;
}) => (
  <div className="mt-4 flex flex-col uppercase gap-2 text-sm">
    <div className="flex items-center gap-3">
      <span className="text-gray-400">
        SKU: <span className="text-black">{productSKU}</span>
      </span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-gray-400">
        Category: <span className="text-black">{productCategory}</span>
      </span>
    </div>
  </div>
);

export default ProductMetaInfo;
