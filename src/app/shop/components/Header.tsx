import Image from "next/image";
import BreadcrumbsHeader from "@/app/product/components/BradcrumbsHeader";

interface HeaderProps {
  data: any;
  title: string;
  getBreadCrumbs?: any;
}

const Header: React.FC<HeaderProps> = ({ title, data, getBreadCrumbs }) => {
  if (!data?.url) return;
  return (
    <div className="relative bg-gray-800 text-white h-[400px]">
      <Image
        fill
        priority
        src={
          data?.url ||
          "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-shop.jpg"
        }
        className="object-cover"
        alt={data?.name || title}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-between items-start p-4 md:p-6 lg:p-10 z-10 text-center">
        <BreadcrumbsHeader getBreadCrumbs={getBreadCrumbs} />
        <h1 className={`text-5xl font-bold`}>{data?.name || title}</h1>
        <span className="mt-2 text-lg"></span>
      </div>
    </div>
  );
};

export default Header;
