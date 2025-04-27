import React from 'react'
import './SocialNetworksLinks.scss'
import instagramIcon from '../../assets/icons/Icon_instagram.png'
import facebookIcon from '../../assets/icons/Icon_facebook.png'
import youtubeIcon from '../../assets/icons/Icon_youtube.png'

export const SocialNetworksLinks: React.FC = () => {
    return (
        <div className="contactsIcon">
            <img src={instagramIcon} alt="instagram Icon" />
            <img src={facebookIcon} alt="facebook Icon" />
            <img src={youtubeIcon} alt="youtube Icon" />
        </div>
    )
}
