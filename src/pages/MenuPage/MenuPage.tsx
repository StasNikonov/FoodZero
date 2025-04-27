import React from 'react'
import './MenuPage.scss'
import { ReservationForm } from '../../components/ReservationForm/ReservationForm.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'
import { Header } from '../../components/Header/Header.tsx'
import { MenuSection } from './components/MenuSection/MenuSection.tsx'
import { MenuStarterSection } from './components/MenuStarterSection/MenuStarterSection.tsx'

export const MenuPage: React.FC = () => {
    return (
        <div className="menuPage">
            <Header />
            <MenuStarterSection />
            <div className="menuList">
                <MenuSection
                    title="Breakfast"
                    description="Start your day right"
                    reversed={false}
                    mealType="breakfast"
                />
                <MenuSection
                    title="Snack"
                    description="Quick bite, big flavor"
                    reversed={true}
                    mealType="snack"
                />
                <MenuSection
                    title="Dinner"
                    description="End your day deliciously"
                    reversed={false}
                    mealType="Dinner"
                />
            </div>
            <ReservationForm />
            <Footer />
        </div>
    )
}
