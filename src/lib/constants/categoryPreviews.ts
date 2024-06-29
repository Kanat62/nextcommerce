import apple from '@/utils/imgs/categories/apple.webp'
import xiaomi from '@/utils/imgs/categories/xiaomi.png'
import samsung from '@/utils/imgs/categories/samsung.png'
import watch from '@/utils/imgs/categories/watch.webp'
import airpods from '@/utils/imgs/categories/airpods.png'
import accessories from '@/utils/imgs/categories/accessories.webp'
import { ICategoryPreviews } from '../types/type'

export const categoryPreviews: ICategoryPreviews[] = [
    {
        title: 'Iphone',
        img: apple,
        link: 'brands=Apple',
    },
    {
        title: 'Xiaomi',
        img: xiaomi,
        link: 'brands=Xiaomi',
        width: 90,
    },
    {
        title: 'Samsung',
        img: samsung,
        link: 'brands=Samsung',
    },
    {
        title: 'Apple Watch',
        img: watch,
        link: 'category=Смарт-часы',
    },
    {
        title: 'Airpods',
        img: airpods,
        link: 'category=Беспроводные-наушники',
    },
    {
        title: 'Аксесуары',
        img: accessories,
        link: 'category=Аксесуары',
    },
]
