import React from 'react'
import './StaffContainer.scss'

interface staffContainerProps {
    title: string
    name: string
    img: string
    description: string
    reversed?: boolean
}

export const StaffContainer: React.FC<staffContainerProps> = ({
    title,
    name,
    img,
    description,
    reversed = false,
}) => {
    return (
        <div className={`staffContainer ${reversed ? 'reversed' : ''}`}>
            <div className="employeeDetail">
                <h1 className="employeeTitle">{title}</h1>
                <p className="employeeName">{name}</p>
                <img className="employeeImg" src={img} alt={title} />
            </div>
            <p className="employeeDescription">{description}</p>
        </div>
    )
}
