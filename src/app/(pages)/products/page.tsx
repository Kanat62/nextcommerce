import Sorting from '@/components/ProductsPage/Filter/Sorting'
import PaginationControls from '@/components/ProductsPage/PaginationControls'
import ProductLists from '@/components/ProductsPage/ProductLists'
import SideBar from '@/components/ProductsPage/SideBar'
import { getBrands, getCategories, getMemories } from '@/lib/services/getData'
import { useProducts } from '@/hooks/useProducts'
import { ProductsParams } from '@/lib/types/type'
import { Suspense } from 'react'

type Props = {
    searchParams: ProductsParams
}

const Products = async ({ searchParams }: Props) => {
    const { page, category, minPrice, maxPrice, sort, brands, memories } =
        searchParams
    const currentPage = Number(page ?? 1)
    const limitItems = 16 // Количество отображаемых товаров

    const start = (currentPage - 1) * limitItems

    const { products, productsLength } = await useProducts({
        page,
        start,
        limitItems,
        category,
        minPrice,
        maxPrice,
        sort,
        brands,
        memories,
    })
    const end = Math.ceil(productsLength / limitItems)

    const categoriesData = await getCategories()
    const brandsData = await getBrands()
    const memoriesData = await getMemories()

    return (
        <div className="w-full flex gap-7">
            <Suspense fallback={<div>Loading...</div>}>
                <SideBar
                    products={products}
                    categories={categoriesData}
                    brands={brandsData}
                    memories={memoriesData}
                />
            </Suspense>

            <div className="w-full flex flex-col gap-4 lg:gap-7 pb-5">
                <div className="flex justify-between items-center select-none">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Sorting productsLength={productsLength} />
                    </Suspense>
                </div>
                <div className="flex xl:hidden pl-2 text-gray font-medium  select-none">
                    товаров: {productsLength}
                </div>
                {products[0] ? (
                    <>
                        <div className="max-w-full mb-3  grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4  gap-4  md:gap-7  ">
                            <ProductLists products={products} />
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <PaginationControls
                                currentPage={currentPage}
                                start={start}
                                end={end}
                            />
                        </Suspense>
                    </>
                ) : (
                    <div className="flex justify-center mt-10 h-full">
                        <p className="text-lg text-gray font-medium">
                            Товары по заданной фильтрации не найдены.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products
