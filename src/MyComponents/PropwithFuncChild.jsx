export default function PropWithFuncChild(prop) {
    return (
        <>
            {/*<h3>Hi {prop.name}</h3>*/}
            <h3>Hi {prop.name}-{prop.age}</h3>
        </>
    )
}