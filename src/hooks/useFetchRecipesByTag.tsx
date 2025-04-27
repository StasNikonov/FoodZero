import { useEffect, useState } from 'react'
import { getRecipesByTags } from '../api/api.ts'

interface Recipe {
    id: number
    name: string
    image: string
    mealType: string
}

interface RecipeResponse {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

export const useFetchRecipesByTag = (tag: string) => {
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const recipes = await getRecipesByTags(tag)
                setRecipe(recipes as RecipeResponse)
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [tag])

    return { recipe, isLoading, error }
}
