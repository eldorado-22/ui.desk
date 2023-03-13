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
import {useState} from "react";




function App()  {
    const [dark, setDark] = useState(false)
    function getDark() {
        setDark(!dark)
    }

    return (
        <div style={{
            background: dark ? 'green' : '',
            color: dark ? 'white' : '#blue'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Routes getDark={getDark} dark={dark}>
                <Route path="/" element={<Main/>} getDark={getDark} dark={dark}/>
                <Route path="about" element={<AboutF/>} getDark={getDark} dark={dark}/>
                <Route path="testimonials" element={<HappyClient/>} getDark={getDark} dark={dark}/>
                <Route path="subscribe" element={<Subscribe/>} getDark={getDark} dark={dark}/>
                <Route path="basket" element={<Basket/>} getDark={getDark} dark={dark}/>
            </Routes>
            <Footer getDark={getDark} dark={dark}/>
        </div>
    );
}

export default App;
