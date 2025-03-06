import { Get } from "@/api/generalApi";
import Header from "./components/Header";
// import Blogs from "./components/Blogs";
import OurTeam from "./components/OurTeam";
import Marquee from "@/components/common/Marquee";
import Features from "@/components/common/Features";
// import BusinessStats from "./components/BusinessStats";
import TradeSafetyBanner from "./components/TradeSafetyBanner";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData: any = {};

  return {
    title: pageData?.title ?? "Worksafeonline | About Us",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/about-us`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

const AboutUS = async () => {
  const response = await Get("api/AboutUs1?app=Worksafe");
  return (
    <>
      <Header
        title="About Us"
        getBreadCrumbs={[{ id: "/about-us", name: "About Us" }]}
      />
      <TradeSafetyBanner response={response} />
      <Marquee />
      <OurTeam response={response} />
      {/* <BusinessStats /> */}
      {/* <Blogs /> */}
      <Features />
    </>
  );
};

export default AboutUS;

export const revalidate = 1800;
