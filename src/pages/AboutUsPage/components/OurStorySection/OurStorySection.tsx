import React from 'react'
import './OurStorySection.scss'
import ourStoryTitleImage from '../../../../assets/aboutPage/ourStoryTitleImage.png'
import tomatoImage from '../../../../assets/aboutPage/Tomato.png'

export const OurStorySection: React.FC = () => {
    return (
        <div className="ourStorySection">
            <img className="tomatoImage" src={tomatoImage} alt="Tomato image" />
            <div className="ourStoryTitleContainer">
                <h1 className="ourStoryTitle">Our Story</h1>
                <p className="ourStoryTitleDescription">
                    Founded by a team of food lovers and nutrition enthusiasts,
                    FoodZero started as a small idea in a home kitchen — to make
                    healthy eating accessible, delicious, and exciting. With
                    backgrounds in culinary arts and wellness, we set out to
                    create a restaurant where wholesome ingredients meet bold
                    flavors. Today, FoodZero is a place where mindful eating,
                    sustainability, and comfort come together in every dish.
                </p>
            </div>
            <img
                className="ourStoryTitleImage"
                src={ourStoryTitleImage}
                alt="Our story title image"
            />
        </div>
    )
}
