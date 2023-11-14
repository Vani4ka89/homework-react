import React from 'react';

import {CarForm, Cars} from "../../components";
import css from './CarsPage.module.css';

const CarsPage = () => {
    return (
        <div className={css.CarsPage}>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};