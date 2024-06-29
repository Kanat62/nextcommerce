'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react'
import { useAddCartStore } from '@/lib/actions/BtnAddToCart'
import { IProduct } from '@/lib/types/interface'

type Props = {
    product: IProduct
}

const BtnAddToCart = ({ product }: Props) => {
    const { productInCart, openModal, handleAddCart } = useAddCartStore({
        product,
    })

    return (
        <Button
            variant={'outline'}
            className="border-none h-[30px] p-1 sm:pr-2 rounded-2xl bg-card "
            onClick={productInCart ? openModal : handleAddCart}
        >
            <ShoppingBag
                className={
                    'w-6 h-6 lg:w-7 lg:h-7 ' +
                    (productInCart ? 'text-primary' : 'text-gray')
                }
            />
        </Button>
    )
}

export default BtnAddToCart
