import {useEffect, useMemo, useState} from "react";

export default function Hooks() {
    const [state, setState] = useState("Rituraj");
    const [count, setCount] = useState(0);

    const [a, setA] = useState(10);
    const [b, setB] = useState(100);

    const [c, setC] = useState(10);
    const [d, setD] = useState(20);

    // useEffect(() => {
    //     console.log("Component mounted");
    // });

    useEffect(() => {
        console.log("Component mounted on a particular state change");
    }, [a]);

    useEffect(() => {
        console.log("Component mounted with props change");
    }, [b]);

    // function multiply() {
    //     console.log("Multiplication");
    //     return c * 5;
    // }

    const multiplyMemo = useMemo(function multiply() {
        console.log("Multiplication Done");
        return c * 5;
    }, [c])

    return (
        <>
            <h1>Hooks</h1>
            <h3>useState, useEffect, useMemo, useCallBack</h3>
            <div style={{border: "1px solid red", margin: "5px auto"}}>
                <h4>useState</h4>
                <p>Hello {state}!</p>
                <button onClick={() => setState("Raman")}>Change</button>
            </div>
            <div style={{border: "1px solid black", margin: "5px auto"}}>
                <h4>useEffect</h4>
                <p>Hello {count}!</p>
                <button onClick={() => setCount(count + 1)}>Change</button>
            </div>
            <div style={{border: "1px solid red", margin: "5px auto"}}>
                <h4>useEffect on a particular State Changes </h4>
                <p>{a}</p>
                <button onClick={() => setA(a + 1)}>Change</button>
            </div>
            <div style={{border: "1px solid red", margin: "5px auto"}}>
                <HooksChild data={b}/>
                <button onClick={() => setB(b + 1)}>Change</button>
            </div>
            <div style={{border: "1px solid black", margin: "5px auto"}}>
                <h4>useMemo: prevent unwanted calls</h4>
                <h3>C: {c}!</h3>
                <h3>D: {d}!</h3>
                {/*<h3>Multiplication: {multiply()}</h3>*/}
                <h3>Multiple: {multiplyMemo}</h3>
                <button onClick={() => setC(c + 1)}>Change C</button>
                <button onClick={() => setD(d + 1)}>Change D</button>
            </div>
        </>
    )
}


function HooksChild(props) {
    return (
        <>
            <h4>useState on a particular Props Change</h4>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{props.data}</p>
        </>
    )
}