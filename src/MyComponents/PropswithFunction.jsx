import PropWithFuncChild from "./PropwithFuncChild.jsx";
import react from "react";

export default function PropswithFunction() {
    const [name, setName] = react.useState("Raman");
    return (
        <>
            <h1>Props with Functional Component</h1>
            {/*<PropWithFuncChild name={"Rituraj"}/>*/}
            <PropWithFuncChild name={name} age={25}/>
        </>
    )
}