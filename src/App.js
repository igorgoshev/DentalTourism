import logo from './logo.svg';
import './App.css';
import NavBarCustom from "./Components/NavBarCustom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Appointment from "./Pages/Appointment";
import Travel from "./Pages/Travel";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import "./CSS/App.css"
import {UserProvider} from "./UserContext";
import Patients from "./Pages/Patients";

function App() {
    return (
        <>
            {/*<div className="App">*/}

            {/*    <header className="App-header">*/}
            {/*        <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*        <p>*/}
            {/*            Edit <code>src/App.js</code> and save to reload.*/}
            {/*        </p>*/}
            {/*        <a*/}
            {/*            className="App-link"*/}
            {/*            href="https://reactjs.org"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*            Learn React*/}
            {/*        </a>*/}
            {/*    </header>*/}
            {/*</div>*/}


            <div className="App">
                {/*<HomePage></HomePage>*/}
                {/*  <AdminPage></AdminPage>*/}
                <UserProvider>
                    <NavBarCustom></NavBarCustom>
                    <hr className="m-0 shadow"/>

                    <div className="app-container">
                        <BrowserRouter>
                            <Routes>
                                <Route path={"/"} element={<Home/>}/>
                                <Route path={"/about"} element={<AboutUs/>}/>
                                <Route path={"/contact"} element={<Contact/>}/>
                                <Route path={"/services"} element={<Services/>}/>
                                <Route path={"/appointment"} element={<Appointment/>}/>
                                <Route path={"/travel"} element={<Travel/>}/>
                                <Route path="/signup" element={<Signup/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/patients" element={<Patients/>}/>
                            </Routes>
                        </BrowserRouter>

                    </div>
                    <Footer/>

                </UserProvider>
            </div>
        </>
    );
}

export default App;

