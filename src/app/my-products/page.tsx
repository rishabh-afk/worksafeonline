import React from "react";
import ClientPage from "./ClientPage";
import { Get } from "@/api/generalApi";
import Header from "../shop/components/Header";

export async function generateMetadata() {
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | My Products",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/my-products`, // Ensure URL is correct
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
  return (
    <>
      <Header
        title="My Products"
        getBreadCrumbs={[{ id: "/my-products", name: "My Products" }]}
      />
      <ClientPage />
    </>
  );
}
