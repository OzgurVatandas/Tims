import React, {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {GlobalContext} from "../master";

const Home = () => {

    const {appData, setAppData} = useContext(GlobalContext);


    useEffect(() => {
        setAppData({ ...appData, pageTitle: 'Ana Sayfa' });
    }, [setAppData]);

    return (
        <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <p className={'text-center'}>Anasayfa</p>

            <div>
                <Link className={'btn btn-primary'} to={'/contact'} >İletişime Git</Link>
            </div>

        </div>
    );
}

export default Home;
