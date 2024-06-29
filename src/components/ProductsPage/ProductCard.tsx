'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IProduct } from '@/lib/types/interface'
import BtnAddToCart from './BtnAddToCart'

type Props = {
    product: IProduct
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="flex flex-col justify-between gap-2 sm:gap-3 p-3  sm:p-5 font-medium select-none bg-card rounded-2xl lg:shadow lg:hover:shadow-2xl lg:ease-in lg:duration-100">
            <div className="w-full flex justify-center items-center overflow-hidden">
                <Link
                    href={`/products/${product._id}`}
                    className="max-w-[165px] max-h-[200px] flex justify-center items-center"
                >
                    <Image
                        src={product.primary_image}
                        className="p-2 sm:p-1"
                        alt={'Гарантия'}
                        width={160}
                        height={200}
                        priority={true}
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center sm:gap-0.5">
                <div className="text-min sm:text-[15px] text-gray ">
                    {product.memory &&
                        `${product.memory === 1000 ? '1тб' : `${product.memory}гб`}`}
                </div>

                <div className="text-min lg:text-base  font-semibold">
                    {product?.brand}
                </div>
                <div className="text-min lg:text-base font-semibold">
                    {product?.title}
                </div>

                <div className="w-full flex justify-between items-center mt-0.5">
                    <div className="text-base lg:text-lg ml-1">
                        {product?.price} cом
                    </div>
                    <BtnAddToCart product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
