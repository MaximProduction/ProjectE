import React from "react";
import style from './ThirdBlock.module.css'
import ThirdBlockOne from '../../Photos/ThirdBlockOne.png'
import ThirdBlockTwo from '../../Photos/ThirdBlockTwo.png'


export default function ThirdBlock() {
    return (
        <div className={style.razdCon}>
            <div className={style.OsnovnSadachi}>
                <p>Основные задачи</p>
            </div>

            <div className={style.ThirdBlockContainer}>

                <div className={style.ThirdBlockOneCon}>

                    <div>
                        <img src={ThirdBlockOne} />
                    </div>
                    <div className={style.ThirdBlockText}>
                        <p>Создание комфортных условий и повышение качества обслуживания</p>
                    </div>

                </div>
                <div className={style.ThirdBlockOneCon}>
                    <div>
                        <img src={ThirdBlockTwo} />
                    </div>
                    <div className={style.ThirdBlockText}>
                        <p>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала,закупки нового оборудования и усиленной рекламы на рынке</p>
                    </div>
                </div>
            </div>
        </div>
    )
}