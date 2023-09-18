import React from "react";
import FifthBlock from "./CardsPull/FifthBlock";
import FirstBlock from "./CardsPull/FirstBlock";
import FourthBlock from "./CardsPull/FourthBlock";
import SecondBlock from "./CardsPull/SecondBlock";
import ThirdBlock from "./CardsPull/ThirdBlock";
import style from './Mainbar.module.css'




export default function Mainbar() {
    return (
        <div >
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
            <FifthBlock />
        </div>)

}
export { Mainbar }