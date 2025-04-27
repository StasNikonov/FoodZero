import { useEffect, useState } from 'react'
import { getAllRecipesTags } from '../api/api.ts'

export const useFetchAllRecipesTags = () => {
    const [data, setData] = useState<string[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const tags = await getAllRecipesTags()
                setData(tags)
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, isLoading, error }
}
