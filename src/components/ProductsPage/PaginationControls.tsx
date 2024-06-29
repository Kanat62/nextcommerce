'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

type Props = {
    currentPage: number
    start: number
    end: number
}
const PaginationControls = ({ currentPage, start, end }: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())

    let maxBtns = 5
    const btns = Array.from({ length: end }, (_, i) => i)

    const next = () => {
        if (currentPage === end) return
        params.set('page', `${currentPage + 1}`)
        router.push(`/products?${params}`)
    }
    const prev = () => {
        if (currentPage === 1) return
        params.set('page', `${currentPage - 1}`)
        router.push(`/products?${params}`)
    }
    const clickedPage = (page: number) => {
        params.set('page', `${page}`)
        router.push(`/products?${params}`)
    }
    if (btns.length === 1) return
    return (
        <div className="mt-2 select-none">
            <Pagination>
                <PaginationContent className="space-x-1">
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={prev}
                            className="rounded-[12px]"
                        />
                    </PaginationItem>

                    {btns.map((i) =>
                        i < maxBtns ? (
                            <PaginationItem
                                key={i}
                                onClick={() => clickedPage(i + 1)}
                            >
                                <PaginationLink
                                    className={
                                        currentPage === i + 1
                                            ? 'bg-primary rounded-[12px] text-white hover:bg-primary hover:text-white'
                                            : ' rounded-[12px]'
                                    }
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ) : (
                            i === maxBtns && (
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )
                        )
                    )}
                    <PaginationItem>
                        <PaginationNext
                            onClick={next}
                            className="rounded-[12px]"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default PaginationControls
