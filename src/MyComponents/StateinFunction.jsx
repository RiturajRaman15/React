import {useState} from "react";

export default function StateinFunction() {
    const [name, setName] = useState("Rituraj");
    const [age, setAge] = useState(20);

    function click() {
        setName("Raman");
        setAge(22);
    }

    return (
        <div>
            <h1>State in Function Component</h1>
            <h2>{name}-{age}</h2>
            <button onClick={click}>Update</button>
        </div>
    );
}