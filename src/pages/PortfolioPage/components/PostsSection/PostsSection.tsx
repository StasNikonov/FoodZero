import React, { useState } from 'react'
import './PostsSection.scss'
import { useFetchAllRecipesTags } from '../../../../hooks/useFetcAllRecipesTags.tsx'
import { PostsList } from '../PostsList/PostsList.tsx'
import { Spinner } from '../../../../components/Spinner/Spinner.tsx'

export const PostsSection: React.FC = () => {
    const [tag, setTag] = useState<string>('Asian')
    const [clickedItem, setClickedItem] = useState<string>('Asian')
    const { data, isLoading } = useFetchAllRecipesTags()

    return (
        <div className="posts">
            {isLoading ? <Spinner /> : ''}
            <div className="tagsList">
                {data
                    ?.slice(0, 6)
                    .sort()
                    .map((tag) => (
                        <button
                            className={`tagButton ${tag === clickedItem ? 'isClicked' : ''}`}
                            key={tag}
                            onClick={() => {
                                setTag(tag)
                                setClickedItem(tag)
                            }}
                        >
                            {tag}
                        </button>
                    ))}
            </div>
            <PostsList tag={tag} />
        </div>
    )
}
