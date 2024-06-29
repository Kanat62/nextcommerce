'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../ui/select'
import { useEffect } from 'react'
import Image from 'next/image'
import filterIcon from '@/utils/imgs/icons/filter.svg'
import { useFilterStore } from '@/lib/store/filterStore'
import { useQueryParams } from '@/hooks/useQueryParams'

type Props = {
    productsLength: number
}

const Sorting = ({ productsLength }: Props) => {
    const { getParam, setParam, removeParam } = useQueryParams()
    const openModal = useFilterStore((state) => state.openModal)
    const SORT_PARAM = 'sort'
    const urlSort = getParam(SORT_PARAM)

    useEffect(() => {
        if (!urlSort) {
            removeParam(SORT_PARAM)
        }
    }, [urlSort])

    const onSelect = (selectedValue: string) => {
        if (selectedValue === 'reset') {
            removeParam(SORT_PARAM)
        } else {
            setParam(SORT_PARAM, selectedValue)
        }
    }
    return (
        <>
            <div className="hidden xl:flex pl-2 text-gray font-medium">
                товаров: {productsLength}
            </div>
            <div
                className=" flex xl:hidden justify-between items-center font-medium text-min gap-2.5 py-2 px-5 cursor-pointer rounded-2xl bg-card shadow select-none"
                onClick={openModal}
            >
                <span>Фильтр</span>
                <Image src={filterIcon} width={24} height={24} alt="" />
            </div>

            <Select onValueChange={onSelect} value={urlSort}>
                <SelectTrigger className="w-[150px]  md:w-[180px]  text-ellipsis py-2 px-1 select-none border-none  bg-card rounded-2xl shadow  font-medium">
                    <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent
                    className="font-medium py-3"
                    ref={(ref) => {
                        if (!ref) return
                        ref.ontouchstart = (e) => {
                            e.preventDefault()
                        }
                    }}
                >
                    <SelectItem value="reset" className="my-2 py-2">
                        По умолчанию
                    </SelectItem>
                    <SelectItem value="priceAsc" className="my-2  py-2 ">
                        По возрастанию цены
                    </SelectItem>
                    <SelectItem value="priceDesc" className=" my-2 py-2 ">
                        По убыванию цены
                    </SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default Sorting
