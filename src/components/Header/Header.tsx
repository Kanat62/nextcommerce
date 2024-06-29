'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Menu, Search, ShoppingBag, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { links } from '@/lib/constants/links'
import { useCartStore } from '@/lib/store/cartStore'
import { useNavbarStore } from '@/lib/store/navbarStore'
import { useSearchStore } from '@/lib/store/searchStore'
import { useLoginStore } from '@/lib/store/loginStore'

const Header = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)

    const openSearch = useSearchStore((state) => state.open)
    const openCart = useCartStore((state) => state.openModal)
    const openLogin = useLoginStore((state) => state.open)
    const cart = useCartStore((state) => state.cart)
    const activeModal = useNavbarStore((state) => state.openModal)

    const scrollPos = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const visible = scrollPos.current > currentScrollPos
            setIsVisible(visible)
            scrollPos.current = currentScrollPos
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`w-full  sticky top-0   z-40 bg-background border-b select-none  transition-all duration-200 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            } `}
        >
            <div className="container flex items-center justify-between  px-[14px] py-4 sm:px-6 md:p-4  ">
                <Link href={'/'}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Next<span className="text-primary">Commerce</span>
                    </h1>
                </Link>

                <nav className="hidden gap-12 xl:flex ">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.href}
                            className={
                                link.href === pathname
                                    ? 'text-primary text-lg font-medium'
                                    : 'text-lg font-medium transition duration-100 hover:text-primary'
                            }
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-1 md:gap-2 divide-x ">
                    <Button
                        variant={'outline'}
                        className="flex flex-col border-none px-2  rounded-2xl"
                        onClick={openSearch}
                    >
                        <Search className="w-6 h-6" />
                    </Button>
                    <Button
                        variant={'outline'}
                        className="flex relative border-none p-2 rounded-2xl "
                        onClick={openCart}
                    >
                        {cart.length > 0 ? (
                            <span className="w-[18px] h-[18px]  absolute top-0 right-0 flex justify-center items-center text-[12px] text-white  bg-red-500 rounded-full">
                                {cart.length}
                            </span>
                        ) : null}

                        <ShoppingBag className="w-6 h-6" />
                    </Button>
                    <Button
                        variant={'outline'}
                        className="hidden xl:flex  border-none p-2 rounded-2xl "
                        onClick={openLogin}
                    >
                        <UserRound className="w-6 h-6" />
                    </Button>

                    <Button
                        variant={'outline'}
                        className="xl:hidden flex flex-col  border-none  rounded-2xl p-1"
                        onClick={activeModal}
                    >
                        <Menu className="w-7 h-7 md:w-8 md:h-8" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
