'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cartStore'

export default function CartModal() {
    const cart = useCartStore((state) => state.cart)
    const activeModal = useCartStore((state) => state.isOpen)
    const closeModal = useCartStore((state) => state.closeModal)
    const deleteFromCart = useCartStore((state) => state.deleteFromCart)

    const total = cart.reduce((acum, product) => acum + product.price, 0)

    if (activeModal) {
        return (
            <Sheet open={activeModal} onOpenChange={closeModal}>
                <SheetContent
                    id="cart-modal"
                    className="max-w-md  sm:max-w-[380px] flex flex-col gap-0 "
                >
                    <SheetHeader className="mb-3 flex flex-row justify-between items-center">
                        <SheetTitle className="text-xl">Корзина</SheetTitle>
                        <SheetClose asChild>
                            <div className="relative bottom-2  cursor-pointer">
                                <X className="w-8 h-8" />
                            </div>
                        </SheetClose>
                    </SheetHeader>

                    <ul className="flex flex-col gap-5 xs:py-5 overflow-y-auto">
                        {cart.length < 1 && (
                            <h1 className="text-center">Корзина пуста</h1>
                        )}
                        {cart.map((product) => (
                            <li key={product._id} className="flex ">
                                <div className="overflow-hidden p-2 rounded-sm select-none">
                                    <Image
                                        src={product.primary_image}
                                        width={65}
                                        height={75}
                                        alt="apple"
                                        // className='w-auto h-auto'
                                    />
                                </div>

                                <div className="ml-3 text-min  py-2 flex flex-1 justify-between">
                                    <div className="flex flex-col font-semibold">
                                        <h3 className="">{product.title}</h3>
                                        <h3 className="text-gray-700">
                                            {product.brand}
                                        </h3>
                                        <h4 className=" mt-auto">
                                            {product.price}c
                                        </h4>
                                    </div>
                                    <div className="ml-2 flex items-center">
                                        <div
                                            className="p-1 cursor-pointer"
                                            onClick={() =>
                                                deleteFromCart(product._id)
                                            }
                                        >
                                            <X className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-gray-200  sm:px-6">
                        <div className="flex gap-3 font-semibold text-gray-900">
                            Итого: <span>{!total ? '0c' : total + 'c'}</span>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        )
    }
}
