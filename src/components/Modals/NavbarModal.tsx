'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Phone, X } from 'lucide-react'
import Link from 'next/link'
import { links } from '@/lib/constants/links'
import { usePathname } from 'next/navigation'
import { useNavbarStore } from '@/lib/store/navbarStore'
import Image from 'next/image'
import whatsappIcon from '@/utils/imgs/icons/whatsapp_black.svg'
import { useEffect } from 'react'
import { LINK_PHONE, LINK_WHATSAPP } from '../../../config'
import { useLoginStore } from '@/lib/store/loginStore'

export default function NavbarModal() {
    const pathname = usePathname()

    const isOpen = useNavbarStore((state) => state.isOpen)
    const closeModal = useNavbarStore((state) => state.closeModal)
    const openLogin = useLoginStore((state) => state.open)

    const handleClose = () => {
        setTimeout(() => {
            closeModal()
        }, 300)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                closeModal()
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [closeModal])
    if (isOpen) {
        return (
            <Sheet open={isOpen} onOpenChange={closeModal}>
                <SheetContent
                    id="navbar-modal"
                    className="w-full gap-0 flex flex-col py-6 px-4 md:px-6 text-lg max-w-[270px] sm:max-w-[300px] md:max-w-[320px] "
                >
                    <SheetHeader className="mb-7 flex flex-row justify-end items-center">
                        <SheetClose asChild>
                            <div className="transform hover:scale-110  transition delay-75 cursor-pointer">
                                <X className="w-8 h-8" />
                            </div>
                        </SheetClose>
                    </SheetHeader>

                    <ul className="flex flex-col items-center gap-2 sm:gap-3 mb-7">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleClose}
                                className={
                                    link.href === pathname
                                        ? 'w-full text-primary  text-center  py-2.5  font-medium transition duration-100  bg-accent rounded-xl'
                                        : 'w-full text-center  py-2.5   font-medium transition duration-100 hover:text-primary hover:bg-accent rounded-xl'
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                    <div className="w-full flex flex-col items-center gap-5">
                        <Link href={LINK_PHONE}>
                            <Button
                                variant={'outline'}
                                className="bg-[#f4f4f5] border-none w-[170px] h-[45px] rounded-lg  text-base font-medium"
                                onClick={handleClose}
                            >
                                <Phone strokeWidth={1.75} size={21} />
                                <span className="ml-2">Позвонить</span>
                            </Button>
                        </Link>
                        <Link href={LINK_WHATSAPP}>
                            <Button
                                variant={'outline'}
                                className="bg-[#f4f4f5] border-none w-[170px] h-[45px] rounded-lg  text-base font-medium"
                                onClick={handleClose}
                            >
                                <Image
                                    src={whatsappIcon}
                                    width={25}
                                    height={25}
                                    alt=""
                                ></Image>
                                <span className="ml-2">Whatsapp</span>
                            </Button>
                        </Link>
                        <Button
                            variant={'outline'}
                            className=" bg-[#f4f4f5] border-none w-[170px] h-[45px] rounded-lg  text-base font-medium"
                            onClick={() => {
                                handleClose()
                                openLogin()
                            }}
                        >
                            Войти
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        )
    }
}
