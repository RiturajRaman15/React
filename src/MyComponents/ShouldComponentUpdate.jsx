import react from "react";

class ShouldComponentUpdate extends react.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("Constructor");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate", prevState);
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>Should Component Update</h1>
                <h6>Check Console</h6>
                <h3>Hello {this.state.count}</h3>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Change</button>
                <h4>Should Component update...</h4>
            </>
        )
    }
}

export default ShouldComponentUpdate;