import React, {useContext} from "react";
import {GlobalContext} from "./Master";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const {appData, setAppData} = useContext(GlobalContext);

    return (
        <>
            <p>Anasayfa</p>
            <button onClick={() => navigate('/about')}> hakkımızdaya git</button>
        </>
    );
}

export default Home;
