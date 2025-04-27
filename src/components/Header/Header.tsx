import React from 'react'
import './Header.scss'
import { Logo } from '../Logo/Logo.tsx'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
            <div className="leftSide">
                <p className="telephone">+86 852 346 000</p>
                <button className="reservationButton">Reservations</button>
            </div>
        </header>
    )
}
