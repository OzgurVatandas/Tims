import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AOS from 'aos';
import axiosConfig from "./src/axiosConfig";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Header from "./views/partials/Header"



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

    useEffect(() => {
        if (appData.config) {
            document.title = `${appData.config.appName} | ${appData.pageTitle || 'Ana Sayfa'}`;
        }
    }, [appData]);

    return (
        <GlobalContext.Provider value={{appData,setAppData}}>
            <Router>
                <div>
                    <Header/>
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
