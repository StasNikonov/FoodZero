import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavigationPage } from './pages/NavigationPage/NavigationPage.tsx'
import { HomePage } from './pages/HomePage/HomePage.tsx'
import { MenuPage } from './pages/MenuPage/MenuPage.tsx'
import { ContactPage } from './pages/ContactPage/ContactPage.tsx'
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage.tsx'
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage.tsx'
import { RecipeDetailsPage } from './pages/RecipeDetailsPage/RecipeDetailsPage.tsx'

function App() {
    return (
        <>
            <BrowserRouter basename="/FoodZero">
                <Routes>
                    <Route path="/" element={<NavigationPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route
                        path="/portfolio/:id"
                        element={<RecipeDetailsPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
