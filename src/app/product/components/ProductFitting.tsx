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
              onClick={() => setSelectedFields({ ...selectedFields, fitting: fitting })}
              className={`relative group flex flex-col items-center justify-center rounded-full min-w-8 min-h-8 shadow-sm cursor-pointer transition duration-300 hover:bg-gray-200`}
            >
              {/* Default View: Show First Letter in Circle */}
              <div className={`flex items-center justify-center min-w-8 min-h-8 rounded-full border border-black text-xl font-bold ${isSelected
                ? "bg-black text-white"
                : "bg-white text-black"
                }`}>
                {fitting.Fitting_Description.trim().charAt(0).toUpperCase()}
              </div>

              {/* Hover Effect: Show Full Details Absolutely */}
              <div className="absolute top-9 left-0 w-fit px-3 pb-1 group-hover:opacity-100 rounded-lg border border-gray-200 bg-white text-black opacity-0 transition-all duration-300 z-10">
                <p className="font-semibold text-lg flex items-center gap-2">
                  {fitting.Fitting_Description.trim()}
                  {fitting.Perc_Uplift > 0 && (
                    <span className="text-sm text-green-500">
                      +{fitting.Perc_Uplift}%
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500">Code: {fitting.Fitting.trim()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFitting;
