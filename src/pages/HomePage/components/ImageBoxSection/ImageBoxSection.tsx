import React from 'react'
import './ImageBoxSection.scss'
import imageBoxLeftImg from '../../../../assets/homePage/imageBoxLeftElement.png'
import imageBoxRightImg from '../../../../assets/homePage/imageBoxRightElement.png'

export const ImageBoxSection: React.FC = () => {
    return (
        <div className="imageBoxSectionContainer">
            <div className="imageBoxSection">
                <div className="imageBoxLeftElement">
                    <img
                        className="imageBoxLeftImg"
                        src={imageBoxLeftImg}
                        alt="Soup image"
                    />
                    <div className="imageDescription">
                        <h1 className="imageDescriptionTitle">
                            Start to plan your diet today
                        </h1>
                        <p>
                            Fuel your body with the right nutrients and feel the
                            difference every day.
                        </p>
                    </div>
                </div>
                <div className="imageBoxRightElement">
                    <p>
                        Small changes in your meals can lead to big results —
                        start now!
                    </p>
                    <img
                        className="imageBoxRightImg"
                        src={imageBoxRightImg}
                        alt="Spices image"
                    />
                </div>
            </div>
        </div>
    )
}
