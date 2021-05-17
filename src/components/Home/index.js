import React from 'react';
import Context from '../Context';
import Navbar from "../Navbar"
import Sidebar from '../Sidebar';
import StylesHome from "./styles.module.css"

import {CounterContextProvider} from "../../context/CounterContext"
export default function Home() {

    return (
        <CounterContextProvider>
            <div className={StylesHome.container}>
                <Navbar />
                <div className={StylesHome.contentsContainer}>
                    <Sidebar>
                        <div className="cards">
                            <h2>
                                Head 1
                        </h2>
                        </div>
                        <div className="cards">
                            <h2>
                                Head 2
                        </h2>
                        </div>
                    </Sidebar>
                    <Context />
                </div>
            </div>
        </CounterContextProvider>
    )
}