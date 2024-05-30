export default function ReuseComponentsLoop() {
    const user = [
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

    const data = [
        {
            name: 'X',
            age: 'Y',
            occupation: 'Z',
        },
        {
            name: 'A',
            age: 'B',
            occupation: 'C',
        },
        {
            name: 'D',
            age: 'E',
            occupation: 'F',
        }
    ]
    return (
        <>
            <h1>Reuse Components in Loop</h1>
            {
                user.map((user, index) =>
                    <ReuseComponent key={index} data={user}/>
                )
            }
            {
                data.map((data, index) =>
                    <ReuseComponent key={index} data={data}/>
                )
            }
        </>
    )
}


function ReuseComponent({index, data}) {
    return (
        <div key={index}>
            <h3>{data.name} {data.age} {data.occupation}</h3>
        </div>
    )
}