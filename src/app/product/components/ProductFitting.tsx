const ProductFitting = ({
  productFittings,
  selectedFields,
  setSelectedFields,
}: {
  selectedFields: any;
  productFittings: any;
  setSelectedFields: any;
}) => {
  return (
    <div className="mt-4">
      <p className="font-semibold">Available Fittings</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {productFittings.map((fitting: any) => {
          const isSelected =
            selectedFields?.fitting?.Fitting_Sequence_No ===
            fitting.Fitting_Sequence_No;

          return (
            <div
              key={fitting.Fitting_Sequence_No}
              onClick={() =>
                setSelectedFields({ ...selectedFields, fitting: fitting })
              }
              className={`flex flex-col items-center justify-center px-4 py-1 rounded-lg border shadow-sm cursor-pointer transition duration-300 ${
                isSelected
                  ? "border-black bg-gray-100 shadow-md"
                  : "hover:shadow-md"
              }`}
            >
              <p className="font-semibold flex text-lg items-center gap-2">
                {fitting.Fitting_Description.trim()}
                {fitting.Perc_Uplift > 0 && (
                  <span className="text-sm text-green-500">
                    +{fitting.Perc_Uplift}%
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-500">
                Code: {fitting.Fitting.trim()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFitting;
