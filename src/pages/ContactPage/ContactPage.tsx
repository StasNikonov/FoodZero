import React from 'react'
import './ContactPage.scss'
import { ReservationForm } from '../../components/ReservationForm/ReservationForm.tsx'
import { Header } from '../../components/Header/Header.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'
import { ContactStarterSection } from './components/ContactStarterSection/ContactStarterSection.tsx'
import { AddressAndLocationSection } from './components/AddressAndLocationSection/AddressAndLocationSection.tsx'

export const ContactPage: React.FC = () => {
    return (
        <div className="contactPageSection">
            <Header />
            <ContactStarterSection />
            <AddressAndLocationSection />
            <ReservationForm />
            <Footer />
        </div>
    )
}
