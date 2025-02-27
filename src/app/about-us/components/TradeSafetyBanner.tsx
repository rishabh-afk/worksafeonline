import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";

type ContentCardProps = {
  link: string;
  title: string;
  imgUrl: string;
  linkText: string;
  description: string;
};

type FeatureHighlightProps = {
  icon: string;
  title: string;
  description: string;
};

const TradeSafetyBanner = ({ response }: { response: any }) => {
  return (
    <div className="max-w-9xl mx-auto  py-8 px-4 md:px-6 lg:px-10 lg:py-10">
      <section>
        <div className="w-full">
          <p
            className={`uppercase text-2xl md:text-3xl lg:text-5xl pb-5 tracking-tight font-extrabold ${bigShoulders.className}`}
          >
            {response?.Header1}
          </p>
          <p className="text-gray-500 mt-4">{response?.Detail1}</p>
        </div>

        <div className="lg:flex gap-10 my-6 w-full">
          <div className="flex flex-col md:flex-row gap-10 p-2 justify-center items-center border-b-2 md:border-0">
            <ContentCard
              link={response?.LLink1}
              title={response?.LHeader1}
              imgUrl={response?.LImage1}
              linkText={response?.LLinkText1}
              description={response?.LDetail1}
            />
            <Divider />
            <ContentCard
              link={response?.LLink2}
              title={response?.LHeader2}
              imgUrl={response?.LImage2}
              linkText={response?.LLinkText2}
              description={response?.LDetail2}
            />
            <Divider />
          </div>

          <div className="w-full mt-4">
            <p
              className={`uppercase text-3xl md:text-4xl lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
            >
              {response?.RHeader1}
            </p>
            <p className="text-gray-500 text-xl mt-4">{response?.RDetail1}</p>
            <div className="mt-8 flex flex-col gap-6">
              <FeatureHighlight
                icon={response?.RIcon2}
                title={response?.RHeader2}
                description={response?.RDetail2}
              />
              <FeatureHighlight
                icon={response?.RIcon3}
                title={response?.RHeader3}
                description={response?.RDetail3}
              />
              <FeatureHighlight
                icon={response?.RIcon4}
                title={response?.RHeader4}
                description={response?.RDetail4}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const ContentCard: React.FC<ContentCardProps> = ({
  title,
  link,
  imgUrl,
  linkText,
  description,
}) => (
  <div className="flex flex-col w-full h-full">
    {/* lg:aspect-[1/1] */}
    <div className=" w-full rounded-md overflow-hidden">
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className="object-cover w-full h-auto transition-transform duration-300 ease-in-out bg-slate-600 transform hover:scale-110"
        unoptimized
      />
    </div>
    <div>
      <p
        className={`uppercase text-start w-full text-3xl md:text-4xl mt-4 lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
      >
        {title}
      </p>
      <p className="text-gray-500 text-md mt-4">{description}</p>
      <div className="flex justify-start w-full">
        <Link
          href={link}
          className="relative border px-4 border-primary font-sans uppercase font-semibold w-fit mt-8 flex bg-white text-black space-x-2 items-start cursor-pointer hover:text-primary py-3 rounded-full"
        >
          <p className="w-full text-xs">{linkText}</p>
          <FaArrowRightLong className="ml-2 text-primary" />
        </Link>
      </div>
    </div>
  </div>
);

const Divider: React.FC = () => (
  <div className="w-[1px] h-[600px] lg:h-full hidden md:block bg-gray-400" />
);

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex gap-5">
    <div className="min-w-20">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        unoptimized
        className="object-contain w-full"
      />
    </div>
    <div className="flex flex-col">
      <p
        className={`uppercase text-xl tracking-tight font-extrabold ${bigShoulders.className}`}
      >
        {title}
      </p>
      <p className="text-gray-500 text-md mt-4">{description}</p>
    </div>
  </div>
);

export default TradeSafetyBanner;
