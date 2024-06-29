'use client'
import { useState } from 'react'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { options } from '@/lib/constants/installmentOptions'

type Props = {
    price: number
}

const Installment = ({ price }: Props) => {
    const [month, setMonth] = useState('12')
    const amount = Math.round(price / +month)

    const LABEL_STYLE = 'text-base p-2  border rounded-xl cursor-pointer '

    return (
        <div>
            <div className="text-gray mb-2">Рассрочка</div>
            <div className="">
                <div className="text-xl ml-1  mb-3">
                    {amount} <span className="text-lg">cом / в месяц</span>
                </div>
                <RadioGroup
                    onValueChange={(value: string) => setMonth(value)}
                    value={month}
                    className="flex  py-2"
                >
                    {options.map((option) => (
                        <div key={option.value}>
                            <RadioGroupItem
                                value={option.value}
                                id={`r${option.value}`}
                                className="hidden"
                            />
                            <Label
                                htmlFor={`r${option.value}`}
                                className={
                                    month === option.value
                                        ? LABEL_STYLE +
                                          'text-white border-primary bg-primary'
                                        : LABEL_STYLE
                                }
                            >
                                {option.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}

export default Installment
