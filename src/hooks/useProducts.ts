import { ProductsParams } from '@/lib/types/type'
import { getAllProducts } from '@/lib/services/getData'

export async function useProducts({
    start,
    limitItems,
    category,
    minPrice,
    maxPrice,
    sort,
    brands,
    memories,
}: ProductsParams) {
    let products = await getAllProducts()

    if (category) {
        const categoryUrl = category.split('-').join(' ')
        products = products.filter(
            (product) => product.category === categoryUrl
        )
    }
    if (sort) {
        products = products.sort((a, b) => {
            if (sort === 'priceAsc') {
                return a.price - b.price
            }
            return b.price - a.price
        })
    }
    if (minPrice && maxPrice) {
        products = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        )
    }
    if (brands) {
        products = brands.split(',').flatMap((item) => {
            return products.filter((product) => product.brand === item)
        })
    }
    if (memories) {
        products = memories.split(',').flatMap((item) => {
            return products.filter((product) => product.memory === +item)
        })
    }

    let productsLength
    productsLength = products.length
    products = products.slice(start, start + limitItems)
    return {
        products,
        productsLength,
    }
}
