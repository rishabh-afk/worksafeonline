import React from "react";
import { Get } from "@/api/generalApi";
import Header from "../shop/components/Header";
import FilterSection from "../shop/components/FilterSection";

export async function generateMetadata() {
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | Shop All",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/shop`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

export default async function Page() {
  const [categoryResponse, productResponse] = await Promise.allSettled([
    Get("api/GetFullMenu?App=Worksafe"),
    Get("api/ProductsByPageN?category_id=0&page=1&pagesize=12"),
  ]);

  let products = [];
  let categories = {};

  if (categoryResponse.status === "fulfilled")
    categories = {
      subcategories: categoryResponse?.value?.categories.map((item: any) => ({
        ...item,
        Cnt: item?.subcategories?.length,
      })),
    };
  if (productResponse.status === "fulfilled") products = productResponse?.value;

  return (
    <>
      <Header
        title="Shop"
        getBreadCrumbs={[{ id: "/shop-all", name: "Shop" }]}
      />
      <FilterSection
        category={0}
        subcategory={0}
        response={products}
        categoryResponse={categories}
      />
    </>
  );
}
