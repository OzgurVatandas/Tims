import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Contact = () => {

    const navigate = useNavigate();
    const [count,setCount] = useState(0);


    const buttonClicked = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={buttonClicked}>arttır</button>
            <button onClick={() => navigate('/')}>contact'a git</button>
        </div>
    );
}

export default Contact;
