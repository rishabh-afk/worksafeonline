// import { Get } from "@/api/generalApi";
import ClientPage from "./ClientPage";

export async function generateMetadata() {
  const pageData: any = {};

  return {
    title: pageData?.title ?? "Worksafeonline | Order History By ID",
    keywords: pageData?.keyword ?? "default, keywords",
    description: pageData?.descriptions ?? "Default description",
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/order-history/orderID`,
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico",
      apple: "/logo.ico",
      shortcut: "/logo.ico",
    },
  };
}

export default async function Page(ctx: any) {
  const { orderId } = (await ctx.params) || {};
  return <ClientPage orderId={orderId} />;
}
