import React from 'react'
import './AboutUsPage.scss'
import { Header } from '../../components/Header/Header.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'
import { ReservationForm } from '../../components/ReservationForm/ReservationForm.tsx'
import { AboutUsStarterSection } from './components/AboutUsStarterSection/AboutUsStarterSection.tsx'
import { OurStorySection } from './components/OurStorySection/OurStorySection.tsx'
import { StaffSection } from './components/StaffSection/StaffSection.tsx'
import { ProcessSection } from './components/ProcessSection/ProcessSection.tsx'

export const AboutUsPage: React.FC = () => {
    return (
        <div className="aboutUsPageSection">
            <Header />
            <AboutUsStarterSection />
            <OurStorySection />
            <StaffSection />
            <ProcessSection />
            <ReservationForm />
            <Footer />
        </div>
    )
}
