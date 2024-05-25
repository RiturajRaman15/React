import {useState} from "react";

export default function Forms() {
    const [name, setName] = useState('');
    const [options, setOptions] = useState('');
    const [tnc, settnc] = useState(false);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [usererror, setUserError] = useState(false);
    const [passerror, setPassError] = useState(false);

    function getFormData(e) {
        console.log(name, options, tnc);
        e.preventDefault()
    }

    function loginHandle(e) {
        console.log(user, password);
        if (usererror || passerror) {
            alert("Invalid Credentials!");
        }
        e.preventDefault();
    }

    function userHandler(e) {
        let x = e.target.value;
        if (x.length <= 3) {
            setUserError(true);
        } else {
            setUserError(false);
            setUser(x);
        }
    }

    function passHandler(e) {
        let x = e.target.value;
        if (x.length <= 5) {
            setPassError(true);
        } else {
            setPassError(false)
            setPassword(x);
        }
    }


    return (
        <>
            <div>
                <h1>React Forms</h1>
                <form onSubmit={getFormData}>
                    <input type="text" placeholder={"Enter Name"} onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <span>Options</span>
                    <select onChange={(e) => setOptions(e.target.value)}>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <br/>
                    <input type={"checkbox"} onChange={(e) => settnc(e.target.checked)}/> <span>Accept T & C.</span>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h1>Form Validation</h1>
                <form onSubmit={loginHandle}>
                    <input type={"text"} placeholder={"Enter Text"} onChange={userHandler}/>
                    {usererror ? <span>Invalid Username</span> : ''}
                    <br/>
                    <input type={"text"} placeholder={"Enter Password"} onChange={passHandler}/>
                    {passerror ? <span>Invalid Password</span> : ''}
                    <br/>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        </>
    )
}