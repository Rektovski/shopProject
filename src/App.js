import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./main/components/Header";
import Main from "./main/components/Main";
import AboutUs from "./main/components/AboutUs";
import Categories from "./main/components/Categories";
import Products from "./main/components/Products";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Header/>}>
                        <Route path={""} element={<Main/>}></Route>
                        <Route path={"/categories"} element={<Categories/>}></Route>
                        <Route path={"/categories/products"} element={<Products/>}></Route>
                        <Route path={"/aboutus"} element={<AboutUs/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
