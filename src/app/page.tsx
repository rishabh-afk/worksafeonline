import React from "react";
import Deals from "@/components/home/Deals";
import Banner from "@/components/home/Banner";
import Upcoming from "@/components/home/Upcoming";
import WhoWeAre from "@/components/home/WhoWeAre";
import { fetchHomePageData } from "@/api/generalApi";
import Categories from "@/components/home/Categories";
import ReasonsToShop from "@/components/home/ReasonToShop";
import ListingByCategory from "@/components/home/ListingByCategory";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData: any = {};

  return {
    title: pageData?.title ?? "Worksafeonline | Home",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

export default async function Home() {
  const {
    brands,
    categories,
    homeListing1,
    homeListing2,
    homeListing3,
    banners,
    offerBanner,
  } = await fetchHomePageData();
  return (
    <div>
      <Banner banners={banners} />
      <Upcoming slidesPerViewDesktop={4} />
      {homeListing1?.product && homeListing1?.product.length > 0 && (
        <ListingByCategory
          categoryID={homeListing1.categoryID}
          sectionText={homeListing1.offerName}
          bannerTitle={homeListing1?.banner_title}
          bannerImage={homeListing1?.banner_image}
          products={homeListing1?.product.slice(0, 4)}
          bannerDesc={homeListing1?.banner_description}
        />
      )}
      {homeListing2?.product && homeListing2?.product.length > 0 && (
        <ListingByCategory
          categoryID={homeListing2.categoryID}
          sectionText={homeListing2.offerName}
          bannerTitle={homeListing2?.banner_title}
          bannerImage={homeListing2?.banner_image}
          products={homeListing2?.product.slice(0, 4)}
          bannerDesc={homeListing2?.banner_description}
        />
      )}
      {homeListing3?.product && homeListing3?.product.length > 0 && (
        <ListingByCategory
          categoryID={homeListing3.categoryID}
          sectionText={homeListing3.offerName}
          bannerTitle={homeListing3?.banner_title}
          bannerImage={homeListing3?.banner_image}
          products={homeListing3?.product.slice(0, 4)}
          bannerDesc={homeListing3?.banner_description}
        />
      )}
      <Deals offerBanner={offerBanner} />
      <ReasonsToShop />
      <Categories categories={categories} />
      <WhoWeAre brands={brands} />
    </div>
  );
}

export const revalidate = 3600;
