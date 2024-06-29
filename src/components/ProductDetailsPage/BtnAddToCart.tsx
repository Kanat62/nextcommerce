'use client'
import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
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
            variant={productInCart ? 'outline' : 'default'}
            className="text-lg p-6 shadow"
            onClick={productInCart ? openModal : handleAddCart}
        >
            <ShoppingBag className="w-6 h-6" />
            <span className="ml-3">
                {productInCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
            </span>
        </Button>
    )
}

export default BtnAddToCart
