import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import BreadcrumbsHeader from "@/app/product/components/BradcrumbsHeader";

interface HeaderProps {
  title: string;
  getBreadCrumbs?: any;
}

const Header: React.FC<HeaderProps> = ({ title, getBreadCrumbs }) => {
  return (
    <div
      id="header"
      // style={{
      //   clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
      //   overflow: "hidden",
      // }}
      className="relative bg-gray-800 text-white h-[400px]"
    >
      <Image
        fill
        priority
        alt="Contact-Us Banner"
        className="object-cover"
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-between items-start p-4 md:p-6 lg:p-10 z-10 text-center max-w-9xl mx-auto">
        <h1 className="text-sm font-semibold uppercase">
          <BreadcrumbsHeader getBreadCrumbs={getBreadCrumbs} />
        </h1>
        <h1
          className={`text-7xl ${bigShoulders.className} uppercase font-extrabold`}
        >
          {title}
        </h1>
        <span className="mt-2 text-lg"></span>
      </div>
    </div>
  );
};

export default Header;
