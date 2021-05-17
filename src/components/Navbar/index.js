import React from 'react';
import ReactDOM from 'react-dom';
import Navstyle from "./styles.module.css"

export default function Navbar(){

    return (
        <div className={Navstyle.navContainer} >
            <h1>
                Navbar
            </h1>
        </div>
    )
}