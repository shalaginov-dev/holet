'use client'
import Image from "next/image";
import * as EmailValidator from 'email-validator'

import img from '../../public/images/illustration-sign-up-desktop.svg'
import orangeIcon from '../../public/images/icon-list.svg'
import s from './page.module.scss'
import {ChangeEvent, useState} from "react";

export default function SignupForm() {
    const [inputValue, setInputValue] = useState('')
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const handleSubscribeButton = () => {
        // @ts-ignore
        console.log(EmailValidator.validate(inputValue))
    }

    return (
        <main className={s.signupBlock}>
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
                    <label htmlFor="email">Email address</label>
                    <input placeholder='email@company.com' type="email" name='email' value={inputValue}
                           onChange={(e)=> handleChangeInput(e)}/>
                </div>
                <button onClick={() => {
                    handleSubscribeButton()
                }}>Subscribe to monthly newsletter
                </button>
            </div>
            <div>
                <Image src={img} alt='image'></Image>
            </div>
        </main>
    )
}
