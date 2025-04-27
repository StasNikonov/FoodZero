import React from 'react'
import './ImageSkeletonAndSpinner.scss'
import { Spinner } from '../Spinner/Spinner.tsx'

export const ImageSkeletonAndSpinner: React.FC = () => {
    return (
        <div className="imageSkeleton">
            <Spinner />
        </div>
    )
}
