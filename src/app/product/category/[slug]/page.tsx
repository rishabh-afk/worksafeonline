import StarRating from '@/components/common/StarRating';
import ColorSelector from '@/components/products/ColorSelector';
import ProductContent from '@/components/products/ProductContent';
import ProductImageContainer from '@/components/products/ProductImageContainer';
import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';
// /app/product/category/[slug]/page.tsx
// import { useRouter } from 'next/navigation';

const ProductPage = () => {
    //   const router = useRouter();
    //   const { slug } = router.query;

    // If slug is not available, return a loading state
    //   if (!slug) {
    //     return <div>Loading...</div>;
    //   }

    return (
        <div className='flex justify-content-center item-center  mt-10 p-5 w-full '>
            {/* left side products sub and main image */}
            <div className='flex gap-5 '>
                <ColorSelector />
                {/* main image component */}
                <ProductImageContainer/>
            </div>
            {/* right product content */}
           <ProductContent/>
        </div>
    );
};

export default ProductPage;
