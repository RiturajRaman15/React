import {Link} from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div>
                    <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/classcomp">Class Component</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events & Functions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stateinfunc">State with Function</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stateinclass">State with Class</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/propsinfunc">Props with Function</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/funcasprop">Function as Props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/propsinclass">Props with Class</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/inputbox">Input Box</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hideshow">Toggle</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/condition">Condition</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/hooks">Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/style">Style</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bootstrap">Bootstrap</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/useeffect">useEffect</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usememo">useMemo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usecallback">useCallBack</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/redux">React Redux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/compdidmount">Component Did Mount</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/compdidupdate">Component Did Mount</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shouldcompupdate">Should Component Update</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/compwillunmount">Component Will Unmount</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/arraylisting">Array Listing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/arraylistingwthbts">Array Listing with Bootstrap</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/highordercomp">Higher Order Component</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;