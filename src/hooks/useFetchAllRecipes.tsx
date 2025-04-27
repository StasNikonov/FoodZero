import { useEffect, useState } from 'react'
import { getAllRecipes } from '../api/api'

interface Recipe {
    id: number
    name: string
    cuisine: string
    rating: number
}

interface RecipeResponse {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

export const useFetchAllRecipes = () => {
    const [data, setData] = useState<RecipeResponse | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const recipes = await getAllRecipes()
                setData(recipes as RecipeResponse)
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
