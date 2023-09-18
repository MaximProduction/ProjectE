import React from "react";
import style from './FifthBlock.module.css'
import FifthBlockImg from '../../Photos/FifthBlockImg.png'

export default function FifthBlock() {


    return (
        <div className={style.FifthBlockContainer}>

            <div className={style.InsideHead}>
                Связаться с нами
            </div>



            <div className={style.FifthBlockCon2}>
                <div >
                    <div className={style.AllInputs}>
                        <input className={style.OneInput} placeholder="Имя" />
                    </div>
                    <div className={style.AllInputs}>
                        <input className={style.OneInput} placeholder="Номер телефона" />
                    </div>
                    <div className={style.AllInputs}>
                        <input className={style.OneInput} placeholder="E-mail" />
                    </div>
                    <div className={style.AllInputs}>
                        <input className={style.OneInput} placeholder="Интересующий товар" />
                    </div>
                    <div className={style.AllInputs}>
                        <input className={style.LastInput} placeholder="Сообщение" />
                    </div>
                </div>
                <div>
                    <img src={FifthBlockImg} />
                </div>
            </div>
            <div className={style.InsideFoot}>

                <button className={style.OurButtonInside}>Отправить</button>
            </div>
        </div>
    )
}