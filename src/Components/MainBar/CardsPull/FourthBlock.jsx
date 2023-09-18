import React, { useRef } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import style from './FourthBlock.module.css'
import FourthBlockImg1 from '../../Photos/FourthBlockImg1.png'
import FourthBlockImg2 from '../../Photos/FourthBlockImg2.png'
import FourthBlockImg3 from '../../Photos/FourthBlockImg3.png'
import FourthBlockImg4 from '../../Photos/FourthBlockImg4.png'
import FourthBlockImg5 from '../../Photos/FourthBlockImg5.png'





export default function FourthBlock() {
    // const handlerclick = () => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' })
    // }
    // const ref = useRef(null)
    const handlerclick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className={style.OurProjects}>
                <p>Наши Проэкты</p>
            </div>
            <div className={style.FourthBlockCon}>
                <img src={FourthBlockImg1} />
                <img src={FourthBlockImg2} />
                <img src={FourthBlockImg3} />
                <img src={FourthBlockImg4} />
                <img src={FourthBlockImg5} />
            </div>
            <div className={style.OurButton}>
                <Link className={style.headerLinks} to="/projects"><button
                    onClick={handlerclick}

                    className={style.OurButtonInside}>
                    Все Проэкты
                </button></Link>
                {/* <button className={style.OurButtonInside}>Все Проэкты </button> */}
            </div>
        </div>
    )
}
