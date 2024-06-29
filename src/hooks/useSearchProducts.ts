import { getAllProducts } from '@/lib/services/getData'
import { IProduct } from '@/lib/types/interface'
import { useEffect, useState } from 'react'

export function useSearchProducts(searchValue: string) {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllProducts()
            setProducts(data)
        }
        getData()
    }, [])
    const foundProducts = products?.filter(
        (product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            (product.brand &&
                product.brand.toLowerCase().includes(searchValue.toLowerCase()))
    )
    return { foundProducts }
}
