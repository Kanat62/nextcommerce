export type ProductsParams = {
    page: string
    limitItems: number
    start: number
    category: string
    minPrice: number
    maxPrice: number
    sort: string
    brands: string
    memories: string
}

export type Option = {
    value: string
    label: string
}

export type Filter = {
    id: string
    name: string
    options: Option[]
}

export type ILink = {
    name: string
    href: string
}

export type ICategoryPreviews = {
    title: string
    img: any
    link: string
    width?: number
}
export type IServicesCards = {
    title: string
    subtitle: string
    img: any
    width: number
    height: number
}
