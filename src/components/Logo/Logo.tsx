import React from 'react'
import logoImg from '../../assets/Logo.png'
import './Logo.scss'
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
    return (
        <Link to="/">
            <img className="siteLogo" src={logoImg} alt="Logo" />
        </Link>
    )
}
