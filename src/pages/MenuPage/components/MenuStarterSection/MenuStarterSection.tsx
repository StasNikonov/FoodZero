import React from 'react'
import './MenuStarterSection.scss'

export const MenuStarterSection: React.FC = () => {
    return (
        <div className="menuStarterSection">
            <div className="menuStarterSectionTitleContainer">
                <h1 className="menuStarterSectionTitle">
                    View Our <br />
                    New Menu
                </h1>
                <p className="menuStarterSectionDescription">
                    The freshest ingredients for you every day
                </p>
            </div>
        </div>
    )
}
