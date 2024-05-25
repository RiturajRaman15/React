import {Component} from "react";

class PropswithClass extends Component {
    render() {
        return (
            <>
                <PropWithClassChild name={"Rituraj Raman"}/>
            </>
        )
    }
}

export default PropswithClass;


class PropWithClassChild extends Component {
    render() {
        return (
            <>
                <h1>Props with Class Component</h1>
                <h3>Hi {this.props.name} </h3>
            </>
        )
    }
}