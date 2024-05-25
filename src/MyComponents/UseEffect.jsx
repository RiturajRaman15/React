import {useEffect, useState} from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Rituraj");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={() => setName("Raman")}>Update Name</button>
                <br/>
                <br/>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </>
    )
}