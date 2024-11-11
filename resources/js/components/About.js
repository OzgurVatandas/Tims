import React, {useContext} from "react";
import {GlobalContext} from "./Master";
import {useNavigate} from "react-router-dom";

const About = () => {

    const {appData, setAppData} = useContext(GlobalContext);
    const navigate = useNavigate();

    const btnRouteClicked = () => {
        navigate('/contact')
    }

    return (
        <div>
            <p>Hakkımızda</p>
            <button onClick={btnRouteClicked}>Click</button>
        </div>
    );
}


export default About;
