import { getAllProducts, getProductById } from '@/lib/services/getData'
import BtnAddToCart from '@/components/ProductDetailsPage/BtnAddToCart'
import ProductCarousel from '@/components/ProductDetailsPage/ProductCarousel'
import Installment from '@/components/ProductDetailsPage/Installment'
// https://vercel.com/templates/next.js/nextjs-commerce
// https://github.com/vercel/commerce/tree/v1
type Props = {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => {
    const products = await getAllProducts()

    return products.map((product) => {
        slug: product._id
    })
}

const ProductDetails = async ({ params: { slug } }: Props) => {
    const product = await getProductById(slug)

    return (
        <main className="flex gap-5 lg:gap-10 relative  flex-col justify-center lg:mt-8 mb-20 lg:flex-row">
            <div className="w-full lg:w-1/2 h-full lg:sticky lg:top-[90px] pb-6 lg:pb-12 pt-14 select-none  bg-white rounded-2xl shadow">
                <ProductCarousel product={product} />
            </div>

            <div className="w-full lg:w-1/2 p-2 lg:px-5 font-medium flex flex-col gap-2.5">
                <h1 className="mt-5 text-2xl lg:text-4xl lg:font-semibold">
                    {product?.brand} {product?.title}
                </h1>

                {/* {product.in_stock === 'yes' ? (
                    <div className="text-[rgb(15,218,90)]">Товар в наличии</div>
                ) : (
                    <div className="text-red-500">Нет в наличии</div>
                )} */}
                {/* {product.memory && (
                    <div>
                        <div className="text-gray mb-1">Память</div>
                        <div className="text-lg">{product.memory}тб</div>
                    </div>
                )} */}

                <div>
                    <div className="text-gray mb-1">Цена</div>
                    <div className="text-[26px] font-medium">
                        {product?.price} cом
                    </div>
                </div>
                <Installment price={product.price} />
                <div className="flex items-center gap-5 mt-8">
                    <BtnAddToCart product={product} />
                </div>

                <div className="mt-12 p-5 bg-card rounded-2xl shadow">
                    {product.description}
                </div>
            </div>
        </main>
    )
}

export default ProductDetails
