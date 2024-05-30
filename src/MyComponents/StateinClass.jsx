import {Component} from "react";

class StateinClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Rituraj",
            age: 20
        };
    }

    click = () => {
        this.setState({
            name: "Raman",
            age: 25
        });
    }

    render() {
        return (
            <>
                <h1>State in Class Component.</h1>
                <h2>{this.state.name}-{this.state.age}</h2>
                <button onClick={this.click}>Update</button>
            </>
        )
    }
}

export default StateinClass;