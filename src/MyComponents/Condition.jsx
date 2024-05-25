import react from "react";

export default function Condition() {
    const [loggedin, setLoggedin] = react.useState(false);
    const [loggedinx, setLoggedinx] = react.useState(3);
    // if (loggedin) {
    //     return (
    //         <>
    //             <h3>Welcome Rituraj!</h3>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h3>Please log in to continue</h3>
    //         </>
    //     )
    // }
    return (
        <>
            {
                loggedin ? <h3>Welcome Rituraj!</h3> : <h3>Please log in to continue</h3>
            }
            {
                loggedinx === 1 ? <h3>Welcome Rituraj!</h3> : loggedinx === 2 ? <h3>Please log in to continue</h3> :
                    <h3>Uffffffff!</h3>
            }
        </>
    )
}