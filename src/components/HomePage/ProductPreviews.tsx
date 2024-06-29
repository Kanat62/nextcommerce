import { getAllProducts, getBrands } from '@/lib/services/getData'
import ProductCard from '../ProductsPage/ProductCard'
import Link from 'next/link'
import { Button } from '../ui/button'

const ProductPreviews = async () => {
    const products = await getAllProducts()
    const maxShowProducts = 10
    return (
        <div className="mb-10">
            <h2 className="text-xl md:text-3xl font-semibold mb-5 ml-2 md:mb-8 md:ml-8">
                Новинки
            </h2>
            <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 sm:gap-7  lg:grid-cols-4 xl:grid-cols-5">
                {products?.map(
                    (product, index) =>
                        maxShowProducts > index && (
                            <ProductCard key={product._id} product={product} />
                        )
                )}
            </div>
            <div className="w-full text-center mt-14">
                <Link href={'/products'}>
                    <Button className="leading-4 text-lg pb-4 py-6 px-12 shadow">
                        Все товары
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ProductPreviews
