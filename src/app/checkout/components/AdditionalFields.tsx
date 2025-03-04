import { Accordion } from "./Accordion";
import Text from "@/components/input/Text";
import { useEffect, useState } from "react";
import { RiLoginBoxFill } from "react-icons/ri";
import eventEmitter from "@/hooks/useEventEmitter";
import NumericStringInput from "@/components/input/NumericString";
import { AdditionalFormField as updatedformFields } from "./formType";

const AdditionalFields = ({
  isOpen,
  errors,
  formRef3,
  formData,
  setIsOpen,
  setFormData,
  handleButtonClick,
  handleForm3Validation,
}: {
  errors: any;
  formRef3: any;
  formData: any;
  setIsOpen: any;
  isOpen: boolean;
  setFormData: any;
  handleButtonClick: any;
  handleForm3Validation: any;
}) => {
  const handleContinue = async (e: any) => {
    e.preventDefault();
    handleButtonClick("billingAddress");
  };

  const [formFields, setFormFields] = useState(updatedformFields);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const handleData = (data: any) => {
      if (data?.accounttype === "Account") {
        const fields = updatedformFields.map((field: any) => {
          if (field.name === "PONumber") return { ...field, required: true };
          else return field;
        });
        setFormFields(fields);
      }
    };
    eventEmitter?.on("FetchedLogin", handleData);
    return () => {
      eventEmitter?.off("FetchedLogin", handleData);
    };
  }, []);

  return (
    <>
      <Accordion
        isOpen={isOpen}
        title="My Details"
        Icon={RiLoginBoxFill}
        setIsOpen={setIsOpen}
        handleForm1Validation={handleForm3Validation}
      >
        <form ref={formRef3} onSubmit={handleContinue}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
            <Text
              field={{
                ...formFields[3],
                value: formData[formFields[3].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[3].name]}
            />
            <Text
              field={{
                ...formFields[0],
                value: formData[formFields[0].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[0].name]}
            />
            <NumericStringInput
              field={{
                ...formFields[1],
                value: formData[formFields[1].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[1].name]}
            />
            <Text
              field={{
                ...formFields[2],
                value: formData[formFields[2].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[2].name]}
            />
            <button
              type="submit"
              className="w-full px-6 py-4 text-white rounded-full bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
            >
              Continue With My Details
            </button>
          </div>
        </form>
      </Accordion>
    </>
  );
};

export default AdditionalFields;
