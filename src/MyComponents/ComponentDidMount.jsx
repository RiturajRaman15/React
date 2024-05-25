import react from "react";

class ComponentDidMount extends react.Component {

    constructor() {
        super();
        this.state = {
            name: "Rituraj"
        }
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("ComponentDidMount");
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>Component Did Mount</h1>
                <h6>Check Console</h6>
                <h3>Hello {this.state.name}</h3>
                <button onClick={() => this.setState({name: "Raman"})}>Change</button>
                <h4>Component did mount only executes when the component gets mounted/loaded/reloaded.</h4>
            </>
        )
    }
}

export default ComponentDidMount;