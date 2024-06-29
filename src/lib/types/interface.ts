export interface IProduct {
    _id: string
    title: string
    primary_image: any
    description: string
    price: number
    in_stock: string
    category: string
    memory?: number
    brand?: string
    other_images?: any
}

export interface ICategory {
    _id: string
    name: string
}
export interface IBrand {
    _id: string
    name: string
}
