import react from "react";

export default function HideShow() {
    const [status, setStatus] = react.useState(true);

    return (
        <>
            <h1>Hide and Show Element</h1>
            <div>
                {status ? <h3>
                    This Element will be hidden.
                </h3> : null
                }
            </div>
            <button onClick={() => setStatus(!status)}>Hide/Show</button>
        </>
    )
}