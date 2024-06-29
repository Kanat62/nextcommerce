import { IBrand, ICategory, IProduct } from '@/lib/types/interface'
import Categories from './Filter/Categories'
import Filter from './Filter/Filter'
import Price from './Filter/Price'
import FilterModal from '../Modals/FilterModal'

type Props = {
    products: IProduct[]
    categories: ICategory[]
    brands: IBrand[]
    memories: number[]
}
export default function SideBar({
    products,
    categories,
    brands,
    memories,
}: Props) {
    return (
        <div className="hidden max-w-[320px] w-full h-full xl:flex gap-4 grow  flex-col py-5  px-10 bg-card rounded-2xl shadow select-none ">
            <Categories categories={categories} />
            <Price />
            <Filter products={products} brands={brands} memories={memories} />

            <div className="hidden">
                <FilterModal
                    products={products}
                    categories={categories}
                    brands={brands}
                    memories={memories}
                />
            </div>
        </div>
    )
}
