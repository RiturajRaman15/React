export default function Functionasprop() {

    function getData() {
        alert("This is from another component.")
    }

    return (
        <>
            <ParentFunction data={getData}/>
        </>
    )
}

function ParentFunction(props) {

    return (
        <div>
            <h1>Function as Prop</h1>
            <button onClick={() => props.data()}>Get Data</button>
            {/*<button onClick={props.data}>Get Data</button>*/}
        </div>
    );
}