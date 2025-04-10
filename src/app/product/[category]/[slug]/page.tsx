import ClientPage from "./ClientPage";
import { redirect } from "next/navigation";
import Features from "@/components/common/Features";
import { fetchProductMenuData, Get } from "@/api/generalApi";
import ProductFeatures from "../../components/ProductFeatures";
import BreadcrumbsHeader from "../../components/BradcrumbsHeader";

type ProductPageProps = {
  params: Promise<{
    slug: string;
    category: string;
  }>;
};

export async function generateMetadata() {
  const pageData: any = {};
  return {
    title: pageData?.title ?? "Worksafeonline | Product Details",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/product}`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

export default async function Page(ctx: ProductPageProps) {
  const { category, slug } = (await ctx.params) || {};
  const productResponse = await Get(
    `api/ProductDetails12?product_id=${slug}&category_id=${category}`
  );
  const getBreadCrumbs: any = await fetchProductMenuData(category);
  if (productResponse.status && !productResponse?.ProductID)
    return redirect("/error");
  const productListImages = productResponse.ProductImageList.map(
    (image: any) => image?.ProductImage
  );
  const bread = {
    name: productResponse?.ProductName,
    id: `/product/${category}/${slug}`,
  };
  if (getBreadCrumbs.length > 0) getBreadCrumbs.push(bread);
  return (
    <>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
        <BreadcrumbsHeader getBreadCrumbs={getBreadCrumbs} />
        <div className="mt-5 lg:mt-10 block min-h-screen lg:flex gap-14">
          <ClientPage
            slug={slug}
            category={category}
            productResponse={productResponse}
            productListImages={productListImages}
          />
        </div>
        <div className="bg-gray-300 h-[1px] my-[30px]" />
        <ProductFeatures product={productResponse} />
      </div>
      {/* <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10 !py-0">
        <RecommendedProducts products={product.recommended_products} />
      </div> */}
      <Features />
    </>
  );
}

export const revalidate = 1800;
