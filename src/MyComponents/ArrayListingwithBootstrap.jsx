import {Table} from "react-bootstrap";

export default function ArrayListingWithBootstrap() {
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
            age: 30,
            occupation: 'Rock-star Developer',
        }
    ]
    return (
        <>
            <h1>Array Listing with Bootstrap</h1>
            <Table striped variant={"dark"} border={1}>
                <thead>
                <tr>
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Occupation</td>
                </tr>
                </thead>
                {
                    myDataObj.map((item, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.occupation}</td>
                        </tr>
                        </tbody>
                    ))
                }
            </Table>
            <h2>Condition/Filter on Table (Age == 30)</h2>
            <Table striped variant={"dark"} border={1}>
                <thead>
                <tr>
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Occupation</td>
                </tr>
                </thead>
                {
                    myDataObj.map((item, index) => (
                        item.age === 30 ?
                            <tbody key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.occupation}</td>
                            </tr>
                            </tbody> : null
                    ))
                }
            </Table>
        </>
    )
}