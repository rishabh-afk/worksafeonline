import { bigShoulders } from "@/app/layout";
import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
// import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

interface ContactDetailsProps {
  details: {
    status: boolean;
    Telephone: string;
    Email: string;
    OfficeHours: string;
    Saturday: string;
    StoreLocation: string;
    HeadQuarter: string;
  };
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ details }) => {
  if (!details || !details.status) {
    return <p>No contact details available.</p>;
  }

  const contactInfo = [
    // {
    //   icon: IoStorefrontOutline,
    //   title: "Store Location",
    //   description: details.StoreLocation || "Default store location",
    // },
    {
      icon: MdOutlineLocationOn,
      title: "TRADE COUNTER",
      description: details.HeadQuarter || "Default headquarter address",
    },
    {
      icon: TbClockHour4,
      title: "OPEN",
      description: details.OfficeHours || "Default office hours",
    },
    {
      icon: MdOutlineMarkEmailRead,
      title: "Contact Info",
      description: `Tel: ${details.Telephone}\nEmail: ${details.Email}`,
    },
  ];

  return (
    <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-10 py-8 px-4 md:px-6 lg:px-10 lg:pt-20 lg:pb-10">
      {contactInfo.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Wrapper to handle alignment across breakpoints */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full">
              {/* Title & Icon Section */}
              <div className="flex flex-col items-center">
                <div className="flex gap-2 items-center">
                  <Icon size={40} />
                  <h3
                    className={`font-black uppercase text-2xl md:text-xl lg:text-2xl ${bigShoulders.className}`}
                  >
                    {detail.title}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className="mt-5 text-gray-700 text-lg md:text-sm lg:text-lg whitespace-pre-line max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
