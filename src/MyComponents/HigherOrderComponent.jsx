import react from "react";

export default function HigherOrderComponent() {
    return (
        <>
            <h1>Higher Order Component</h1>
            <h3>Higher-order Components are a design pattern in React where a Component takes a component as an
                argument and returns an enhanced new component.</h3>
            <Counter/>
            <HOCRed cmp={Counter}/>
            <HOCGreen cmp={Counter}/>
            <HOCBlue cmp={Counter}/>
        </>
    )
}

function HOCRed(props) {
    return (
        <div style={{backgroundColor: 'red', width: '10%'}}>
            <h2>Red</h2>
            <props.cmp/>
        </div>
    )
}

function HOCGreen(props) {
    return (
        <div style={{backgroundColor: 'green', width: '10%'}}>
            <h2>Green</h2>
            <props.cmp/>
        </div>
    )
}

function HOCBlue(props) {
    return (
        <div style={{backgroundColor: 'blue', width: '10%'}}>
            <h2>Blue</h2>
            <props.cmp/>
        </div>
    )
}

function Counter() {
    const [count, setCount] = react.useState(0);
    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    )
}