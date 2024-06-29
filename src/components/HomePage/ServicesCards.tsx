'use client'
import { servicesCards } from '@/lib/constants/servicesCards'
import Image from 'next/image'
import Link from 'next/link'

const ServicesCards = () => {
    return (
        <section>
            <h2 className="text-xl md:text-3xl font-semibold ml-2 mb-8 md:ml-8">
                Наши услуги
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 font-medium">
                {servicesCards.map((service, index) => (
                    <Link href="/our-services" key={index}>
                        <div className="w-full h-full flex flex-col justify-center items-center gap-3 lg:gap-5 px-4 py-7 lg:p-4 bg-card rounded-3xl lg:shadow">
                            <div className="flex justify-center">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={service.width}
                                    height={service.height}
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg sm:text-xl mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-min sm:text-base text-gray">
                                    {service.subtitle}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ServicesCards
