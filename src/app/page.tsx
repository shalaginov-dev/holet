'use client'
import Image from "next/image";
import {ChangeEvent, useState} from "react";
import * as EmailValidator from 'email-validator'

import img from '../../public/images/illustration-sign-up-desktop.svg'
import mobileImg from '../../public/images/illustration-sign-up-mobile.svg'
import orangeIcon from '../../public/images/icon-list.svg'
import {SimpleModal} from "@/components/Modal";
import s from './page.module.scss'

export default function SignupForm() {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        setError(false)
    }
    const handleSubscribeButton = () => {
        if (!EmailValidator.validate(inputValue)) setError(true)
        else {
            setError(false)
            setModal(true)

        }
    }
    const handleModalWindow = () => {
        setModal(false)
        setInputValue('')
    }

    return (
        <main className={s.signupBlock}>
            <SimpleModal active={modal} value={inputValue} onConfirmCLick={()=> handleModalWindow()}/>
            <div className={s.textBlock}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className={s.bulletBlock}>
                    <div>
                        <Image src={orangeIcon} alt='orangeIcon'></Image>
                        <span>Product discovery and building what matters</span>
                    </div>
                    <div>
                        <Image src={orangeIcon} alt='orangeIcon'></Image>
                        <span>Measuring to ensure updates are a success</span>
                    </div>
                    <div>
                        <Image src={orangeIcon} alt='orangeIcon'></Image>
                        <span>And much more!</span>
                    </div>
                </div>
                <div className={s.emailForm}>
                    <div className={s.emailLabel}>
                        <label htmlFor="email">Email address</label><span hidden={!error}>Valid email required</span>
                    </div>
                    <input className={error ? s.errorInput : ''} placeholder='email@company.com' type="email"
                           id='email' value={inputValue}
                           onChange={(e) => handleChangeInput(e)}/>
                </div>
                <button onClick={() => {
                    handleSubscribeButton()
                }}>Subscribe to monthly newsletter
                </button>
            </div>
            <div className={s.imgBlock}>
                <Image priority className={s.mobileImg} src={mobileImg} alt='mobileImg'></Image>
                <Image priority className={s.img} src={img} alt='image'></Image>
            </div>
        </main>
    )
}
