import service_1 from '@/utils/imgs/icons/service_1.png'
import service_2 from '@/utils/imgs/icons/service_2.svg'
import service_3 from '@/utils/imgs/icons/service_3.png'
import service_4 from '@/utils/imgs/icons/service_4.svg'
import { IServicesCards } from '../types/type'

export const servicesCards: IServicesCards[] = [
    {
        title: 'Рассрочка',
        subtitle: 'Рассрочка 3/6/9/12',
        img: service_1,
        width: 60,
        height: 60,
    },
    {
        title: 'Гарантия',
        subtitle: 'Мы гарантируем на 1 год',
        img: service_2,
        width: 55,
        height: 55,
    },
    {
        title: 'Trade in',
        subtitle: 'Обнови свой старый телефон на новый',
        img: service_3,
        width: 55,
        height: 68,
    },
    {
        title: 'Доставка',
        subtitle: 'Мы доставляем товары по всему Кыргызстану',
        img: service_4,
        width: 60,
        height: 60,
    },
]
