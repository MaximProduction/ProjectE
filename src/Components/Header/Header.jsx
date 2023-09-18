import React from "react";
import style from './Header.module.css'
import malganus from '../Photos/malganus.jpg'
import { Route, Routes, Link } from 'react-router-dom'
import headerIcon from '../Photos/headerIcon.png'

import { Certificate } from './../RouterLinks/Certificate'
import { Contacts } from '../RouterLinks/Contacts'
import { Gallery } from '../RouterLinks/Gallery'
import { Projects } from '../RouterLinks/Projects'
import Mainbar from "../MainBar/Mainbar";
// import Mainbar, { Manibar } from '../MainBar/Mainbar'

export default function Header() {
    const handlerClick = () => {
        window.scrollTo(10000, 10000)
    }

    return (
        <>
            <div className={style.HeaderCon}>

                <div className={style.Icon}>

                    <img className={style.headerIcon} src={headerIcon} />
                </div>
                <header className={style.Link}>

                    <Link className={style.headerLinks} to="/">Главная</Link>
                    <Link className={style.headerLinks} to="/gallery">Галерея</Link>
                    <Link className={style.headerLinks} to="/projects">Проэкты</Link>
                    <Link className={style.headerLinks} to="/certificate">Сертификаты</Link>
                    <Link onClick={handlerClick} className={style.headerLinks} to="/">Контакты</Link>

                </header>
            </div>

            <Routes>
                <Route path="/" element={<Mainbar />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={< Projects />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    )
}