import React from 'react'
import './RecipeDetailsPage.scss'
import { useParams } from 'react-router-dom'
import { useFetchSingleRecipe } from '../../hooks/useFetchSingleRecipe.tsx'
import { RecipeDetailsPageStarterSection } from './components/RecipeDetailsPageStarterSection/RecipeDetailsPageStarterSection.tsx'
import { Header } from '../../components/Header/Header.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'
import { RecipeContainer } from './components/RecipeContainer/RecipeContainer.tsx'

export const RecipeDetailsPage: React.FC = () => {
    const { id } = useParams()
    const { recipe } = useFetchSingleRecipe(Number(id))

    return (
        <div className="recipeDetailsPage">
            <Header />
            <RecipeDetailsPageStarterSection title={recipe?.name} />
            <RecipeContainer
                title={recipe?.name}
                mealType={recipe?.mealType}
                image={recipe?.image}
                cookTimeMinutes={recipe?.cookTimeMinutes as number}
                prepTimeMinutes={recipe?.prepTimeMinutes as number}
                calories={recipe?.caloriesPerServing}
                ingredients={recipe?.ingredients as any}
                instructions={recipe?.instructions as any}
            />
            <Footer />
        </div>
    )
}
