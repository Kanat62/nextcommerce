import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { getHeroImage } from '@/lib/services/getData'

import hero from '@/utils/imgs/apple.jpg'
import apple from '@/utils/imgs/hero.png'
import iphones from '@/utils/imgs/iphones.png'

const Banner = async () => {
    const heroImage = await getHeroImage()
    return (
        <section className="mb-8 flex flex-wrap justify-around gap-10 md:mb-14">
            <div className="w-full max-w-lg  flex  flex-col justify-center mb-6 sm:mb-12 lg:mb-0 lg:w-1/2 lg:py-24">
                <h1 className="mb-2 text-4xl font-bold leading-relaxed  sm:text-4xl ">
                    Ваш надежный магазин для покупки iPhone и других смартфонов.
                </h1>
                <p className="mb-6 max-w-md leading-7 text-gray text-lg">
                    Мы предлагаем широкий выбор моделей iPhone, от последних
                    новинок до проверенных временем классиков. Наши телефоны
                    проверены и гарантированно работают.
                </p>
                <div className="">
                    <Link href="/products">
                        <Button className="text-lg p-6 ">
                            Посмотреть все товары
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-5">
                <Image
                    src={iphones}
                    alt={'heroImage'}
                    width={500}
                    height={400}
                    priority={true}
                    // className="w-[200px] h-[500px]"
                />
            </div>
        </section>
    )
}

export default Banner
