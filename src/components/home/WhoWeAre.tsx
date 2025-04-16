import Link from "next/link";
import Image from "next/image";
import Marquee from "../common/Marquee";
import Features from "../common/Features";
import { bigShoulders } from "@/app/layout";
import AnimatedActionButton from "../common/AnimatedActionButton";

const WhoWeAre = ({ brands }: { brands: any }) => {
  return (
    <>
      <div className="min-h-screen relative">
        <Image
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/h1_bg-4.jpg"
          alt="Image"
          width={100}
          height={100}
          className="object-cover w-screen min-h-screen"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black transition-all duration-500 ease-linear opacity-80 group-hover:opacity-40"></div>
        <div className="absolute inset-0 z-50 max-w-9xl mx-auto flex flex-col lg:flex-row justify-start md:justify-center lg:justify-between gap-10 items-center lg:items-start px-4 md:px-6 lg:px-10 lg:pt-10">
          <div className="w-full lg:w-1/3 pt-20 lg:pt-0 leading-none">
            <p
              className={`uppercase text-4xl md:text-8xl lg:text-[102px] text-white font-black ${bigShoulders.className}`}
            >
              who <br />
              <span className="text-primary">we are</span>
            </p>
            <AnimatedActionButton
              text="Our Story"
              isLoading={false}
              href="/about-us"
              classes="md:text-lg mt-4 lg:mt-[88px] font-semibold whitespace-nowrap py-6 w-2/5 hover:bg-primary bg-white text-black hover:text-black"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <div className="border-b-2 border-b-white pb-10 mb-5 flex flex-col md:flex-row justify-start gap-5 md:gap-10 lg:gap-20">
              <Image
                src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/certification.svg"
                alt="Image"
                width={100}
                height={100}
                className="object-contain w-40"
                priority
                unoptimized
              />
              <p className="md:text-xl flex flex-col gap-5 text-white">
                <span>
                  Founded in 1983, Axetor are still today&apos;s leader in
                  industrial clothing in Australia and they offer a range of
                  durable and functional workwear for the most demanding jobs.
                </span>
                <span>
                  We prioritize providing excellent customer service and support
                  throughout your shopping journey with us.
                </span>
              </p>
            </div>
            <div className="text-white">
              <p
                className={`${bigShoulders.className} text-3xl py-3 font-black uppercase`}
              >
                Popular Brands
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 mt-5 mb-10">
                {brands &&
                  brands.length > 0 &&
                  brands.map((brand: any, index: number) => {
                    return (
                      <Link
                        href={brand?.ApiUrl || "/"}
                        className="flex justify-center text-center text-sm md:text-lg font-semibold items-center border p-2"
                        key={index}
                      >
                        <Image
                          width={100}
                          height={100}
                          unoptimized
                          alt={brand?.Brand_Name}
                          src={brand?.Brand_Image}
                          className="w-fit object-contain"
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <Features />
    </>
  );
};

export default WhoWeAre;
