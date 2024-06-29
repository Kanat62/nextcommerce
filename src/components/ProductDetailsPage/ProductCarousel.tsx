'use client'
import { IProduct } from '@/lib/types/interface'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

type Props = {
    product: IProduct
}

const ProductCarousel = ({ product }: Props) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (api) {
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap() + 1)

            api.on('select', () => {
                setCurrent(api.selectedScrollSnap() + 1)
            })
        }
    }, [api])
    const handleBtnClick = (index: number) => {
        if (api) {
            api.scrollTo(index - 1)
            setCurrent(index)
        }
    }
    return (
        <>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="w-full flex justify-center"
                        >
                            <div className="flex justify-center w-full max-w-[310px]">
                                <Image
                                    src={product?.primary_image}
                                    alt={'dd'}
                                    width={260}
                                    height={300}
                                    className="w-[220px] lg:h-auto lg:w-auto"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 lg:left-10" />
                <CarouselNext className="right-4 lg:right-10" />
            </Carousel>
            <div className="flex mt-9 justify-center  space-x-2">
                {Array.from({ length: count }).map((_, index) => (
                    <span
                        key={index + 1}
                        onClick={() => handleBtnClick(index + 1)}
                        className={
                            current === index + 1
                                ? 'inline-block w-3 h-3 bg-[#777777] rounded-full cursor-pointer'
                                : 'inline-block w-3 h-3 bg-[#cdcccc] rounded-full cursor-pointer'
                        }
                    ></span>
                ))}
            </div>
        </>
    )
}

export default ProductCarousel
