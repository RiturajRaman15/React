import {Table} from "react-bootstrap";

export default function ArrayListingNestedList() {

    const users = [
        {
            name: 'John',
            age: 25,
            email: 'john@example.com',
            address: [{
                hn: '10',
                city: 'Noida',
                country: 'India'
            }]
        },
        {
            name: 'Raman',
            age: 30,
            email: 'raman@example.com',
            address: [{
                hn: '20',
                city: 'Delhi',
                country: 'India'
            }]
        },
        {
            name: 'RRR',
            age: 28,
            email: 'rrr@example.com',
            address: [{
                hn: '30',
                city: 'Faridabad',
                country: 'India'
            }]
        },
        {
            name: 'Rituraj',
            age: 25,
            email: 'rituraj@example.com',
            address: [{
                hn: '40',
                city: 'Patna',
                country: 'India'
            }]
        }
    ]

    return (
        <>
            <h1>Array Listing with Nested List</h1>
            <Table variant={'dark'} striped={true}>
                <thead>
                <tr>
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                </tr>
                </thead>
                {
                    users.map((item, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <Table variant={'dark'}>
                                    {
                                        item.address.map((address, index) => (
                                            <tbody key={index}>
                                            <tr>
                                                <td>{address.hn}</td>
                                            </tr>
                                            <tr>
                                                <td>{address.city}</td>
                                            </tr>
                                            <tr>
                                                <td>{address.country}</td>
                                            </tr>
                                            </tbody>
                                        ))
                                    }
                                </Table>
                            </td>
                        </tr>
                        </tbody>
                    ))
                }
            </Table>
        </>
    )
}