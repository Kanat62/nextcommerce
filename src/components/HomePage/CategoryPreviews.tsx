import Image from 'next/image'
import Link from 'next/link'
import { categoryPreviews } from '@/lib/constants/categoryPreviews'

const CategoryPreviews = () => {
    return (
        <section>
            <h2 className="text-xl md:text-3xl font-semibold mb-5 ml-2 md:mb-8 md:ml-6">
                Категории
            </h2>

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-7">
                {categoryPreviews.map((category) => (
                    <Link
                        key={category.link}
                        href={`/products?${category.link}`}
                        className=" flex flex-col items-center gap-2 pb-2.5 pt-2 lg:py-2.5 bg-card rounded-2xl lg:shadow "
                    >
                        <div className="w-full h-full flex flex-col justify-center items-center p-1">
                            <Image
                                src={category.img}
                                alt={'apple'}
                                placeholder="empty"
                                priority
                                className={
                                    category.width
                                        ? 'w-[60px] md:w-[80px] h-auto'
                                        : 'w-[80px] md:w-[100px] h-auto'
                                }
                            />
                        </div>
                        <h3 className="text-[12px] sm:text-sm xl:text-base  text-center">
                            {category.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoryPreviews
