// import {useCallback, useState} from "react";
// import HookChild from "./_HookChild.jsx";
//
// export default function UseCallBack() {
//     const [count, setCount] = useState(0);
//     const MyFunction = useCallback(() => {
//         console.log('MyFunction');
//     }, [count])
//     return (
//         <>
//             <h1>usecallback</h1>
//             <HookChild myFunction={MyFunction}/>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//         </>
//     )
// }

import {useCallback, useState} from "react";
import HookChild from "./_HookChild.jsx";

export default function UseCallBack() {
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);

    const MyFunction = useCallback(() => {
        console.log('Hey there!');
    }, []);

    return (
        <>
            <h1>usecallback</h1>
            <HookChild myFunction={MyFunction}/>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCounts(counts + 1)}>Increase</button>
        </>
    );
}