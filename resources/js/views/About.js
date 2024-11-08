import React, {useContext, useEffect} from "react";
import {GlobalContext} from "../master";
import {Link} from "react-router-dom";

const About = () => {


    const {appData, setAppData} = useContext(GlobalContext);


    useEffect(() => {
        setAppData({ ...appData, pageTitle: 'About Us' });
    }, [setAppData]);

    return (
        <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <p className={'text-center'}>Hakkımızda</p>

            <div>
                <Link className={'btn btn-primary'} to={'/contact'} >Anasayfa'ya Git</Link>
            </div>

        </div>
    );
}


export default About;
