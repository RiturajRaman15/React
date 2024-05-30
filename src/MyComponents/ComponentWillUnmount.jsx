import react from "react";

export default class ComponentWillUnmount extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        console.log("Constructor");
    }

    render() {
        console.log("Render");
        return (<>
            <h1>Component Will Unmount</h1>
            <h6>Check Console</h6>
            {this.state.show ? <ComponentWillUnmountCHILD/> : null}
            <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
            <h4>Component will Unmount only executes when the component is unmounted.</h4>
        </>)
    }
}


class ComponentWillUnmountCHILD extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        return (<>
            <h2>Child Component for Component Will Unmount</h2>

        </>)
    }
}