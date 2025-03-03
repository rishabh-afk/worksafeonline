import { includes } from "@/utils/polyfills";

export interface FormField {
  type:
    | "text"
    | "file"
    | "date"
    | "email"
    | "radio"
    | "select"
    | "choose"
    | "number"
    | "password"
    | "textarea"
    | "checkbox"
    | "stringNumeric";
  min?: number;
  max?: number;
  name: string;
  label: string;
  accept?: string;
  pattern?: string;
  maxLength?: number;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  confirmPlaceholder?: string;
  validation?: (value: any) => string | null;
  options?: { label: string; value: string | number }[];
}

export const InvoiceFormFields: FormField[] = [
  {
    type: "text",
    name: "Name",
    required: true,
    maxLength: 40,
    label: "Company / your name ",
    placeholder: "Enter company / your name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "stringNumeric",
    required: true,
    label: "Telephone",
    name: "Telephone",
    maxLength: 20,
    pattern: "d*",
    placeholder: "Enter your phone number",
    validation: (value) => {
      if (!value) return "Phone number is required";
      const phoneRegEx = /^[0-9]{10,20}$/;
      if (!phoneRegEx.test(value))
        return "Phone number must be between 10 and 20 digits";
      return null;
    },
  },
  {
    name: "Email",
    type: "email",
    required: true,
    maxLength: 50,
    label: "Email address",
    placeholder: "Enter your email",
    validation: (value) => {
      if (!value) return "Email address is required";
      if (value.length > 320)
        return "Email address cannot exceed 320 characters";
      if (!includes(value, "@")) return "Invalid email address";
      return null;
    },
  },
  {
    type: "text",
    name: "Add",
    required: true,
    label: "Address",
    maxLength: 200,
    placeholder: "House number and street name",
    validation: (value) => {
      if (!value) return "Address is required";
      if (value.length > 255) return "Address cannot exceed 255 characters";
      return null;
    },
  },
  {
    options: [],
    type: "select",
    required: true,
    name: "CountryCode",
    label: "Country",
    placeholder: "Select Country",
  },
  {
    type: "text",
    name: "County",
    label: "County",
    maxLength: 30,
    placeholder: "Enter your county",
    validation: (value) => {
      if (!value) return "County is required";
      if (value.length > 50) return "County name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "PTown",
    required: true,
    maxLength: 30,
    label: "Town / City",
    placeholder: "Enter your city",
    validation: (value) => {
      if (!value) return "City is required";
      if (value.length > 50) return "City name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "PCode",
    required: true,
    maxLength: 10,
    label: "Post Code (by Address Finder)",
    placeholder: "Enter post code",
    validation: (value) => {
      if (!value) return "Post code is required";
      if (value.length < 5 || value.length > 10)
        return "Post code must be between 5 and 10 characters";
      return null;
    },
  },
];

export const BillingFormField: FormField[] = [
  {
    type: "text",
    required: true,
    name: "DName",
    maxLength: 40,
    label: "Company / your name ",
    placeholder: "Enter company / your name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "stringNumeric",
    required: true,
    label: "Telephone",
    name: "DTelephone",
    maxLength: 20,
    pattern: "d*",
    placeholder: "Enter your phone number",
    validation: (value) => {
      if (!value) return "Phone number is required";
      const phoneRegEx = /^[0-9]{10,20}$/;
      if (!phoneRegEx.test(value))
        return "Phone number must be between 10 and 20 digits";
      return null;
    },
  },
  {
    name: "DEmail",
    type: "email",
    required: true,
    maxLength: 50,
    label: "Email address",
    placeholder: "Enter your email",
    validation: (value) => {
      if (!value) return "Email address is required";
      if (value.length > 320)
        return "Email address cannot exceed 320 characters";
      if (!includes(value, "@")) return "Invalid email address";
      return null;
    },
  },
  {
    type: "text",
    name: "DAdd",
    required: true,
    label: "Address",
    maxLength: 200,
    placeholder: "House number and street name",
    validation: (value) => {
      if (!value) return "Address is required";
      if (value.length > 255) return "Address cannot exceed 255 characters";
      return null;
    },
  },
  {
    options: [],
    type: "select",
    required: true,
    label: "Country",
    name: "DCountryCode",
    placeholder: "Select Country",
  },
  {
    type: "text",
    name: "DCounty",
    label: "County",
    maxLength: 30,
    placeholder: "Enter your county",
    validation: (value) => {
      if (!value) return "County is required";
      if (value.length > 50) return "County name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "DPTown",
    required: true,
    label: "Town / City",
    maxLength: 30,
    placeholder: "Enter your city",
    validation: (value) => {
      if (!value) return "City is required";
      if (value.length > 50) return "City name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    name: "DPCode",
    label: "Post Code (by Address Finder)",
    maxLength: 10,
    placeholder: "Enter post code",
    validation: (value) => {
      if (!value) return "Post code is required";
      if (value.length < 5 || value.length > 10)
        return "Post code must be between 5 and 10 characters";
      return null;
    },
  },
];

export const AdditionalFormField: FormField[] = [
  {
    type: "text",
    required: true,
    name: "CName",
    maxLength: 40,
    label: "Company / your name ",
    placeholder: "Enter company / your name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "stringNumeric",
    required: true,
    label: "Telephone",
    name: "CTelephone",
    maxLength: 20,
    pattern: "d*",
    placeholder: "Enter your phone number",
    validation: (value) => {
      if (!value) return "Phone number is required";
      const phoneRegEx = /^[0-9]{10,20}$/;
      if (!phoneRegEx.test(value))
        return "Phone number must be between 10 and 20 digits";
      return null;
    },
  },
  {
    name: "CEmail",
    type: "email",
    required: true,
    maxLength: 50,
    label: "Email address",
    placeholder: "Enter your email",
    validation: (value) => {
      if (!value) return "Email address is required";
      if (value.length > 320)
        return "Email address cannot exceed 320 characters";
      if (!includes(value, "@")) return "Invalid email address";
      return null;
    },
  },
  {
    type: "text",
    name: "PONumber",
    label: "PO Number",
    maxLength: 200,
    placeholder: "Post Office Number",
  },
];
