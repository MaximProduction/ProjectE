import React from "react";
import style from './Footer.module.css'
import { Route, Routes, Link } from 'react-router-dom'
import footerIcon from '../Photos/footerIcon.png'

import FooterIconBird from '../Photos/FooterIcons/FooterIconBird.png'
import FooterIconFacebook from '../Photos/FooterIcons/FooterIconFacebook.png'
import FooterIconGeo from '../Photos/FooterIcons/FooterIconGeo.png'
import FooterIconLinkedIn from '../Photos/FooterIcons/FooterIconLinkedIn.png'
import FooterIconMail from '../Photos/FooterIcons/FooterIconMail.png'
import FooterIconNumber from '../Photos/FooterIcons/FooterIconNumber.png'
import FooterIconPP from '../Photos/FooterIcons/FooterIconPP.png'


export default function Footer() {


    const handlerclick = () => {
        window.scrollTo(0, 0)
    }
    const handlerclickContacts = () => {
        window.scrollTo(10000, 10000)
    }
    return (
        <div className={style.FooterCon}>


            <div >
                <img src={footerIcon} />
            </div>


            <div className={style.allWhite}>
                <p className={style.da}>Информация</p>

                <div className={style.FooterInsideBlock1}>
                    <Link onClick={handlerclick} className={style.allWhite} to="/">Главная</Link>
                    <Link className={style.allWhite} to="/gallery">Галерея</Link>
                    <Link onClick={handlerclick} className={style.allWhite} to="/projects">Проэкты</Link>
                    <Link className={style.allWhite} to="/certificate">Сертификаты</Link>
                    <Link onClick={handlerclickContacts} className={style.allWhite} to="/">Контакты</Link>
                </div>
            </div>
            <div >
                <p className={style.da}>Контакты</p>
                <div className={style.FooterInsideBlock2}>

                    <div className={style.allWhite}>
                        <img className={style.FooterImgs} src={FooterIconGeo} />
                        200000 Улица Чих на переулке беверли <br />Хиллз на углу 3й и 5й Каролины
                    </div>
                    <div className={style.allWhite}>
                        <img className={style.FooterImgs} src={FooterIconNumber} />
                        +3800000000
                    </div>
                    <div className={style.allWhite}>
                        <img className={style.FooterImgs} src={FooterIconMail} />
                        mail@gmail.com
                    </div>

                </div>
            </div>

            <div className={style.LastFootersIcons} >
                <div>
                    <p className={style.da}>Социальные сети</p>
                </div>

                <div className={style.OnlyIconsCon}>
                    <div>
                        <a href='https://www.facebook.com/'>
                            <img src={FooterIconFacebook} />
                        </a>

                    </div>
                    <div>
                        <img src={FooterIconBird} />
                    </div>
                    <div>
                        <img src={FooterIconLinkedIn} />
                    </div>
                    <div>
                        <img src={FooterIconPP} />
                    </div>
                </div>

            </div>
        </div>)

}