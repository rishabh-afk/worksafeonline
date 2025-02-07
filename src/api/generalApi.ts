import { Cart } from "@/types/api";
import { includes } from "@/utils/polyfills";
import axios from "axios";

export const BASE_URL = "https://johntrn.worksafeonline.co.uk/";

export const Get = async (url: string) => {
  try {
    const response = await axios.get(BASE_URL + url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      console.error("Axios Error:", error.response?.data || error.message);
    else console.error("Unexpected Error:", (error as Error).message || error);
    return null;
  }
};
export const fetchHomePageData = async () => {
  const apiCalls = [
    Get("api/Brands"), // Fetch brands
    Get("api/Categories"), // Fetch categories
    Get("api/HomeProductListing1?App=Worksafe"), // Fetch home listing 1
    Get("api/HomeProductListing2?App=Worksafe"), // Fetch home listing 2
    Get("api/HomeProductListing3?App=Worksafe"), // Fetch home listing 3
    Get("api/BannerOffersWeb?App=Worksafe"), // Fetch Home Page Banner
  ];

  // Use Promise.allSettled to handle individual promise results
  const results = await Promise.allSettled(apiCalls);
  const [
    brandsResponse,
    categoriesResponse,
    homeListing1,
    homeListing2,
    homeListing3,
    bannerResponse,
  ] = results.map((result) =>
    result?.status === "fulfilled" ? result?.value : {}
  );
  const brands = brandsResponse?.brand || [];
  const banners = bannerResponse?.special_offers || [];
  const categories = categoriesResponse?.categories || [];
  return {
    categories,
    brands,
    homeListing1,
    homeListing2,
    homeListing3,
    banners,
  };
};

export const buildQueryUrl = (baseUrl: string, queryData: any) => {
  const queryParams = new URLSearchParams();
  Object.entries(queryData).forEach(([key, value]: any) => {
    if (value) queryParams.append(key, value);
  });
  return `${baseUrl}?${queryParams.toString()}`;
};

export const getPaginateData = (filter: any) => {
  const {
    page = 1,
    Size = [],
    Brand = [],
    limit = 12,
    price = "",
    Colour = [],
    Fitting = [],
    category_id = [],
    new_arrival = true,
    price_low_high = false,
    price_high_low = false,
  } = filter;

  const createCommaSeparatedString = (array: any[]) =>
    Array.isArray(array) ? array.join(", ") : "";

  return {
    page,
    pagesize: limit,
    price: price.toString(),
    new_arrival: new_arrival.toString(),
    sizes: createCommaSeparatedString(Size),
    price_low_high: price_low_high.toString(),
    price_high_low: price_high_low.toString(),
    brands: createCommaSeparatedString(Brand),
    colours: createCommaSeparatedString(Colour),
    fittings: createCommaSeparatedString(Fitting),
    category_id: createCommaSeparatedString(category_id),
  };
};

export const getCategoryId = (data: any, names: string[]): number[] => {
  return data
    .filter((item: any) => includes(names, item?.menu_name))
    .map((item: any) => item?.menu_id);
};

export const filterData = (product: any) => {
  const productData: Cart = {
    createdAt: new Date(),
    Size: product?.Size ?? "",
    Color: product?.Color ?? "",
    EndPrice: product?.EndPrice,
    ID: product.Style ?? product?.ID,
    Fitting: product?.Fitting ?? "",
    Quantity: product?.quantity ?? 1,
    Description: product?.Description,
    ListingImage: product?.ListingImage,
    DiscountedPrice: product?.DiscountedPrice ?? 0,
    CustomisationDetails: product?.CustomisationDetails ?? {},
    FinalPrice: (product?.quantity ?? 1 * product?.EndPrice).toFixed(2),
    CategoryData: product?.MenuId ? { categoryId: product?.MenuId } : {},
  };
  return productData;
};

export const checkFormFields = (
  formRef: React.RefObject<HTMLFormElement>,
  fields: string[]
) => {
  if (!formRef.current)
    return { isValid: false, values: {}, missingFields: [] };

  const formData = new FormData(formRef.current);

  const values: Record<string, string> = {};
  formData.forEach((value, key) => {
    values[key] = value.toString().trim();
  });

  const missingFields = fields.filter((field) => !values[field]);
  return missingFields.length === 0;
};

export const getSelectFormattedData = (data: any) => {
  const response = data.map((option: any) => ({
    label: option?.Country,
    value: option?.Name,
  }));
  return response;
};

export const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const formatKey = (key: string): string => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase words
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};
