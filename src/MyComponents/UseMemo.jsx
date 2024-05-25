import {useMemo, useState} from "react";
// import HookChild from "./_HookChild.jsx";
//
// export default function UseMemo() {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <h1>useMemo</h1>
//             <HookChild/>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//         </>
//     )
// }

// OR

export default function UseMemo() {
    const [count, setCount] = useState(0);

    const noCall = useMemo(() => {
        return (
            <>
                <h3 style={{color: 'red'}}>This is part of useMemo {count}</h3>
            </>
        )
    }, [])
    return (
        <>
            <h1>useMemo</h1>
            {noCall}

            <h3>This is normal Component {count}</h3>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </>
    )
}


// react thunk
// react observable
// SOLID

// edit form on run time
// content types: building blocks of SP for list and Library