'use client'
import { useQueryParams } from '@/hooks/useQueryParams'
import { ICategory } from '@/lib/types/interface'
import { useState } from 'react'

type Props = {
    categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
    const { getParam, setNewParam } = useQueryParams()
    const CATEGORY_PARAM = 'category'
    const urlCategory = getParam(CATEGORY_PARAM)
    const [selectedCategory, setSelectedCategory] = useState(
        urlCategory.split('-').join(' ')
    )

    const handleClick = (category: string) => {
        setSelectedCategory(category)
        const categoryUrl = category.split(' ').join('-')
        setNewParam(CATEGORY_PARAM, categoryUrl)
    }

    const CATEGORY_STYLE =
        'font-medium cursor-pointer text-nowrap rounded-3xl py-3 px-4 xs:p-0 '

    return (
        <div className=" w-full flex flex-col gap-3 ">
            <div className="font-medium px-5 xs:font-semibold xs:px-0">
                Категории
            </div>
            <ul className="w-full flex xs:flex-col  overflow-y-auto hide-scrollbar  px-5 xs:px-0  gap-2.5 xs:pl-7 text-sm ">
                {categories.map((category) => (
                    <li
                        key={category._id}
                        className={
                            selectedCategory === category.name
                                ? CATEGORY_STYLE +
                                  'bg-[#161c2d] text-white xs:bg-transparent xs:text-primary '
                                : CATEGORY_STYLE +
                                  'bg-[#f4f4f5] xs:hover:text-primary xs:duration-100 xs:ease-in  xs:bg-transparent'
                        }
                        onClick={() => handleClick(category.name)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
