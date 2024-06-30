import CategoryPreviews from '@/components/HomePage/CategoryPreviews'
import Banner from '@/components/HomePage/Banner'
import ServicesCards from '@/components/HomePage/ServicesCards'
import ProductPreviews from '@/components/HomePage/ProductPreviews'

export const dynamic = 'force-dynamic'

export default function Home() {
    return (
        <div className="flex flex-col gap-8 lg:gap-14 mb-10 sm:mb-16 lg:mb-20 ">
            <Banner />

            <CategoryPreviews />
            <ProductPreviews />
            <ServicesCards />
        </div>
    )
}
