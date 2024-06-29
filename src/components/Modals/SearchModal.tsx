'use client'
import React, { useState, useEffect } from 'react'
import { useSearchStore } from '@/lib/store/searchStore'
import { AutoComplete, ConfigProvider, Form, Input } from 'antd'
import { Search, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSearchProducts } from '@/hooks/useSearchProducts'

type IOption = {
    value: string
    id: string
}
const SearchModal = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const activeSearch = useSearchStore((state) => state.isOpen)
    const closeSearch = useSearchStore((state) => state.close)

    const [options, setOptions] = useState<IOption[]>([])
    const [searchValue, setSearchValue] = useState('')

    const { foundProducts } = useSearchProducts(searchValue)

    useEffect(() => {
        setSearchValue('')
        if (activeSearch) {
            window.document.body.style.overflowY = 'hidden'
        } else {
            window.document.body.style.overflowY = 'auto'
        }
    }, [activeSearch])

    const getPanelValue = (searchValue: string) => {
        setOptions([])
        if (searchValue.trim().length < 3) return []

        const filteredProducts = foundProducts?.slice(0, 5).map((product) => ({
            value: `${product.title + ' ' + (product.memory ? (product.memory === 1000 ? '1тб' : product.memory + 'гб') : '')}`,
            id: product._id,
        }))

        setOptions(filteredProducts)
    }

    const onFinish = () => {
        if (!searchValue.trim().length) return

        const productSearchParams = new URLSearchParams(searchParams.toString())
        productSearchParams.set('q', encodeURIComponent(searchValue))
        router.push(`/search?${productSearchParams}`)
        closeSearch()
    }
    const onSelect = (value: string) => {
        const productSearch = options.find(
            (option) => option.value.toLowerCase() === value.toLowerCase()
        )
        if (productSearch) {
            router.push(`/products/${productSearch.id}`)
            closeSearch()
        }
    }
    if (activeSearch) {
        return (
            <div
                className={
                    'fixed inset-0 bottom-0 flex justify-center px-4 pt-8 md:pt-16 z-50 backdrop-blur bg-slate-900/25 transition delay-500 ease-in'
                }
                onClick={closeSearch}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            fontSize: 17,
                            colorBorder: '#fff',
                            colorPrimary: '#fff',
                            colorPrimaryHover: '#fff',
                            colorTextPlaceholder: '#6B7280',
                            colorText: '#000',
                            paddingSM: 20,
                            paddingXS: 20,
                            controlPaddingHorizontal: 20,
                            controlHeight: 40,
                        },
                    }}
                >
                    <Form
                        onFinish={onFinish}
                        className="w-full flex justify-center px-3"
                    >
                        <AutoComplete
                            className="w-full max-w-[430px] h-14  relative shadow-2xl  delay-500"
                            value={searchValue}
                            onChange={(value) => setSearchValue(value)}
                            onClick={(e) => e.stopPropagation()}
                            options={options}
                            onSearch={(value) => getPanelValue(value)}
                            onSelect={onSelect}
                            suffixIcon={
                                !searchValue.length ? (
                                    <Search className="w-5 h-5 md:w-6 md:h-6 text-gray absolute right-2 z-10" />
                                ) : null
                            }
                            autoFocus={true}
                        >
                            <Input
                                autoFocus={true}
                                className="h-14 px-6"
                                allowClear={{
                                    clearIcon: (
                                        <X className="w-6 h-6 md:w-7 md:h-7 relative  text-gray cursor-pointer" />
                                    ),
                                }}
                                placeholder={'Какой товар ищете?'}
                            />
                        </AutoComplete>
                    </Form>
                </ConfigProvider>
            </div>
        )
    }
}

export default SearchModal
