import React from 'react'

const ColorSelector = () => {
    return (
        <div className="flex flex-col  gap-6">
            {Array.from({ length: 3 }).map((_, index) => {
                return (
                    <div key={index} className="bg-white flex  border rounded-md">
                        <img
                            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/product_1_1.jpg"
                            alt="img"
                            width={140}
                            height={140}
                            className="object-cover"
                        />
                    </div>
                );
            })}

        </div>
    )
}

export default ColorSelector