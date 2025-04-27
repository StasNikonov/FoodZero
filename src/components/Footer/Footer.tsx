import React from 'react'
import './Footer.scss'
import { SocialNetworksLinks } from '../SocialNetworksLinks/SocialNetworksLinks.tsx'
import { Contacts } from '../Contacts/Contacts.tsx'
import { Logo } from '../Logo/Logo.tsx'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = {
    email: string
}

const schema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required!'),
})

export const Footer: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: FormData) => {
        alert(`Thanks for your subscribe ${data.email}`)
    }

    return (
        <footer onSubmit={handleSubmit(onSubmit)} className="footer">
            <div className="topSideFooter">
                <Logo />
                <Contacts />
                <div className="footerFormContainer">
                    <h1 className="footerFormTitle">Never Miss a Recipe</h1>
                    <form className="footerForm">
                        <div className="inputContainer">
                            <input
                                {...register('email')}
                                className="footerFormInput"
                                placeholder="Email Address"
                                type="text"
                            />
                            {errors.email && (
                                <p style={{ color: 'red' }}>
                                    {errors.email.message}
                                </p>
                            )}
                            <p className="formDescription">
                                Join our subscribers and get best recipe
                                <br />
                                delivered each week!
                            </p>
                        </div>
                        <button className="footerSubmitButton">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="bottomSideFooter">
                <p className="copyright">
                    © 2020 Zero Inc. All rights Reserved
                </p>
                <SocialNetworksLinks />
            </div>
        </footer>
    )
}
