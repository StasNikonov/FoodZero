import React from 'react'
import './FeaturesSection.scss'
import { FeaturesSectionElement } from './components/featuresSectionElement/featuresSectionElement.tsx'
import iconFish from '../../../../assets/icons/Icon_fish.png'
import iconCarrot from '../../../../assets/icons/Icon_carrot.png'
import iconLemon from '../../../../assets/icons/Icon_lemon.png'

export const FeaturesSection: React.FC = () => {
    return (
        <div className="featuresSectionContainer">
            <div className="featuresSection">
                <FeaturesSectionElement
                    img={iconFish}
                    title="Premium Quality"
                    description="From farm to fork, we prioritize premium quality in every step. Fresh, seasonal ingredients and expert preparation ensure an exceptional dining experience."
                />
                <FeaturesSectionElement
                    img={iconCarrot}
                    title="Seasonal Vegetables"
                    description="We craft our dishes with the finest seasonal vegetables, ensuring vibrant flavor and the freshest experience in every bite."
                />
                <FeaturesSectionElement
                    img={iconLemon}
                    title="Fresh Fruit"
                    description="Whether served solo or as part of a dish, our fruits add a bright, natural burst of flavor."
                />
            </div>
        </div>
    )
}
