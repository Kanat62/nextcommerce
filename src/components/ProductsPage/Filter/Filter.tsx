'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { IBrand, IProduct } from '@/lib/types/interface'
import FilterItem from './FilterItem'
import { Filter as FilterState } from '@/lib/types/type'
import { useMemo, useState } from 'react'

type Props = {
    products: IProduct[]
    brands: IBrand[]
    memories: number[]
}

const Filter = ({ products, brands, memories }: Props) => {
    const filterOptions = useMemo(() => {
        const brandOptions = brands?.map((brand) => ({
            value: brand.name,
            label: brand.name,
        }))

        const memoryOptions = memories?.map((memory) => ({
            value: `${memory}`,
            label: `${memory === 1000 ? '1тб' : `${memory}гб`}`,
        }))

        return [
            {
                id: 'brands',
                name: 'Бренды',
                options: brandOptions,
            },
            {
                id: 'memories',
                name: 'Объем памяти',
                options: memoryOptions,
            },
        ]
    }, [brands, memories])

    return (
        <div className="">
            {filterOptions?.map((filterSection: FilterState) => (
                <Disclosure
                    as="div"
                    key={filterSection.id}
                    className="relative  mt-3 xs:py-3  xs:px-0"
                    defaultOpen
                >
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full items-center justify-between bg-card py-3 px-5  xs:p-0"
                                onClick={(e) => {
                                    if (window.innerWidth < 425) {
                                        e.preventDefault()
                                    }
                                }}
                            >
                                <span className="font-medium xs:font-semibold">
                                    {filterSection.name}
                                </span>
                                <span className="ml-6 hidden xs:flex items-center">
                                    {open ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-1 xs:py-3">
                                <FilterItem
                                    filterOptions={filterOptions}
                                    filterSection={filterSection}
                                />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}

export default Filter
