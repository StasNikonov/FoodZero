import React from 'react'
import './NavigationPage.scss'
import { Link } from 'react-router-dom'
import { Contacts } from '../../components/Contacts/Contacts.tsx'
import { SocialNetworksLinks } from '../../components/SocialNetworksLinks/SocialNetworksLinks.tsx'

export const NavigationPage: React.FC = () => {
    return (
        <div className="navigationPageSection">
            <div className="navigationPage">
                <nav className="navigation">
                    <ul className="navigationList">
                        <li className="navigationElement">
                            <Link className="navigationElement" to="/home">
                                HOME
                            </Link>
                        </li>
                        <li className="navigationElement">
                            <Link className="navigationElement" to="/menu">
                                MENU
                            </Link>
                        </li>
                        <li className="navigationElement">
                            <Link className="navigationElement" to="/portfolio">
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="navigationElement">
                            <Link className="navigationElement" to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="navigationElement">
                            <Link className="navigationElement" to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="contacts">
                    <Contacts />
                    <SocialNetworksLinks />
                </div>
            </div>
        </div>
    )
}
