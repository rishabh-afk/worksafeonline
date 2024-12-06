import React from 'react';
import Link from 'next/link';
import { bigShoulders } from '@/app/layout';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialConnect: React.FC = ( ) => {

    const socialLinks = [
        {
          platform: "Facebook",
          icon: <FaFacebook size={20} />,
          href: "#",
          hoverColor: "hover:bg-blue-500",
        },
        {
          platform: "Twitter",
          icon: <FaTwitter size={20} />,
          href: "#",
          hoverColor: "hover:bg-[#00C3F4]",
        },
        {
          platform: "Instagram",
          icon: <FaInstagram size={20} />,
          href: "#",
          hoverColor: "hover:bg-[#D80085]",
        },
        {
          platform: "YouTube",
          icon: <FaYoutube size={20} />,
          href: "#",
          hoverColor: "hover:bg-[#B72D28]",
        },
      ];
    

  return (
    <div
      className={`max-w-9xl px-10 py-5 mx-auto text-xl md:text-2xl flex flex-col md:flex-row justify-between items-center text-white font-bold pb-20 ${bigShoulders.className}`}
    >
      {/* Social Links Section */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <p className="uppercase">Connect with us:</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <span
              key={index}
              className={`relative flex space-x-2 items-center transition-all duration-200 ease-in-out rounded-[2px] cursor-pointer bg-[#3b3b3b] ${
                link.hoverColor || ''
              } group-hover:text-black group-hover:border-none py-5 pl-9 pr-2 overflow-hidden group`}
            >
              {/* Default Icon */}
              <span className="absolute whitespace-nowrap text-sm left-3 w-full transition-all duration-200 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                <Link href={link.href} className="hover:text-white">
                  {link.icon}
                </Link>
              </span>

              {/* Hover Icon */}
              <span className="absolute whitespace-nowrap text-sm left-1 w-full transition-all duration-200 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                <Link href={link.href} className="hover:text-white">
                  {link.icon}
                </Link>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Customer Service Section */}
      <div>
        <p>Customer Service: (084) 123-456 88</p>
      </div>
    </div>
  );
};

export default SocialConnect;
