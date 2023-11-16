import React from 'react';
import {useNavigate} from "react-router-dom";

import {Characters} from "../components";

const CharactersPage = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={back}>back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};