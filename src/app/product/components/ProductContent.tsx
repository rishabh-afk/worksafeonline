import Guarantee from "./Guarantee";
// import ShippingInfo from "./ShippingInfo";
import ProductDetails from "./ProductDetail";
import ProductActions from "./ProductActions";
import QuantitySelector from "./QuantitySelector";
// import ProductMetaInfo from "./ProductMetaInfo";

const ProductContent = ({ product, setImage }: { product: any, setImage: any }) => {
  return (
    <div className="w-full lg:w-1/2 overflow-auto mt-4 lg:mt-0">
      <ProductDetails product={product} />
      <QuantitySelector
        product={product}
        setImage={setImage}
        showLogoCustomisation={product.ShowDesignLogo}
      />
      <ProductActions ProSpecsheet={product?.ProSpecsheet} />
      <Guarantee warranty={product?.warranty} />
      {/* <ShippingInfo shippingDetails={product.shippingDetails} /> */}
      {/* <div className="bg-gray-300 h-[1px] my-8" />
      <ProductMetaInfo
        productSKU={product.productSKU}
        productCategory={product.productCategory}
      /> */}
    </div>
  );
};

export default ProductContent;
