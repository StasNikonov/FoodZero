import React from 'react'
import './Contacts.scss'

export const Contacts: React.FC = () => {
    return (
        <div className="contactsDetail">
            <h2 className="contactsTitle">Contact</h2>
            <div>
                <p className="contactsElement">+86 852 346 000</p>
                <p className="contactsElement">info@foodzero.com</p>
            </div>
            <p className="contactsElement">
                1959 Sepulveda Blvd.
                <br />
                Culver City, CA, 90230
            </p>
        </div>
    )
}
