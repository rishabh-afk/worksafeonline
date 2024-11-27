import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { IoStarSharp } from 'react-icons/io5'

const ProductContent = () => {
    return (
        <div className='p-8 flex flex-col gap-4'>
            <div className='bg-red-700 rounded-full py-[1px] w-20 text-center text-white'>save 7%</div>
            <h1 className=' text-5xl'>Hi-Vis Zip Sweatshirt</h1>

            <div className='flex item-center gap-5'>
                <div className=' flex items-center gap-1'>
                    <p>Brands:</p>
                    <p className='text-yellow-400'>Vertico</p>
                </div>
                <div className=' flex items-center gap-1'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <IoStarSharp size={15} key={`full-${i}`} className="text-black" />
                    ))}

                    <h3 className='pl-2'>(5 reviews)</h3>
                </div>

                <div className=' flex items-center '>
                    <BiCheck className='text-green-500' size={20} />
                    <span className='text-green-500'>In stock</span>
                </div>

            </div>

            <div className='h-[1px] w-full bg-gray-200 text-gray-100' />
            <div className='text-gray-600'>
                Voluptatibus animi ea suscipit et ratione dignissimos. Hic repudiandae deleniti magni porro saepe sunt. Est ea sed et ex molestias.
            </div>
            <h3 className="text-black text-3xl">
                92.00$
                –
                99.00$
            </h3>

            <div className=' flex flex-col  w-full gap-2'>
                <h3 className='text-bold'>
                    Color
                </h3>
                <div className='flex gap-3'>
                    <div className='h-[25px] w-[25px] rounded-full bg-black'> </div>
                    <div className='h-[25px] w-[25px] rounded-full bg-blue-600'> </div>
                    <div className='h-[25px] w-[25px] rounded-full bg-green-600'> </div>
                    <div className='h-[25px] w-[25px] rounded-full bg-pink-600'> </div>
                </div>
            </div>

            <div className='flex  justify-content-center gap-4 mt-4 text-center '>
                {/* filter */}

                <div className=' px-8 bg-gray-100 border  py-2 rounded-full flex gap-6 justify-content-center text-center text-black font-bold text-[20px]'>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>

                {/* add to cart button */}

                <div className='  bg-yellow-400 border  py-2 rounded-full  text-center text-black w-full font-bold text-[20px] uppercase opacity-50'>
                    Add to Cart
                </div>

            </div>
        </div>
    )
}

export default ProductContent