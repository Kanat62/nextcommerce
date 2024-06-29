import { Clock10, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import {
    LINK_PHONE,
    PHONE_NUMBER,
    STORE_ADDRESS,
    STORE_HOURS,
} from '../../../../config'

const About = () => {
    return (
        <div className="mb-14">
            <div className="text-center mb-14">
                <h1 className="text-3xl md:text-4xl font-medium mb-5">О нас</h1>
                <h2 className="max-w-[640px] text-start sm:text-center mx-auto mb-10 text-lg md:text-xl text-gray font-medium">
                    Asia Store — официальный магазин техники Apple со статусом
                    Apple Authorized Reseller и официальный реселлер Garmin в
                    Кыргызстане, а также официальный дистрибьютор JBL & Harman
                    Kardon и умных устройств от Яндекс.
                </h2>
            </div>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-medium mb-7 lg:mb-14">
                    Наш адрес
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12">
                    <div className=" flex flex-col gap-4 bg-card shadow rounded-3xl px-5 xs:px-10  py-7 lg:mt-10 md:text-lg font-medium text-gray">
                        <div className="flex">
                            <MapPin size={26} strokeWidth={1.5} />
                            <span className="ml-2">{STORE_ADDRESS}</span>
                        </div>
                        <div className="flex ml-0.5">
                            <Clock10 size={24} strokeWidth={1.5} />
                            <span className="ml-2">{STORE_HOURS}</span>
                        </div>
                        <Link href={LINK_PHONE}>
                            <div className="flex ml-1">
                                <Phone size={22} strokeWidth={1.5} />
                                <span className="ml-2">{PHONE_NUMBER}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full sm:w-[550px] h-[450px] overflow-hidden flex justify-center items-center relative  border  rounded-3xl ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.9297337019666!2d74.61386741628567!3d42.875810255342465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cd8219b7%3A0xfe396f134a5514e0!2z0KbRg9C8LCAwLdGN0YLQsNC2LCDQntGC0LTQtdC7IEctNTI!5e0!3m2!1sru!2skg!4v1717187160493!5m2!1sru!2skg"
                            className="w-full min-w-[102%] sm:min-w-[555px] h-[455px] "
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
