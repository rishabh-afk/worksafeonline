import React from "react";
import { Get } from "@/api/generalApi";
import Header from "../shop/components/Header";
import CategoryCard from "@/components/common/CategoryCard";

export async function generateMetadata() {
    // Fetch collection-specific metadata (replace with actual API call)
    const pageData: any = {}; // Replace with actual API response

    return {
        title: pageData?.title ?? `Explore | WorkSafeOnline`,
        keywords: pageData?.keywords ?? "collection, safety equipment, work gear",
        description: pageData?.description ?? `Discover top-quality products at WorkSafeOnline.`,
        alternates: {
            canonical: `https://www.worksafeonline.co.uk/collections`,
        },
        robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
        icons: {
            icon: "/logo.ico",
            shortcut: "/logo.ico",
            apple: "/logo.ico",
        },
    };
}


export default async function Home() {
    const { categories } = await Get("api/Categories");
    return (
        <div>
            <Header
                title="Shop"
                data={{ url: "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-shop.jpg", name: "Our Collection" }}
                getBreadCrumbs={[{ id: "/collection", name: "Collection" }]}
            />
            <div className="grid grid-cols-1 max-w-9xl mx-auto p-4 md:p-8 lg:p-16 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {categories &&
                    categories.length > 0 &&
                    categories.map((category: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <CategoryCard category={category} />
                            </React.Fragment>
                        );
                    })}
            </div>
        </div>
    );
}

export const revalidate = 1800;
