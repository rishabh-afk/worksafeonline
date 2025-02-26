import Image from "next/image";

const Guarantee = ({ warranty }: { warranty: string }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-5 border border-gray-300 rounded-lg">
      <p className="text-sm font-semibold">
        {warranty ?? "Guarantee Safe & Secure Checkout"}
      </p>
      <Image
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/payment.jpg"
        alt="Payment"
        width={100}
        height={100}
        priority
        unoptimized
        className="object-contain w-auto"
      />
    </div>
  );
};

export default Guarantee;
