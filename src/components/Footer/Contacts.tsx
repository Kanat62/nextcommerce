'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Clock10, MapPin, Phone } from 'lucide-react'
import whatsappIcon from '@/utils/imgs/icons/whatsapp.svg'
import instagramIcon from '@/utils/imgs/icons/instagram.svg'
import {
    LINK_INSTAGRAM,
    LINK_PHONE,
    LINK_WHATSAPP,
    PHONE_NUMBER,
    STORE_ADDRESS,
    STORE_HOURS,
} from '../../../config'

const Contacts = () => {
    return (
        <div className="flex  flex-col gap-3 mb-1 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Контакты</h3>
            <div className="flex">
                <MapPin size={24} strokeWidth={1.5} />
                <span className="ml-2">{STORE_ADDRESS}</span>
            </div>
            <div className="flex ml-0.5">
                <Clock10 size={22} strokeWidth={1.5} />
                <span className="ml-2">{STORE_HOURS}</span>
            </div>
            <Link href={LINK_PHONE}>
                <div className="flex ml-1">
                    <Phone size={20} strokeWidth={1.5} />
                    <span className="ml-2">{PHONE_NUMBER}</span>
                </div>
            </Link>
            <div className="text-white flex items-center gap-5 ml-10 mt-1">
                <Link
                    href={LINK_WHATSAPP}
                    className="transform hover:scale-110  transition "
                >
                    <Image
                        src={whatsappIcon}
                        width={45}
                        height={45}
                        alt="whatsapp"
                    />
                </Link>
                <Link
                    href={LINK_INSTAGRAM}
                    className="transform hover:scale-110  transition "
                >
                    <Image
                        src={instagramIcon}
                        width={35}
                        height={35}
                        alt="instagram"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Contacts
