import React, {useContext} from "react";
import {GlobalContext} from "./Master";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const {appData, setAppData} = useContext(GlobalContext);

    return (
        <>
            <div data-aos="fade-left" className={'w-100 '} style={{'height': '300px', 'backgroundColor': 'red'}}>

            </div>
            <div data-aos="fade-right" className={'w-100 '} style={{'height': '300px', 'backgroundColor': 'blue'}}>

            </div>
            <div className={'w-100 '} style={{'height': '300px', 'backgroundColor': 'green'}}>

            </div>
        </>
    );
}

export default Home;
