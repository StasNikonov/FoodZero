import React from 'react'
import './PostsList.scss'
import { Post } from '../../../../components/Post/Post.tsx'
import { useFetchRecipesByTag } from '../../../../hooks/useFetchRecipesByTag.tsx'

interface PostsListProps {
    tag: string
}

export const PostsList: React.FC<PostsListProps> = ({ tag }) => {
    const { recipe } = useFetchRecipesByTag(tag)

    return (
        <div className="postsList">
            {recipe?.recipes.map((recipe) => (
                <Post
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.name}
                    mealType={recipe.mealType[0]}
                    img={recipe.image}
                />
            ))}
        </div>
    )
}
