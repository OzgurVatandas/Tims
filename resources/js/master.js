import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AOS from 'aos';
import axiosConfig from "./src/axiosConfig";

import Home from "./views/Home";
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";
import BackgroundEffect from "./views/BackgroundEffect";



export const GlobalContext = createContext([]);
const Master = () =>  {
    const [appData,setAppData]  = useState({});

    useEffect(() => {
        axiosConfig.get('config').then(response => {
            setAppData({
                config : response.data.data,
                pageTitle : '',
                displayMode : 'light'
            });
        })

        AOS.init({ duration: 1000 });

    }, []);

    /** Mouse event tracker */
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--x', `${e.clientX + window.scrollX}px`);
            document.documentElement.style.setProperty('--y', `${e.clientY + window.scrollY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <GlobalContext.Provider value={{appData,setAppData}}>
            <Router>
                <main className="scroll-container">
                <BackgroundEffect />
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                    </Routes>
                    <Footer />
                </main>
            </Router>
        </GlobalContext.Provider>
    );
}

export default Master;
