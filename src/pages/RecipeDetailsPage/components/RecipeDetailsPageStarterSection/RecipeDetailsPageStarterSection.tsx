import React from 'react'
import './RecipeDetailsPageStarterSection.scss'

interface Props {
    title?: string
}

export const RecipeDetailsPageStarterSection: React.FC<Props> = ({ title }) => {
    return (
        <div className="recipeDetailsPageStarterSection">
            <h1 className="recipeDetailsTitle">{title}</h1>
        </div>
    )
}
