'use client'
import { ConfigProvider, Slider } from 'antd'
import { Button } from '../../ui/button'
import { useEffect, useState } from 'react'
import { useQueryParams } from '@/hooks/useQueryParams'

const Price = () => {
    const { setParam, getParam, removeParam } = useQueryParams()
    const maxValue = 99999
    const minValue = 0

    const minPrice = getParam('minPrice')
    const maxPrice = getParam('maxPrice')

    const [sliderValues, setSliderValues] = useState([minValue, maxValue])

    const onChange = (values: number[]) => {
        setSliderValues(values)
    }
    useEffect(() => {
        if (minPrice && maxPrice) {
            setSliderValues([+minPrice, +maxPrice])
        } else {
            resetFilter()
        }
    }, [minPrice, maxPrice])

    const fliterByPrice = () => {
        setParam('minPrice', `${sliderValues[0]}`)
        setParam('maxPrice', `${sliderValues[1]}`)
    }

    const resetFilter = () => {
        setSliderValues([minValue, maxValue])
        removeParam('minPrice')
        removeParam('maxPrice')
    }
    return (
        <div className="flex flex-col gap-2 mt-4 xs:mt-0 px-5 xs:p-0">
            <div className="font-medium xs:font-semibold mb-1 xs:my-3">
                Цена
            </div>
            <div className="flex justify-between items-center text-[15px] font-medium px-4 xs:p-0">
                <div className="border px-3 py-1 rounded-lg text-nowrap">
                    {sliderValues[0]} cом
                </div>
                <div className="w-full border-b"></div>
                <div className="border px-3 py-1 rounded-lg  text-nowrap">
                    {sliderValues[1]} cом
                </div>
            </div>
            <div className="px-5  xs:p-0">
                <ConfigProvider
                    theme={{
                        components: {
                            Slider: {
                                handleLineWidth: 4,
                                handleLineWidthHover: 4,
                                handleSize: 12,
                                handleSizeHover: 12,
                                railSize: 5,
                                handleColor: '#708090',
                                trackBg: '#708090',
                                dotActiveBorderColor: '#708090',
                                handleActiveColor: '#708090',
                                trackHoverBg: '#708090',
                                dotBorderColor: '#708090',
                            },
                        },
                        token: {
                            colorPrimaryBorderHover: '#708090',
                        },
                    }}
                >
                    <Slider
                        range
                        tooltip={{ formatter: null }}
                        min={minValue}
                        max={maxValue}
                        step={1000}
                        value={sliderValues}
                        onChange={onChange}
                    />
                </ConfigProvider>
            </div>

            <div className="flex justify-between gap-5 px-4  xs:p-0">
                <Button
                    variant="outline"
                    className="border-[#b2b1b1] h-9 bg-transparent active:bg-[#f4f4f5]"
                    onClick={resetFilter}
                >
                    Сбросить
                </Button>
                <Button
                    variant="outline"
                    className="border-blue-300 h-9 bg-transparent active:bg-[#f4f4f5]"
                    onClick={fliterByPrice}
                >
                    Применить
                </Button>
            </div>
        </div>
    )
}

export default Price
