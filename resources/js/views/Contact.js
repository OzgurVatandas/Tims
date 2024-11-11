import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {GlobalContext} from "../master";


const Contact = () => {

    const {appData, setAppData} = useContext(GlobalContext);


    useEffect(() => {
        setAppData({ ...appData, pageTitle: 'Contact' });
    }, [setAppData]);

    return (
        <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <p className={'text-center'}>Contact</p>

            <div>
                <Link className={'btn btn-primary'} to={'/about'} >Hakkımzdaya Git</Link>
            </div>

        </div>
    );
}

export default Contact;
