import React from 'react'
import './HomePage.scss'
import { Header } from '../../components/Header/Header.tsx'
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection.tsx'
import { ImageBoxSection } from './components/ImageBoxSection/ImageBoxSection.tsx'
import { OurMenuSection } from './components/OurMenuSection/OurMenuSection.tsx'
import { ChefSection } from './components/ChefSection/ChefSection.tsx'
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection.tsx'
import { ReservationForm } from '../../components/ReservationForm/ReservationForm.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'

export const HomePage: React.FC = () => {
    return (
        <div className="homePageSection">
            <Header />
            <section className="homePage">
                <WelcomeSection />
                <ImageBoxSection />
                <OurMenuSection />
                <ChefSection />
                <FeaturesSection />
                <ReservationForm />
            </section>
            <Footer />
        </div>
    )
}
