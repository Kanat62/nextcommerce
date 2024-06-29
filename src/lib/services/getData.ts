import { client } from '@/lib/sanity'
import { IBrand, ICategory, IProduct } from '@/lib/types/interface'

export const getAllProducts = async (): Promise<IProduct[]> => {
    const query = `*[_type == "product"] | order(_createdAt desc)    {
        _id,
        title,
        "primary_image": primary_image.asset->url,
        price,
        memory,
        in_stock,
        "category": category->name,
        "brand": brand->name,
      }`
    const data = await client.fetch(query)
    return data
}
export const getProductById = async (id: string): Promise<IProduct> => {
    const query = `*[_type == "product" && _id == "${id}"][0] {
        _id,
        title,
        "primary_image": primary_image.asset->url,
        price,
        memory,
        in_stock,
        "category": category->name,
        "brand": brand->name,
        description
      }`
    const data = await client.fetch(query)
    return data
}

export const getCategories = async (): Promise<ICategory[]> => {
    const query = `*[_type == 'category']{
        name,
        _id
    }`
    const data = await client.fetch(query)
    return data
}

export const getBrands = async (): Promise<IBrand[]> => {
    const query = `*[_type == 'brand'] | order(_createdAt asc) {
        name,
        _id
    }`
    const data = await client.fetch(query)
    return data
}
export const getHeroImage = async () => {
    const query = "*[_type == 'heroImage']"
    const data = await client.fetch(query)
    return data[0]
}

export const getMemories = async (): Promise<number[]> => {
    const query = `*[_type == "product" && category->name == "Смартфоны"] | order(_createdAt desc) {
            _id,
            title,
            "primary_image": primary_image.asset->url,
            price,
            memory,
            in_stock,
            "category": category->name,
            "brand": brand->name,
          }`
    const smartphones: IProduct[] = await client.fetch(query)
    const uniqueMemories = Array.from(
        new Set(smartphones.map((product) => product.memory))
    )
        .filter((memory): memory is number => memory !== undefined)
        .sort((a, b) => b - a)

    return uniqueMemories
}
