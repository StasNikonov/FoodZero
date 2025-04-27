import React, { useState } from 'react'
import './Post.scss'
import ArrowRight from '../../assets/icons/Icon_arrowRight.png'
import { ImageSkeletonAndSpinner } from '../ImageSkeletonAndSpinner/ImageSkeletonAndSpinner.tsx'
import { Link } from 'react-router-dom'

interface PostProps {
    id: number
    title: string
    mealType: string
    img: string
}

export const Post: React.FC<PostProps> = ({ id, title, mealType, img }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <Link className="post" to={`/portfolio/${id}`}>
            {!isImageLoaded && <ImageSkeletonAndSpinner />}

            <img
                src={img}
                alt={title}
                onLoad={() => setIsImageLoaded(true)}
                className="postImg"
                style={{
                    opacity: isImageLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}
            />
            <div className="postDetails">
                <h1 className="postTitle">{title}</h1>
                <p className="postMealType">{mealType}</p>
            </div>
            <img className="arrowRight" src={ArrowRight} alt="" />
        </Link>
    )
}
