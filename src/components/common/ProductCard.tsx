import Link from "next/link";
// import StarRating from "./StarRating";
import { bigShoulders } from "@/app/layout";
import ImageComponent from "./ImageComponent";
import { Product } from "@/hooks/useEventEmitter";
import { formatPound } from "../logo/general";
// import AddtoCartButton from "./AddtoCartButton";

const ProductCard = ({ product }: { product: Product | any }) => {
  const slug = `/product/${product?.MenuId}/${product?.Style}`;
  return (
    <div>
      <ImageComponent slug={slug} product={product} />
      <div
        className={`flex flex-col justify-center items-centers ${bigShoulders.className}`}
      >
        {/* <StarRating rating={4} /> */}
        <h3 className="font-extrabold line-clamp-1 text-gray-500 transition-all duration-200 ease-linear">
          <Link href={slug}>Product Code - {product?.Style}</Link>
        </h3>
        <h3 className="font-extrabold capitalize text-lg line-clamp-1 mt-1 hover:text-primary transition-all duration-200 ease-linear">
          <Link href={slug}>{product?.Description}</Link>
        </h3>
        <button className="flex mt-2 justify-between items-center">
          <span className="space-x-1 flex items-center">
            <span className="text-2xl text-primary">
              {formatPound(product?.EndPrice)}
            </span>
            {/* {product?.StartPrice &&
              product?.StartPrice !== product?.EndPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {Number(product?.StartPrice).toFixed(2)}
                </span>
              )} */}
            {product?.TCPrice && (
              <span className="text-xl text-gray-400 font-semibold line-through">
                {formatPound(Number(product?.TCPrice))}
              </span>
            )}
          </span>
          {/* <AddtoCartButton product={product} /> */}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
