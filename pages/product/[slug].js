import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';



const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* Left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    {/* Left column end */}



                    {/* Right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {/* {p.subtitle} */} MenSapos Golf Shoes
                        </div>


                        {/* PRODUCT PRICE */}
                        <div className='text-lg font-semibold'>
                            MRP : 19695.00
                        </div>

                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>

                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product size rand start */}
                        <div className='mb-10'>
                            {/* Heading Start */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/* Heading end */}

                            {/* Size start */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                            </div>
                            {/* Size end */}

                            {/* Show error start */}
                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                            {/* Show error end */}

                            {/* Add to cart button starts */}
                            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                                Add to Cart
                            </button>
                            {/* Add to cart button ends */}


                            {/* WHISHLIST BUTTON START */}
                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                                Whishlist
                                <IoMdHeartEmpty size={20} />
                            </button>
                            {/* WHISHLIST BUTTON END */}



                            <div>
                                <div className="text-lg font-bold mb-5">
                                    Product Details
                                </div>
                                <div className="markdown text-md mb-5">
                                    The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.

                                </div>
                            </div>
                        </div>
                        {/* Product size range end */}
                    </div>
                    {/* Right column end */}
                </div>

                <RelatedProducts />
            </Wrapper>
        </div>
    )
}

export default ProductDetails;