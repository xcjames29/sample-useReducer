import { createContext, useReducer } from "react";


let CounterContext = createContext({
    counter: 0,
    setCounterValue: () => { }
});

export default CounterContext

export function CounterContextProvider(props) {

    let initialState = { counter: 0 };
    let reducer = (state, action) => {
        switch (action) {
            case "increment":
                return { counter: state.counter + 1 };
            case "reduce":
                return { counter: state.counter - 1 }
            case "reset":
                return { counter: 0 }
            default:
                throw new Error("Wrong action!");
        }
    }

    let [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{
            counterState, dispatch
        }}>

            {props.children}
        </CounterContext.Provider>
    )

}