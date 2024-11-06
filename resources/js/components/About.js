import React, {useContext} from "react";
import {GlobalContext} from "./Master";

const About = () => {

    const {appData, setAppData} = useContext(GlobalContext);


    const btnRouteClicked = () => {
        setAppData({...appData, routeName : 'aboutUs'});
    }

    return (
        <div>
            <p>{JSON.stringify(appData)}</p>

            <button onClick={btnRouteClicked}>Click</button>
        </div>
    );
}


export default About;
