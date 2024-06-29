'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
} from '@/components/ui/sheet'
import { useFilterStore } from '@/lib/store/filterStore'
import { X } from 'lucide-react'
import { IBrand, ICategory, IProduct } from '@/lib/types/interface'
import Categories from '../ProductsPage/Filter/Categories'
import Price from '../ProductsPage/Filter/Price'
import Filter from '../ProductsPage/Filter/Filter'
import { useEffect } from 'react'

type Props = {
    products: IProduct[]
    categories: ICategory[]
    brands: IBrand[]
    memories: number[]
}

export default function FilterModal({
    products,
    categories,
    brands,
    memories,
}: Props) {
    const isOpen = useFilterStore((state) => state.isOpen)
    const closeModal = useFilterStore((state) => state.closeModal)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200 || window.innerWidth <= 425) {
                closeModal()
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isOpen])

    if (isOpen) {
        return (
            <Sheet open={isOpen} onOpenChange={closeModal}>
                <SheetContent
                    side={window.innerWidth < 425 ? 'bottom' : 'right'}
                    id="filter-modal"
                    className="w-full h-full  rounded-[30px] xs:rounded-none overflow-y-auto overflow-x-hidden gap-0 flex flex-col py-4 px-0 xs:py-6  xs:px-8  text-lg  xs:max-w-[300px] md:max-w-[320px] "
                >
                    <SheetHeader className="w-full relative px-10 xs:px-0 mb-4 flex flex-row items-center justify-center">
                        <div className="w-full ml-7 text-center font-semibold">
                            Фильтр
                        </div>

                        <SheetClose asChild>
                            <div className="h-full relative -right-4 xs:-right-0 xs:-top-1 flex items-center transform hover:scale-110  transition delay-75 cursor-pointer">
                                <X className="w-8 h-8" />
                            </div>
                        </SheetClose>
                    </SheetHeader>
                    <Categories categories={categories} />
                    <Price />
                    <Filter
                        products={products}
                        brands={brands}
                        memories={memories}
                    />
                </SheetContent>
            </Sheet>
        )
    }
}
