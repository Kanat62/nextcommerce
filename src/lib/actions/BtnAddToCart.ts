import { useCartStore } from '../store/cartStore'
import { IProduct } from '../types/interface'
type Props = {
    product: IProduct
}

export const useAddCartStore = ({product}: Props) => {
    const { cart, addToCart, openModal } = useCartStore()

    const productInCart = cart.some((item) => item._id === product._id)

    const handleAddCart: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!productInCart) {
            addToCart(product)
        }
    }

    return {
        openModal,
        productInCart,
        handleAddCart,
    }
}
