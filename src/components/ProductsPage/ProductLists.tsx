import { IProduct } from '@/lib/types/interface'
import ProductCard from './ProductCard'

type Props = {
    products: IProduct[]
}
const ProductLists = ({ products }: Props) => {
    return (
        <>
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </>
    )
}

export default ProductLists
