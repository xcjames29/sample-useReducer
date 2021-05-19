import React, { useContext } from 'react';

import CounterStyle from "./styles.module.css"
import CounterContext from "../../context/CounterContext"


export default function Counter() {
    let data = useContext(CounterContext);
    return (
        <div className={CounterStyle.counterContainer}>

            <button onClick={() => data.dispatch("increment")}> Add Count</button>
            {data.counterState.counter}
            <button onClick={() => data.dispatch("reduce")}> Recuce Count</button>
            <button onClick={() => data.dispatch("reset")}> Reset</button>
        </div>

    )
}