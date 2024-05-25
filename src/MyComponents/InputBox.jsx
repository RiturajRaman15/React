import {useState} from "react";

export default function InputBox() {
    const [inputValue, setInputValue] = useState("");

    // const [onclick, setClickValue] = useState("");

    function getData(val) {
        console.log(val.target.value);
        setInputValue(val.target.value);
    }

    // function click(val) {
    //     console.log(val.target.value);
    //     setClickValue(val.target.value);
    // }

    return (
        <>
            <h1>How to get values from Input Box</h1>
            <label>Enter Text :</label>
            <input type={"text"} onChange={getData}/>
            {/*<button onClick={click}>Click Me</button>*/
            }
            <h3>{inputValue}</h3>
            {/*<h3>{onclick}</h3>*/
            }
        </>
    )
}