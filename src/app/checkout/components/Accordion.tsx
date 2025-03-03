import { bigShoulders } from "@/app/layout";
import { useCallback, useEffect, useRef } from "react";

export const Accordion = ({
  Icon,
  title,
  isOpen,
  children,
  setIsOpen,
  handleForm1Validation,
}: {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  Icon: React.ElementType;
  children: React.ReactNode;
  handleForm1Validation: any;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the accordion container

  const scroll = useCallback(() => {
    if (containerRef.current) {
      const offsetTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen && containerRef.current)
      setTimeout(() => {
        scroll();
      }, 500);
  }, [isOpen, scroll]);

  const toggle = () => {
    if (!handleForm1Validation()) return;
    setIsOpen(!isOpen);
    if (!isOpen && containerRef.current) scroll();
  };

  return (
    <div ref={containerRef} className="border border-gray-300 rounded-lg mb-5">
      <button
        onClick={toggle}
        className={`w-full px-3 md:px-5 py-2.5 md:py-3 flex justify-between items-center text-left md:text-lg font-bold ${bigShoulders.className}`}
      >
        <h2
          className={`uppercase text-lg lg:text-2xl flex gap-2 items-center text-[#F06022] font-extrabold ${bigShoulders.className}`}
        >
          <Icon /> {title}
        </h2>
        <span className="text-2xl md:text-4xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px", // Dynamically set height
        }}
      >
        <div className="p-3 md:p-5">{children}</div>
      </div>
    </div>
  );
};
