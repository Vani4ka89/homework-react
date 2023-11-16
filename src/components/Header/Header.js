import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const {chapter} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            {chapter ? <h1>{chapter}</h1> :
                <h1>The Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};