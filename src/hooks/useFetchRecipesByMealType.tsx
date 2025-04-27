import { useEffect, useState } from 'react'
import { getRecipesByMealType } from '../api/api.ts'

interface Recipe {
    id: number
    name: string
    image: string
    cuisine: string
    rating: number
}

interface RecipeResponse {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

export const useFetchRecipesByMealType = (mealType: string) => {
    const [data, setData] = useState<RecipeResponse | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const recipes = await getRecipesByMealType(mealType)
                setData(recipes as RecipeResponse)
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(message)
            } finally {
                setIsLoading(false)
            }
        }

        if (mealType) {
            fetchData()
        }
    }, [mealType])

    return { data, isLoading, error }
}
