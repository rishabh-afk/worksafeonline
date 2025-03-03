// import { Get } from "@/api/generalApi";
import ClientPage from "./ClientPage";

export async function generateMetadata() {
  const pageData: any = {};

  return {
    title: pageData?.title ?? "Worksafeonline | Cart",
    keywords: pageData?.keyword ?? "default, keywords",
    description: pageData?.descriptions ?? "Default description",
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/cart`,
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico",
      apple: "/logo.ico",
      shortcut: "/logo.ico",
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
