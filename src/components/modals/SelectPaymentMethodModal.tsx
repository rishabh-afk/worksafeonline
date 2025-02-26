import { useState } from "react";
import Modal from "../common/Modal";
import { bigShoulders } from "@/app/layout";
import { FaPaypal, FaMoneyCheckAlt } from "react-icons/fa";

const SelectPaymentMethodModal = ({
  data,
  isVisible,
}: {
  data: any;
  isVisible: any;
}) => {
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  const handleSubmit = () => {
    if (data?.paymenturl1 && selectedMethod === "SagePay")
      window.location.href = data?.paymenturl1;
    else if (data?.paymenturl2 && selectedMethod === "PayPal")
      window.location.href = data?.paymenturl2;
  };

  return (
    <Modal
      removePadding={true}
      isVisible={isVisible}
      showCloseButton={false}
      width="w-[90%] lg:w-[464px]"
      onClose={() => console.log("Close")}
    >
      <div className="relative flex flex-col justify-center items-center p-6 min-h-40 bg-white rounded-lg shadow-xl">
        <h2
          className={`text-4xl font-bold text-center text-black ${bigShoulders.className}`}
        >
          Select Payment Method
        </h2>

        <div className="flex gap-4 mt-6 w-full justify-center">
          <button
            className={`flex flex-col items-center px-6 py-3 border-[3px] rounded-lg transition-all text-lg font-semibold w-40 ${
              selectedMethod === "SagePay"
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary"
            }`}
            onClick={() => setSelectedMethod("SagePay")}
          >
            <FaMoneyCheckAlt size={30} className="mb-2 text-primary" />
            SagePay
          </button>

          <button
            className={`flex flex-col items-center px-6 py-3 border-[3px] rounded-lg transition-all text-lg font-semibold w-40 ${
              selectedMethod === "PayPal"
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary"
            }`}
            onClick={() => setSelectedMethod("PayPal")}
          >
            <FaPaypal size={30} className="mb-2 text-primary" />
            PayPal
          </button>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedMethod}
          className={`mt-6 px-6 py-3 rounded-lg text-lg font-bold transition w-full ${
            selectedMethod
              ? "bg-primary text-white hover:bg-primary/80"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Pay with {selectedMethod || "..."}
        </button>
      </div>
    </Modal>
  );
};

export default SelectPaymentMethodModal;
