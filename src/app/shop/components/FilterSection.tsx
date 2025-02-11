"use client";

import Filter from "./Filter";
import { Post } from "@/utils/axios";
import PriceFilter from "./PriceFilter";
import CustomFilter from "./CustomFilter";
import { useEffect, useState } from "react";
import ProductSection from "./ProductSection";
import Pagination from "@/components/common/Pagination";
import { BASE_URL, getCategoryId, getPaginateData } from "@/api/generalApi";
import { usePathname } from "next/navigation";

interface Filter {
  response: any;
  category: number;
  subcategory: number;
  categoryResponse: any;
}

const FilterSection = ({
  category,
  response,
  subcategory,
  categoryResponse,
}: Filter) => {
  const pathname = usePathname();
  const [state, setState] = useState({
    sizes: [],
    brands: [],
    prices: [],
    colors: [],
    products: [],
    fittings: [],
    pageCount: 1,
    categories: [],
    currentPage: 12,
  });
  const [filters, setFilters] = useState<any>(
    subcategory ? { category_id: [subcategory] } : {}
  );
  const [loader, setLoader] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState(state.products);

  const handleProducts = async (filters: any) => {
    try {
      const allFiltersEmpty = Object.keys(filters).every(
        (key) => Array.isArray(filters[key]) && filters[key].length === 0
      );
      if (allFiltersEmpty) return false;

      setLoader(true);
      const updatedData = getPaginateData({
        ...filters,
        category_id:
          state?.categories &&
          state?.categories.length > 0 &&
          filters["menu_name"]
            ? getCategoryId(state.categories, filters["menu_name"])
            : [category],
      });

      const url =
        BASE_URL + pathname === "/my-products"
          ? "api/FilterSortMyUniformProductsWCategories"
          : "api/FilterSortProductsByPageN";

      const response: any = await Post(url, updatedData, 10000, true);

      if (response?.status) {
        setFilteredProducts(response?.product ?? []);
        setState((prev: any) => ({
          ...prev,
          products: response?.product ?? [],
          pageCount: response?.PageCount ?? 0,
          currentPage: response?.CurrentPage ?? 0,
        }));
      } else throw new Error(response?.message || "Failed to fetch products.");
    } catch (error: any) {
      console.log("Error fetching filtered products:", error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    if (response?.product && response?.product.length > 0) {
      setFilteredProducts(response?.product);
      setState({
        sizes: response?.Sizes ?? [],
        brands: response?.Brands ?? [],
        prices: response?.Prices ?? [],
        colors: response?.Colours ?? [],
        products: response?.product ?? [],
        fittings: response?.Fittings ?? [],
        pageCount: response?.PageCount ?? 1,
        currentPage: response?.CurrentPage ?? 1,
        categories: categoryResponse?.SubCategories ?? [],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, response, subcategory]);

  return (
    <div
      id="filterSection"
      className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 max-w-9xl mx-auto p-4 lg:p-10"
    >
      <div className="col-span-1 hidden md:block space-y-6">
        {state.categories && state.categories.length > 0 && (
          <Filter
            countKey="Cnt"
            filters={filters}
            category={category}
            labelKey="menu_name"
            setFilters={setFilters}
            subcategory={subcategory}
            options={state.categories}
            heading="Product categories"
            handleProducts={handleProducts}
          />
        )}
        {state.prices && state.prices.length > 0 && (
          <PriceFilter
            filters={filters}
            setFilters={setFilters}
            options={state.prices}
            heading="Filter By Price"
            handleProducts={handleProducts}
          />
        )}
        {state.colors && state.colors.length > 0 && (
          <Filter
            heading="Color"
            countKey="Cnt"
            filters={filters}
            labelKey="Colour"
            category={category}
            options={state.colors}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {state.fittings && state.fittings.length > 0 && (
          <Filter
            countKey="Cnt"
            heading="Fittings"
            filters={filters}
            category={category}
            labelKey="Fitting"
            setFilters={setFilters}
            options={state.fittings}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {state.sizes && state.sizes.length > 0 && (
          <Filter
            heading="Sizes"
            labelKey="Size"
            countKey="Cnt"
            filters={filters}
            category={category}
            options={state.sizes}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {state.brands && state.brands.length > 0 && (
          <Filter
            heading="brands"
            countKey="Cnt"
            labelKey="Brand"
            filters={filters}
            category={category}
            options={state.brands}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
      </div>
      <div className="col-span-2 lg:col-span-3">
        {(state.pageCount !== 0 || state.currentPage !== 0) && (
          <CustomFilter
            filters={filters}
            setFilters={setFilters}
            pageCount={state.pageCount}
            currentPage={state.currentPage}
            handleProducts={handleProducts}
          />
        )}
        <ProductSection
          isLoading={loader}
          category={category}
          products={filteredProducts}
        />
        {(state.pageCount !== 0 || state.currentPage !== 0) && (
          <Pagination
            filters={filters}
            totalPages={state.pageCount}
            onPageChange={handleProducts}
            currentPage={state.currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default FilterSection;
