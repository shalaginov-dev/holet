import Image from "next/image";

import iconSuccess from '../../public/images/icon-success.svg'
import s from './Modal.module.scss'
import React from "react";

interface ModalProps {
    active: boolean
    value: string
    onActiveModalClick?: (value: boolean) => void
    onConfirmCLick: () => void
}

// export function Modal({active, value, onActiveModalClick, onConfirmCLick}: ModalProps) {
//     return (
//         <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => onActiveModalClick(false)}>
//             <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
//                  onClick={e => e.stopPropagation()}>
//                 <p>{value}</p>
//                 <div className={s.buttonsBlock}>
//                     <button className='button pay-btn' onClick={() => onActiveModalClick(false)}>Отмена</button>
//                     <button className='button pay-btn' onClick={() => onConfirmCLick()}>Ок</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function SimpleModal({active, value, onActiveModalClick, onConfirmCLick}: ModalProps) {
    return (
        <div  className={active ? `${s.modal} ${s.active}` : s.modal}>
            <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
                 onClick={e => e.stopPropagation()}>
                <Image src={iconSuccess} alt={'success icon'}></Image>
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <b>{value}</b>.
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <button  className='button pay-btn' onClick={() => onConfirmCLick()}>Dismiss message
                </button>
            </div>
        </div>
    )
}