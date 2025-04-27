import React from 'react'
import './featuresSectionElement.scss'

interface FeaturesSectionProps {
    img: string
    title: string
    description: string
}

export const FeaturesSectionElement: React.FC<FeaturesSectionProps> = ({
    img,
    title,
    description,
}) => {
    return (
        <div className="featuresSectionElement">
            <div className="featuresImgContainer">
                <img className="featuresImg" src={img} alt={title} />
            </div>
            <h1 className="featuresTitle">{title}</h1>
            <p className="featuresDescription">{description}</p>
        </div>
    )
}
