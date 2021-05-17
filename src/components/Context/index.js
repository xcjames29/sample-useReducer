import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../Counter';
import ContentStyle from "./styles.module.css"


export default function Context(){

    return (
        <div className={ContentStyle.contentContainer}> 
            <h1 className="">
                Content
            </h1>
                <Counter />
        </div>
    )
}