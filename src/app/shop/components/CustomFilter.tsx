import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

interface PageProps {
  filters: any;
  setFilters: any;
  pageCount: number;
  handleProducts: any;
  currentPage: number;
}

const CustomFilter = ({
  filters,
  pageCount,
  setFilters,
  currentPage,
  handleProducts,
}: PageProps) => {
  const [limit, setLimit] = useState<number>(12);
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, pageCount * limit);
  const [sortingType, setSortingType] = useState<string>("new_arrival");

  const handleFilter = async (filterKey: string) => {
    if (!limit) return;
    const updatedFilters = {
      limit,
      ...filters,
      new_arrival: filterKey === "new_arrival",
      price_low_high: filterKey === "price_low_high",
      price_high_low: filterKey === "price_high_low",
    };
    setFilters(updatedFilters);
    await handleProducts(updatedFilters);
    setSortingType(filterKey);
  };

  const handlePageFilter = async (data: any) => {
    if (limit === data?.limit) return;
    if (sortingType) {
      const update = { ...filters, ...data, [sortingType]: true };
      setFilters(update);
      await handleProducts(update);
    }
    setLimit(data?.limit);
  };

  return (
    <div className="pb-5 flex flex-col lg:flex-row justify-between items-center gap-5">
      <p className="flex items-center text-xl font-semibold gap-2">
        <span>
          <BsFilterLeft size={25} />
        </span>
        Showing {startItem} - {endItem} of {pageCount * limit} results
      </p>
      <div className="flex gap-4">
        <div className="rounded-full px-2 md:px-6 text-sm md:text-lg text-gray-500 relative py-2 md:py-3 group flex gap-2 items-center cursor-pointer border border-gray-200">
          Sort By <span className="text-black">{sortingType}</span>
          <IoMdArrowDropdown className="text-black" />
          <div className="w-fit p-4 text-base whitespace-nowrap top-[52px] border bg-white gap-1 shadow-lg py-3 rounded-lg hidden group-hover:flex text-black flex-col left-0 z-20 absolute opacity-0 h-0 group-hover:h-fit transition-all duration-300 ease-in-out group-hover:opacity-100">
            <span
              onClick={() => handleFilter("new_arrival")}
              className={`hover:text-gray-500 ${
                sortingType === "new_arrival" && "font-semibold"
              }`}
            >
              Sort By : Latest
            </span>
            <span
              onClick={() => handleFilter("price_low_high")}
              className={`hover:text-gray-500 ${
                sortingType === "price_low_high" && "font-semibold"
              }`}
            >
              Sort By Price: Low to High
            </span>
            <span
              onClick={() => handleFilter("price_high_low")}
              className={`hover:text-gray-500 ${
                sortingType === "price_high_low" && "font-semibold"
              }`}
            >
              Sort By Price: High to Low
            </span>
          </div>
        </div>
        <div className="rounded-full px-2 md:px-6 text-sm md:text-lg py-2 md:py-3 flex gap-2 relative items-center group cursor-pointer border border-gray-200 text-gray-500">
          Show <span className="text-black">{limit}</span>
          <IoMdArrowDropdown className="text-black" />
          <div className="w-fit p-4 pr-20 text-base whitespace-nowrap top-[52px] border bg-white gap-1 shadow-lg py-3 rounded-lg hidden group-hover:flex text-black flex-col left-0 z-20 absolute opacity-0 h-0 group-hover:h-fit transition-all duration-300 ease-in-out group-hover:opacity-100">
            <span
              onClick={() => handlePageFilter({ limit: 12 })}
              className={`hover:text-gray-500 ${
                limit === 12 && "text-black font-extrabold"
              }`}
            >
              12
            </span>
            <span
              onClick={() => handlePageFilter({ limit: 24 })}
              className={`hover:text-gray-500 ${
                limit === 20 && "text-black font-extrabold"
              }`}
            >
              24
            </span>
            <span
              onClick={() => handlePageFilter({ limit: 36 })}
              className={`hover:text-gray-500 ${
                limit === 32 && "text-black font-extrabold"
              }`}
            >
              36
            </span>
            <span
              onClick={() => handlePageFilter({ limit: 48 })}
              className={`hover:text-gray-500 ${
                limit === 40 && "text-black font-extrabold"
              }`}
            >
              48
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFilter;
