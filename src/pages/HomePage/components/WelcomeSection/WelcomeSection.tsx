import React from 'react'
import welcomeSectionImage from '../../../../assets/homePage/welcomeSectionImage.png'
import spices1 from '../../../../assets/homePage/spices1.png'
import spices2 from '../../../../assets/homePage/spices2.png'
import spices3 from '../../../../assets/homePage/spices3.png'
import './WelcomeSection.scss'

export const WelcomeSection: React.FC = () => {
    return (
        <div className="welcomeSectionContainer">
            <div className="welcomeSection">
                <div className="sectionTitle">
                    <h1 className="title">
                        Healthy Eating
                        <br />
                        is important
                        <br />
                        part of lifestyle
                    </h1>
                    <p className="description">
                        Discover the benefits of nourishing your body with
                        <br />
                        fresh, balanced meals — because a healthy outside starts
                        <br />
                        from the inside.
                    </p>
                    <p className="scroll">Scroll----------------------</p>
                </div>
                <div className="images">
                    <img
                        className="welcomeSectionImage"
                        src={welcomeSectionImage}
                        alt="Welcome section image"
                    />
                    <div className="spicesList">
                        <img
                            className="spicesListElement"
                            src={spices1}
                            alt="spices 1"
                        />
                        <img
                            className="spicesListElement"
                            src={spices2}
                            alt="spices 2"
                        />
                        <img
                            className="spicesListElement"
                            src={spices3}
                            alt="spices 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
