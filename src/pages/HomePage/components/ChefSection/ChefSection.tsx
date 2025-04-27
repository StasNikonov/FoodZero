import React from 'react'
import './ChefSection.scss'
import chefImg from '../../../../assets/homePage/man-in-black-crew-neck-t-shirt-eating 1.png'
import brownPlateImg from '../../../../assets/homePage/brown-wooden-round-plate-with-food 1.png'
import leaf from '../../../../assets/homePage/Leaf.png'

export const ChefSection: React.FC = () => {
    return (
        <div className="chefSectionContainer">
            <div className="chefSection">
                <div className="chefImgContainer">
                    <img className="chefImg" src={chefImg} alt="Chef image" />
                    <img
                        className="brownPlateImg"
                        src={brownPlateImg}
                        alt="Brown plate image"
                    />
                </div>
                <div className="chefSectionDescription">
                    <h1 className="chefSectionTitle">Excellent cook</h1>
                    <p className="chefSectionTitleDescription">
                        Master the art of cooking with fresh ingredients,
                        creative recipes, and the perfect techniques. Whether
                        you're a beginner or a seasoned chef, there's always
                        something new to learn in the kitchen.
                    </p>
                    <img className="leaf" src={leaf} alt="Leaf image" />
                </div>
            </div>
        </div>
    )
}
