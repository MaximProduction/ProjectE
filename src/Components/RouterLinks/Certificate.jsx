import React from "react";
import style from './Certificate.module.css'

import Certificate1 from '../Photos/Certificates/Certificate1.png'
import Certificate2 from '../Photos/Certificates/Certificate2.png'
import Certificate3 from '../Photos/Certificates/Certificate3.png'
import Certificate4 from '../Photos/Certificates/Certificate4.png'
import Certificate5 from '../Photos/Certificates/Certificate5.png'
import Certificate6 from '../Photos/Certificates/Certificate6.png'
import Certificate7 from '../Photos/Certificates/Certificate7.png'
import Certificate8 from '../Photos/Certificates/Certificate8.png'
import Certificate9 from '../Photos/Certificates/Certificate9.png'

export default function Certificate() {
    return (
        <div className={style.CertificatesCon}>
            <a href='https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-vchitelyu'><img src={Certificate1} /></a>
            <a href="https://gifty.in.ua/ru/product/onlajn-sertifikat-na-vivchennya-anglijskoi-movi"><img src={Certificate2} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-gifty"><img src={Certificate3} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-sertifikat-hr"><img src={Certificate4} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-gold-300"> <img src={Certificate5} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-birthday-blue"> <img src={Certificate6} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-birthday-zhovtij"> <img src={Certificate7} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-z-dnom"><img src={Certificate8} /></a>
            <a href="https://gifty.in.ua/ru/product/podarunkovij-onlajn-sertifikat-zrostannya"> <img src={Certificate9} /></a>
        </div>
    )
}
export { Certificate }