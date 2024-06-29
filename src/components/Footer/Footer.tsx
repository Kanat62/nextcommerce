import Link from 'next/link'
import { links } from '@/lib/constants/links'
import { getBrands, getCategories } from '@/lib/services/getData'
import Contacts from './Contacts'

const Footer = async () => {
    const categories = await getCategories()
    const brands = await getBrands()

    return (
        <footer className="mt-auto bg-[#111827] text-[#BBB]">
            <div className="container flex  p-10 sm:px-20  gap-y-8 gap-x-14 flex-wrap justify-between   lg:justify-around ">
                <Contacts />
                <ul className="flex  flex-col  gap-1">
                    <h3 className="text-lg font-semibold mb-2">Навигация</h3>

                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.href}
                            className={
                                'font-medium transition duration-100 hover:text-primary'
                            }
                        >
                            {link.name}
                        </Link>
                    ))}
                </ul>
                <ul className="flex  flex-col  gap-1">
                    <h3 className="text-lg font-semibold mb-2">Категории</h3>

                    {categories.map((category) => (
                        <Link
                            href={`/products?category=${category.name}`}
                            key={category._id}
                            className={
                                'font-medium transition duration-100 hover:text-primary'
                            }
                        >
                            {category.name}
                        </Link>
                    ))}
                </ul>
                <ul className="flex  flex-col  gap-1 mr-8 lg:mr-0">
                    <h3 className="text-lg font-semibold mb-2">Бренды</h3>

                    {brands.map((brand) => (
                        <Link
                            href={`/products?brands=${brand.name}`}
                            key={brand._id}
                            className={
                                'font-medium transition duration-100 hover:text-primary'
                            }
                        >
                            {brand.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
