import './App.css'
import Nav from "./MyComponents/Nav.jsx";
import Home from "./MyComponents/Home.jsx";
import ClassComponent from "./MyComponents/ClassComponent.jsx";
import EventandFunction from "./MyComponents/EventandFunction.jsx";
import StateinFunction from "./MyComponents/StateinFunction.jsx";
import StateinClass from "./MyComponents/StateinClass.jsx";
import PropswithFunction from "./MyComponents/PropswithFunction.jsx";
import PropswithClass from "./MyComponents/PropswithClass.jsx";
import InputBox from "./MyComponents/InputBox.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HideShow from "./MyComponents/HideShow.jsx";
import Forms from "./MyComponents/Form.jsx";
import Condition from "./MyComponents/Condition.jsx";
import Functionasprop from "./MyComponents/FunctionasProp.jsx";
import Hooks from "./MyComponents/Hooks.jsx";
import Style from "./MyComponents/Style.jsx";
import Bootstrap from "./MyComponents/Bootstrap.jsx";
import UseEffect from "./MyComponents/UseEffect.jsx";
import UseMemo from "./MyComponents/UseMemo.jsx";
import UseCallBack from "./MyComponents/UseCallBack.jsx";
import ReactRedux from "./MyComponents/ReactRedux.jsx";
import ComponentDidMount from "./MyComponents/ComponentDidMount.jsx";
import ComponentDidUpdate from "./MyComponents/ComponentDidUpdate.jsx";
import ShouldComponentUpdate from "./MyComponents/ShouldComponentUpdate.jsx";
import ComponentWillUnmount from "./MyComponents/ComponentWillUnmount.jsx";
import ArrayListing from "./MyComponents/ArrayListing.jsx";
import ArrayListingWithBootstrap from "./MyComponents/ArrayListingwithBootstrap.jsx";

function App() {

    return (<>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
              integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
              crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                crossOrigin="anonymous"></script>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/classcomp"} element={<ClassComponent/>}/>
                <Route path={"/events"} element={<EventandFunction/>}/>
                <Route path={"/stateinfunc"} element={<StateinFunction/>}/>
                <Route path={"/stateinclass"} element={<StateinClass/>}/>
                <Route path={"/propsinfunc"} element={<PropswithFunction/>}/>
                <Route path={"/funcasprop"} element={<Functionasprop/>}/>
                <Route path={"/propsinclass"} element={<PropswithClass/>}/>
                <Route path={"/inputbox"} element={<InputBox/>}/>
                <Route path={"/hideshow"} element={<HideShow/>}/>
                <Route path={"/form"} element={<Forms/>}/>
                <Route path={"/condition"} element={<Condition/>}/>
                <Route path={"/hooks"} element={<Hooks/>}/>
                <Route path={"/style"} element={<Style/>}/>
                <Route path={"/bootstrap"} element={<Bootstrap/>}/>
                <Route path={"/useeffect"} element={<UseEffect/>}/>
                <Route path={"/usememo"} element={<UseMemo/>}/>
                <Route path={"/usecallback"} element={<UseCallBack/>}/>
                <Route path={"/redux"} element={<ReactRedux/>}/>
                <Route path={"/compdidmount"} element={<ComponentDidMount/>}/>
                <Route path={"/compdidupdate"} element={<ComponentDidUpdate/>}/>
                <Route path={"/shouldcompupdate"} element={<ShouldComponentUpdate/>}/>
                <Route path={"/compwillunmount"} element={<ComponentWillUnmount/>}/>
                <Route path={"/arraylisting"} element={<ArrayListing/>}/>
                <Route path={"/arraylistingwthbts"} element={<ArrayListingWithBootstrap/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App
