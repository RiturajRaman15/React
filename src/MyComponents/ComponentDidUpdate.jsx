import react from "react";

class ComponentDidUpdate extends react.Component {

    constructor(props) {
        super(props);
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
                <h1>Component Did Update</h1>
                <h6>Check Console</h6>
                <h3>Hello {this.state.count}</h3>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Change</button>
                <h4>Component did update only executes when the component gets updated.</h4>
            </>
        )
    }
}

export default ComponentDidUpdate;