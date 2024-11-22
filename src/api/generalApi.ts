import axios from "axios";

const BASE_URL = "https://johntrn.worksafeonline.co.uk/";

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
    Get("api/ProductsByPage?category_id=1&page=1&pagesize=10"), // Fetch products
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
    productsResponse,
    homeListing1,
    homeListing2,
    homeListing3,
    bannerResponse,
  ] = results.map((result) =>
    result.status === "fulfilled" ? result.value : {}
  );
  const products =
    productsResponse.product?.filter(
      (product: { Status: number }) => product?.Status === 1
    ) || [];
  const brands = brandsResponse.brand || [];
  const banners = bannerResponse.special_offers || [];
  const categories = categoriesResponse.categories || [];
  return {
    products,
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
