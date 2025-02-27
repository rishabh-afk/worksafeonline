import ProductSwiper from "./TeamSwiper";
import { bigShoulders } from "@/app/layout";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

const OurTeam = ({ response }: { response: any }) => {
  return (
    <section className="max-w-9xl mx-auto py-8 px-4 lg:pt-10 lg:pb-0">
      <div className="max-w-screen-xl mx-auto lg:px-6">
        <div className={`relative ${bigShoulders.className}`}>
          <h1 className="text-6xl md:text-9xl font-bold text-center tracking-wider bg-gradient-to-b mb-10 from-gray-300 via-gray-200 uppercase to-white bg-clip-text text-transparent">
            Meet People
          </h1>
          <p
            className={`uppercase text-3xl md:text-5xl text-center absolute font-black whitespace-nowrap bottom-0 md:bottom-16 left-1/2 translate-x-[-50%] translate-y-1/2`}
          >
            OUR TEAM
          </p>
        </div>
      </div>
      <ProductSwiper response={response} />

      <div className="sm:mt-20 w-full flex justify-center items-center">
        <AnimatedActionButton
          text="contact us"
          href="/contact"
          // onClick={() => console.log("Button clicked")}
          classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
          isLoading={false}
          type="submit"
        />
      </div>
    </section>
  );
};

export default OurTeam;
