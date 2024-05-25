export default function ReactRedux() {
    return (
        <>
            <div style={{border: '1px solid black', margin: '10px'}}>
                <h1>React Redux</h1>
                <h3>1. Install Redux <code>npm install redux</code></h3>
                <h3>2. Install react-redux <code>npm install react-redux</code></h3>
                <h3>3. Create Folder Structure</h3>
                <ul>
                    <li>MyComponents</li>
                    <ul>
                        <li>ReduxComponent.jsx</li>
                    </ul>
                </ul>
                <ul>
                    <li>MyContainer</li>
                    <ul>
                        <li>ReduxContainer.jsx : Connect Component with App through Container(i.e, react to redux)</li>
                    </ul>
                </ul>
                <ul>
                    <li>MyServices</li>
                    <ul>
                        <li>Actions</li>
                        <ul>
                            <li>Actions.jsx</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Reducers</li>
                        <ul>
                            <li>Reducers.jsx</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Constants.jsx</li>
                    </ul>
                </ul>
                <h3>4. Create Store</h3>
                <h3>5. Add provider</h3>
            </div>
        </>
    )
}