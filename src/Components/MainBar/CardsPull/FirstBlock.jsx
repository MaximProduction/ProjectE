import React, { useState } from "react";
import style from './FirstBlock.module.css'

import FirstBlockImg from '../../Photos/FirstBlockImg.png'
import FirstBlockImgCopy from '../../Photos/FirstBlockImgCopy.png'
import FirstBlockHouse from '../../Photos/FirstBlockHouse.png'


export default function FirstBlock() {

    const arrowRight = '-->'
    const arrowLeft = '<--'


    const [counter, setCounter] = useState('01')

    return (
        <div className={style.FirstBlockContainer}>
            <div className={style.InsideBlock}>
                <div>
                    <p className={style.ProjectName}>Project </p>
                    <p className={style.ProjectHome}>Home</p>
                    <div className={style.ArrowCon}>
                        <button
                            onClick={() => setCounter('01')}
                            className={style.ButtonStyle}>{arrowLeft}</button>
                        <button
                            onClick={() => setCounter('02')}

                            className={style.ButtonStyle}>{arrowRight}</button>
                    </div>
                    <p className={style.Points}>{counter}/02</p>

                </div>


                <div>

                </div>
            </div>

            <div className={style.imageCon}>
                {counter === '01' ?
                    <img src={FirstBlockImg} />
                    : <img className={style.HouseImg} src={FirstBlockHouse} />
                }


            </div>


        </div>)

}
export { FirstBlock }