import React from 'react'
import './ContactStarterSection.scss'

export const ContactStarterSection: React.FC = () => {
    return (
        <div className="contactStarterSection">
            <div className="contactStarter">
                <div className="contactStarterSectionTitleContainer">
                    <h1 className="contactStarterSectionTitle">Get in Touch</h1>
                    <p className="contactStarterSectionDescription">
                        The freshest ingredients for you every day!
                    </p>
                </div>
                <div className="openTimeSection">
                    <div className="openTime">
                        <h1 className="openTimeTitle">Open Time</h1>
                        <p className="openTimeDescr">Sunday - Friday</p>
                    </div>
                    <div className="maleTypeForTimeList">
                        <div className="timeContainer">
                            <p className="time">
                                Brunch
                                <br />
                                11:00 - 12:00
                            </p>
                        </div>
                        <div className="timeContainer">
                            <p className="time">
                                Lunch
                                <br />
                                12:00 - 17:00
                            </p>
                        </div>
                        <div className="timeContainer">
                            <p className="time">
                                Dinner
                                <br />
                                18:00 - 20:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
