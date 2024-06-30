import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { getHeroImage } from '@/lib/services/getData'


const Banner = async () => {
    const heroImage = await getHeroImage()
    return (
        <section className="flex flex-col xl:flex-row justify-around gap-7 mb-6  xl:gap-10  lg:mb-14">
            <div className="w-full max-w-lg  mx-auto xl:mx-0 text-center xl:text-start flex  flex-col justify-center mb-6 sm:mb-12 lg:mb-0 lg:w-1/2 xl:py-24  order-last xl:order-first">
                <h1 className="mb-2 text-2xl md:text-3xl font-bold leading-relaxed  xl:text-4xl ">
                    Ваш надежный магазин для покупки iPhone и других смартфонов.
                </h1>
                <p className="mb-6 max-w-md leading-7 text-gray text-base md:text-lg">
                    Мы предлагаем широкий выбор моделей iPhone, от последних
                    новинок до проверенных временем классиков.
                </p>
                <div className="">
                    <Link href="/products">
                        <Button className="text-base p-5  ">
                            Посмотреть все товары
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 xl:mt-0 xl:pb-5">
                <Image
                    src={urlFor(heroImage.image1).url()}
                    alt={'heroImage'}
                    width={500}
                    height={400}
                    priority={true}
                    className="w-[300px] sm:w-[400px] xl:w-[500px]"
                />
            </div>
        </section>
    )
}

export default Banner
