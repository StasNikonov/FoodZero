import React from 'react'
import './MenuElement.scss'

interface MenuElementProps {
    price: number
    name: string
    cuisine: string
}

export const MenuElement: React.FC<MenuElementProps> = ({
    price,
    name,
    cuisine,
}) => {
    return (
        <div className="menuElement">
            <div className="priceContainer">
                <p className="price">${price}</p>
            </div>
            <div className="descriptionContainer">
                <h1 className="mealName">{name}</h1>
                <p className="mealCuisine">{cuisine}</p>
            </div>
        </div>
    )
}
