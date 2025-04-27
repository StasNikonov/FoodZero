import React from 'react'
import './OurMenuSection.scss'
import { MenuElement } from '../../../../components/MenuElement/MenuElement.tsx'
import { useFetchAllRecipes } from '../../../../hooks/useFetchAllRecipes.tsx'
import ourMenuBackgroundImg from '../../../../assets/homePage/ourMenuBackgroundImg.png'

export const OurMenuSection: React.FC = () => {
    const { data } = useFetchAllRecipes()

    return (
        <div className="ourMenuSection">
            <img
                className="ourMenuBackgroundImg"
                src={ourMenuBackgroundImg}
                alt="Our menu background image"
            />
            <div className="ourMenuSectionTitle">
                <h1 className="sectionTitle">Our Menu</h1>
                <p className="titleDescription">
                    This is a section of your menu. Give your section a brief
                    description
                </p>
            </div>
            <div className="OurMenuList">
                {data?.recipes
                    .slice(0, 4)
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
    )
}
