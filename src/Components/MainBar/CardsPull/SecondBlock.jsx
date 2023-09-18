import React from "react";
import style from './SecondBlock.module.css'
import secondBlockImg1 from '../../Photos/SecondBlock1.png'
import secondBlockImg2 from '../../Photos/SecondBlock2.png'
import secondBlockImg3 from '../../Photos/SecondBlock3.png'
import SecondBlockO2 from '../../Photos/SecondBlockO2.png'
import { useState } from "react";

export default function SecondBlock() {
    const [counter, setCounter] = useState('Читать')

    return (
        <div className={style.SecondBlockContainer}>
            <div >

                <img src={SecondBlockO2} />


            </div>
            <div className={style.SecondBlockSecond}>

                <div>
                    <p style={{ fontSize: '40px' }}>О комании</p>
                </div>
                <div>
                    <p style={{ fontSize: '25px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum maiores harum ullam temporibus quo maxime, nam aut suscipit reiciendis laborum ut eius laudantium, distinctio facere ratione deserunt, autem molestiae?</p>
                </div>
                <div >
                    <button
                        onClick={() => alert('Извините ,на данный момент на сайте ведутся технические работы ,попробуйте пожалуйста позже')}
                        className={style.SecondButton}>Читать </button>
                </div>

            </div>
        </div>
    )
}

export { SecondBlock }