// func is called to check the current screen data is available or not
export const getScreenActiveStatus = (
  customizeData: any,
  currentCustomizeStep: any
) => {
  const {
    addtext,
    logoSize,
    imageText,
    logoDesign,
    textDesign,
    designImage,
    logoPosition,
    printEmbroidery,
  } = customizeData || {};

  const isValid = !!(
    (
      textDesign?.Item_Code ||
      addtext?.textLine1?.TextLine || // If textDesign or addtext is present
      designImage ||
      logoDesign?.Item_Code
    ) // If designImage or logoDesign is present
  );

  switch (currentCustomizeStep) {
    case 0:
      return !!imageText?.id;
    case 1:
      return isValid;
    case 2:
      return !!printEmbroidery?.id;
    case 3:
      return !!logoPosition?.length && !!logoSize;
    default:
      return false;
  }
};

export const fetchRequest = (data: any) => {
  const requests = [
    {
      condition: true,
      key: "savedLogos",
      url: "api/ArtworkList",
      params: { style: data.ProductID, search: "" },
    },
    {
      condition: true,
      key: "artworkList",
      url: "api/TextArtworkList",
      params: { style: data.ProductID, search: "" },
    },
    {
      condition: true,
      key: "artworkTemplate",
      url: "api/DesignProductPositionTemplate",
      params: { artwork: "", product: data.ProductID },
    },
    {
      condition: true,
      key: "textColours",
      url: "api/ProductTextColours",
      params: { product: data.ProductID, colour: data?.color?.Html_Code },
    },
    {
      condition: true,
      key: "textFontFamily",
      url: "api/ProductTextFontFamily",
      params: { product: data.ProductID },
    },
    {
      condition: true,
      key: "modalData",
      url: "api/CustomizeLogoPopUp",
      params: { style: data.ProductID },
    },
  ];
  return requests;
};

export const formatPound = (amount: any) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(amount);
};
