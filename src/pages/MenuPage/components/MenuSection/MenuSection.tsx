import React, { useState } from 'react'
import './MenuSection.scss'
import { MenuElement } from '../../../../components/MenuElement/MenuElement.tsx'
import { useFetchRecipesByMealType } from '../../../../hooks/useFetchRecipesByMealType.tsx'
import { Spinner } from '../../../../components/Spinner/Spinner.tsx'
import { ImageSkeletonAndSpinner } from '../../../../components/ImageSkeletonAndSpinner/ImageSkeletonAndSpinner.tsx'

interface menuProps {
    title: string
    description: string
    reversed?: boolean
    mealType: string
}

export const MenuSection: React.FC<menuProps> = ({
    title,
    description,
    reversed = false,
    mealType,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const { data, isLoading } = useFetchRecipesByMealType(mealType)

    return (
        <div className="menuSection">
            {isLoading ? <Spinner /> : ''}

            <div className="menuTitleContainer">
                <h1 className="menuTitle">{title}</h1>
                <p className="menuDescription">{description}</p>
            </div>
            <div className={`menu ${reversed ? 'reversed' : ''}`}>
                {data?.recipes[0] && (
                    <div className="menuImageSection">
                        {!isImageLoaded && <ImageSkeletonAndSpinner />}
                        <img
                            className="menuImage"
                            src={data.recipes[0].image}
                            alt={data.recipes[0].name}
                            onLoad={() => setIsImageLoaded(true)}
                            style={{
                                opacity: isImageLoaded ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        />
                    </div>
                )}
                <div className="menuListElements">
                    {data?.recipes
                        .slice(0, 3)
                        .map((recipe) => (
                            <MenuElement
                                key={recipe.id}
                                price={20}
                                name={recipe.name}
                                cuisine={recipe.cuisine}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
