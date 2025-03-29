import { bigShoulders } from "@/app/layout";
import BlogsSwiper from "./BlogsSwiper";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

const Blogs = ({ hideButton = false }: any) => {
    return (
        <section className="max-w-9xl mx-auto py-8 px-4 lg:py-20">
            <div className="max-w-screen-xl mx-auto lg:px-6 ">
                <div className={`relative ${bigShoulders.className}`}>
                    <h1 className="text-6xl md:text-9xl font-bold text-center tracking-wider bg-gradient-to-b mb-10 from-gray-300 via-gray-200 uppercase to-white bg-clip-text text-transparent">
                        FROM BLOG
                    </h1>
                    <p
                        className={`uppercase text-3xl md:text-5xl text-center absolute font-black whitespace-nowrap bottom-0 md:bottom-10 left-1/2 translate-x-[-50%] translate-y-1/2`}
                    >
                        latest post
                    </p>
                </div>

            </div>
            <BlogsSwiper />

            {!hideButton &&
                <div className="mt-10 w-full flex justify-center items-center">
                    <AnimatedActionButton
                        text="View all post"
                        href="/blogs"
                        classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[190px] hover:bg-primary bg-white text-black hover:text-black"
                        isLoading={false}
                        type="submit"
                    />
                </div>
            }
        </section>
    );
};

export default Blogs;
