import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stilini dahil ediyoruz

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


export const GlobalContext = createContext([]);
const Master = () =>  {
    const [appData,setAppData]  = useState({routeName : 'index'});

    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS'i başlatıyoruz
    }, []);

    return (
        <GlobalContext.Provider value={{appData,setAppData}}>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </Router>
        </GlobalContext.Provider>
    );
}

export default Master;
