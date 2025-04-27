import React from 'react'
import './PortfolioPage.scss'
import { Header } from '../../components/Header/Header.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'
import { PortfolioPageStarterSection } from './components/PortfolioPageStarterSection/PortfolioPageStarterSection.tsx'
import { PostsSection } from './components/PostsSection/PostsSection.tsx'

export const PortfolioPage: React.FC = () => {
    return (
        <div className="portfolioPage">
            <Header />
            <PortfolioPageStarterSection />
            <PostsSection />
            <Footer />
        </div>
    )
}
