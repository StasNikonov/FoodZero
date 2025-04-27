import { useEffect, useState } from 'react'
import { getSingleRecipe } from '../api/api.ts'

interface Recipe {
    id: number
    name: string
    image: string
    ingredients: []
    instructions: []
    prepTimeMinutes: number
    cookTimeMinutes: number
    caloriesPerServing: number
    mealType: string
}

export const useFetchSingleRecipe = (id: number) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const recipes = await getSingleRecipe(id)
                setRecipe(recipes as Recipe)
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id])

    return { recipe, isLoading, error }
}
