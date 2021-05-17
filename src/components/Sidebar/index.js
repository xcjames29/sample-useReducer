import React from 'react';
import ReactDOM from 'react-dom';
import Sidestyle from "./styles.module.css"

export default function Sidebar(props){

    return (
        <div className={Sidestyle.sidebarContainer}> 
           <h1> Sidebar</h1>
           {props.children}
        </div>
    )
}