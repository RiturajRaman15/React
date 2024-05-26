import react from "react";

class ShouldComponentUpdate extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Constructor");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Should Component Update");
        return this.state.count < 3;
    }

    render() {
        console.log("Render");
        return (<>
            <h1>Should Component Update</h1>
            <h6>Check Console</h6>
            <h3>Hello {this.state.count}</h3>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Change</button>
            <h4>Conditional rendering of component based on state</h4>
        </>)
    }
}

export default ShouldComponentUpdate;