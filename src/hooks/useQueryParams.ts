import { useRouter, useSearchParams } from 'next/navigation'

export function useQueryParams() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())

    const getParam = (key: string) => {
        return params.get(key) || ''
    }
    const setParam = (key: string, value: string) => {
        params.set(key, value)
        router.push(`/products?${params}`)
    }
    const removeParam = (key: string) => {
        params.delete(key)
        router.push(`/products?${params}`)
    }
    const setNewParam = (key: string, value: string) => {
        const params = new URLSearchParams()
        params.set(key, value)
        router.push(`/products?${params}`)
    }
    const getParams = (key: string) => {
        return params.getAll(key).join('')
    }
    const setParams = (key: string, value: string) => {
        const getPrevValues = getParams(key)
        const values = getPrevValues ? getPrevValues + ',' + value : value
        setParam(key, values)
    }
    const removeCurrentParam = (key: string, value: string) => {
        let getPrevValues = getParams(key)
        const newValues = getPrevValues
            .split(',')
            .filter((v) => v !== value)
            .join(',')

        if (newValues.length === 0) {
            removeParam(key)
        } else {
            setParam(key, newValues)
        }
    }

    return {
        getParam,
        setParam,
        removeParam,
        getParams,
        setParams,
        removeCurrentParam,
        setNewParam,
    }
}
