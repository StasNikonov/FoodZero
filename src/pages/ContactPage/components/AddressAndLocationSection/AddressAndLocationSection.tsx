import React from 'react'
import './AddressAndLocationSection.scss'
import yellowFruit from '../../../../assets/contactPage/yellowFruitOnWhiteTableCloth.png'
import locationImg from '../../../../assets/contactPage/locationImg.png'
import orangeImg from '../../../../assets/contactPage/Orange.png'

export const AddressAndLocationSection: React.FC = () => {
    return (
        <div className="addressAndLocationSection">
            <img className="orangeImg" src={orangeImg} alt="Orange image" />
            <div className="contactsContainer">
                <img
                    className="yellowFruitImg"
                    src={yellowFruit}
                    alt="Yellow fruit image"
                />
                <div className="contactsInformation">
                    <p>We can be contacted via</p>
                    <p>
                        email{' '}
                        <span style={{ color: '#9CAA00' }}>
                            info@foodzero.com
                        </span>
                    </p>
                    <p>
                        or telephone on{' '}
                        <span style={{ color: '#9CAA00' }}>
                            +86 852 346 000
                        </span>
                    </p>
                </div>
            </div>
            <div className="locationContainer">
                <p className="location">
                    We are located in 1959 Sepulveda Blvd. Culver City, CA,
                    90230
                </p>
                <img
                    className="locationImg"
                    src={locationImg}
                    alt="Location image"
                />
            </div>
        </div>
    )
}
