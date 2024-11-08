import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AOS from 'aos';
import axiosConfig from "./src/axiosConfig";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";



export const GlobalContext = createContext([]);
const Master = () =>  {
    const [appData,setAppData]  = useState({});

    useEffect(() => {
        axiosConfig.get('config').then(response => {
            setAppData({
                config : response.data.data,
                pageTitle : ''
            });
        })

        AOS.init({ duration: 1000 });
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
