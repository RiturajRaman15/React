export default function EventandFunction() {

    let name = "Rituraj"

    function click() {
        alert(name);
    }

    return (
        <div>
            <h1>Event and Function</h1>
            <h2>{name}</h2>
            <button onClick={click}>Click Here</button>
        </div>
    );
}