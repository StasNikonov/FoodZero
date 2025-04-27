import { fetchData } from './apiUtils.ts'

export const getAllRecipes = () => fetchData('/recipes')

export const getSingleRecipe = (id: number) => fetchData(`/recipes/${id}`)

export const getRecipesByMealType = (mealType: string) =>
    fetchData(`/recipes/meal-type/${mealType}`)

export const getAllRecipesTags = () => fetchData<string[]>('/recipes/tags')

export const getRecipesByTags = (tag: string) =>
    fetchData(`/recipes/tag/${tag}`)
