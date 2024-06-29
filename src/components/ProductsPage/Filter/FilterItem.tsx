'use client'
import { Filter } from '@/lib/types/type'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useEffect, useState } from 'react'

type Props = {
    filterOptions: Filter[]
    filterSection: Filter
}

const FilterItem = ({ filterOptions, filterSection }: Props) => {
    const { getParams, setParams, removeCurrentParam } = useQueryParams()

    const getBrands = getParams(filterOptions[0].id)
    const brands = getBrands ? getBrands.split(',') : []
    const getMemories = getParams(filterOptions[1].id)
    const memories = getMemories ? getMemories.split(',') : []
    const allParams = [...brands, ...memories]

    const [selectedParams, setSelectedParams] = useState<string[]>(allParams)

    useEffect(() => {
        setSelectedParams(allParams)
    }, [getBrands, getMemories])

    const handleChange = (
        checked: boolean,
        titleParam: string,
        valueParam: string
    ) => {
        if (checked) {
            setParams(titleParam, valueParam)
        } else {
            removeCurrentParam(titleParam, valueParam)
        }
    }

    const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        if (window.innerWidth < 425) {
            e.currentTarget.classList.toggle('bg-[#d9e2ef]')
        }
        if (window.innerWidth < 1200) {
            const checkbox = e.currentTarget
                .previousElementSibling as HTMLInputElement
            checkbox.click()
        }
    }
    return (
        <div className="flex flex-row items-center xs:items-start xs:flex-col gap-4 px-7 xs:pl-7 overflow-y-auto hide-scrollbar  select-none">
            {filterSection.options?.map((option, optionIdx) => (
                <div
                    key={option.value}
                    className=" flex items-center font-medium "
                >
                    <input
                        id={`filter-${option.value}-${optionIdx}`}
                        type="checkbox"
                        className="min-h-4 min-w-4 hidden xs:inline-block cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) =>
                            handleChange(
                                e.target.checked,
                                filterSection.id,
                                option.value
                            )
                        }
                        checked={selectedParams.includes(option.value)}
                    />
                    <label
                        htmlFor={`filter-${option.value}-${optionIdx}`}
                        className={`w-full h-full xs:ml-3 py-2.5 px-4 border rounded-lg xs:p-0 xs:border-none cursor-pointer text-sm text-gray-600 ${selectedParams.includes(option.value) ? 'bg-[#d9e2ef] xs:bg-inherit' : ''}`}
                        onClick={(e) => handleLabelClick(e)}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default FilterItem
