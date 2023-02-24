import './App.css';
import './styles/style.scss'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import {Routes, Route} from "react-router-dom";
import AboutF from "./components/AboutF/aboutF";
import Main from "./pages/home/main";
import HappyClient from "./components/HappyClients/happyClient";
import Subscribe from "./components/Subscribe/subscribe";
import Basket from "./pages/basket/basket";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="about" element={<AboutF/>}/>
                <Route path="testimonials" element={<HappyClient/>}/>
                <Route path="subscribe" element={<Subscribe/>}/>
                <Route path="basket" element={<Basket/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
