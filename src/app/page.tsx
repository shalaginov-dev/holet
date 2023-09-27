'use client'
import Image from "next/image";

import img from '../../public/images/illustration-sign-up-desktop.svg'
import orangeIcon from '../../public/images/icon-list.svg'
import s from './page.module.scss'

export default function SignupForm() {
    const handleSubscribeButton = () => {
        alert('heeellllooooo!232')
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
                    <input placeholder='email@company.com' type="email" name='email'/>
                </div>
                <button onClick={() => {handleSubscribeButton()}}>Subscribe to monthly newsletter</button>
            </div>
            <div>
                <Image src={img} alt='image'></Image>
            </div>
        </main>
    )
}
