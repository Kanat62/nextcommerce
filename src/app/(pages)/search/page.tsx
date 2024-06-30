'use client'
import ProductCard from '@/components/ProductsPage/ProductCard'
import { useSearchProducts } from '@/hooks/useSearchProducts'
import { useEffect, useState } from 'react'

type Props = {
    searchParams: {
        q: string
    }
}
export default function SearchPage({ searchParams: q }: Props) {
    const [searchQuery, setSearchQuery] = useState('')
    const { foundProducts } = useSearchProducts(searchQuery)

    useEffect(() => {
        setSearchQuery(decodeURIComponent(q.q || ''))
    }, [q])

    return (
        <div className="mb-10">
            <h2 className="text-xl md:text-3xl font-semibold mb-5 mt-3 ml-2 md:mb-14 md:ml-8">
                Результаты поиска для: {searchQuery}
            </h2>
            <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 sm:gap-7  lg:grid-cols-4 xl:grid-cols-5">
                {foundProducts?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}
