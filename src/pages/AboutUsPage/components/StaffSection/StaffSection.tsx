import React from 'react'
import './StaffSection.scss'
import CarsonHugn from '../../../../assets/aboutPage/Carson Hugn.png'
import JaneCooper from '../../../../assets/aboutPage/Jane Cooper.png'
import { StaffContainer } from '../../../../components/StaffContainer/StaffContainer.tsx'

export const StaffSection: React.FC = () => {
    return (
        <div className="staffSection">
            <StaffContainer
                title="Restuarant Manager"
                name="Carson Hugn"
                img={CarsonHugn}
                description="With a passion for hospitality and over 8 years of
                    experience in restaurant operations, Carson Hugn brings
                    leadership, efficiency, and a customer-first mindset to
                    every shift. As a dedicated Restaurant Manager, Carson
                    oversees daily service, manages team performance, and
                    ensures an exceptional guest experience from start to
                    finish."
            />
            <StaffContainer
                title="Executive Chef"
                name="Jane Cooper"
                img={JaneCooper}
                description="With a refined culinary vision and over a decade of
                    experience in top-tier kitchens, Jane Cooper leads the
                    kitchen as Executive Chef with creativity, precision, and a
                    deep respect for ingredients. Her expertise lies in blending
                    traditional techniques with modern flair, creating dishes
                    that are both visually stunning and rich in flavor."
                reversed
            />
        </div>
    )
}
