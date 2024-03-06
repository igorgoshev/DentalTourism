import logo from './logo.svg';
import './App.css';
import NavBarCustom from "./Components/NavBarCustom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";

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
                <NavBarCustom></NavBarCustom>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;

