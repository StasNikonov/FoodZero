import React from 'react'
import './IngredientsAndInstructionsList.scss'

interface IngredientsAndInstructionsListProps {
    ingredientsOrInstructions: string[]
}

export const IngredientsAndInstructionsList: React.FC<
    IngredientsAndInstructionsListProps
> = ({ ingredientsOrInstructions }) => {
    if (!ingredientsOrInstructions || ingredientsOrInstructions.length === 0)
        return <p>No ingredients</p>

    return (
        <ol>
            {ingredientsOrInstructions.map((item, index) => (
                <li className="listElement" key={index}>
                    {item}
                </li>
            ))}
        </ol>
    )
}
