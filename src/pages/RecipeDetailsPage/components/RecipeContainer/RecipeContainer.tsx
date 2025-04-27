import React from 'react'
import './RecipeContainer.scss'
import { IngredientsAndInstructionsList } from './components/IngredientsAndInstructionsList/IngredientsAndInstructionsList.tsx'

interface recipeProps {
    title?: string
    image?: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    calories?: number
    mealType?: string
}

export const RecipeContainer: React.FC<recipeProps> = ({
    title,
    image,
    cookTimeMinutes = 0,
    prepTimeMinutes = 0,
    mealType,
    calories,
    instructions,
    ingredients,
}) => {
    return (
        <div className="recipeContainer">
            <img className="singleRecipeImg" src={image} alt={title} />
            <div className="rightSideDetails">
                <div className="titleAndMealType">
                    <h1 className="recipeTitle">{title}</h1>
                    <p className="recipeDescription">{mealType}</p>
                </div>
                <div className="cookTimeAndCaloriesContainer">
                    <div className="cookTimeAndCaloriesElement">
                        <p className="cookTimeAndCaloriesTitle">Total Time</p>
                        <p className="cookTimeAndCaloriesValue">
                            {cookTimeMinutes + prepTimeMinutes} minutes
                        </p>
                    </div>
                    <div className="cookTimeAndCaloriesElement">
                        <p className="cookTimeAndCaloriesTitle">Prep Time</p>
                        <p className="cookTimeAndCaloriesValue">
                            {prepTimeMinutes} minutes
                        </p>
                    </div>
                    <div className="cookTimeAndCaloriesElement">
                        <p className="cookTimeAndCaloriesTitle">Cook Time</p>
                        <p className="cookTimeAndCaloriesValue">
                            {cookTimeMinutes} minutes
                        </p>
                    </div>
                    <div className="cookTimeAndCaloriesElement">
                        <p className="cookTimeAndCaloriesTitle">Calories</p>
                        <p className="cookTimeAndCaloriesValue">
                            {calories} calories
                        </p>
                    </div>
                </div>
                <div className="ingredientsAndPreparation">
                    <div className="ingredientsContainer">
                        <h1 className="ingredients">Ingredients</h1>
                        <IngredientsAndInstructionsList
                            ingredientsOrInstructions={ingredients}
                        />
                    </div>
                    <div className="instructionsContainer">
                        <h1 className="instructions">Instructions</h1>
                        <IngredientsAndInstructionsList
                            ingredientsOrInstructions={instructions}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
