import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../master";

const MouseTracker = () => {
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

    return null;
};

const Home = () => {
    const { appData, setAppData } = useContext(GlobalContext);

    useEffect(() => {
        setAppData((prevData) => ({ ...prevData, pageTitle: 'Ana Sayfa' }));
    }, [setAppData]);

    return (
        <section id="homepage">
            <div id="invertedcursor"></div>
            <MouseTracker/>
            <div data-aos="fade-left" data-aos-duration="1000" style={{backgroundColor: 'red', height: '300px'}}>
                <h1 className={'text-white bg-dark'}>DENEME DENEME DENEME</h1>
                <h1 className={'text-dark bg-white'}>DENEME DENEME DENEME</h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000"
                 style={{backgroundColor: 'blue', height: '300px'}}></div>
            <div data-aos="fade-left" data-aos-duration="1000"
                 style={{backgroundColor: 'green', height: '300px'}}></div>
        </section>
    );
};

export default Home;
