import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Contact = () => {

    const navigate = useNavigate();
    const [count,setCount] = useState(0);

    const buttonIncClicked = () => {
        setCount(count + 1);
    }
    const buttonDecClicked = () => {
        setCount(count -1);
    }

    return (
        <div>
            <p>İletişim</p>
            <p>{count}</p>
            <button onClick={buttonIncClicked}>arttır</button>
            <button onClick={buttonDecClicked}>azalt</button>
            <button onClick={() => navigate('/')}>contact'a git</button>
        </div>
    );
}

export default Contact;
