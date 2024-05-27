export default function ArrayListing() {

    const dataArray = ['Rituraj', 'Raman', 'RRR', 'Rituraj Raman']

    const myDataObj = [
        {
            name: 'Rituraj',
            age: 25,
            occupation: 'Developer',
        },
        {
            name: 'Raman',
            age: 30,
            occupation: 'Designer',
        },
        {
            name: 'RRR',
            age: 28,
            occupation: 'Rock-star Developer',
        }
    ]

    dataArray.map((item, index) => {
        console.log(index, item);
    })
    return (
        <div>
            <h1>Array Listing</h1>
            <h3>Map Function: Map function is used for looping.</h3>
            <h4>Why not For Loop: return statement does not support for loop.</h4>
            {
                dataArray.map((item, index) => (
                    <h3 key={index}>{index + 1}. {item}</h3>
                ))
            }
            <table border={1}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Occupation</td>
                </tr>
                </thead>
                {
                    myDataObj.map((item, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.occupation}</td>
                        </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}