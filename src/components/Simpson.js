import React from 'react';

import css from './Simpson.module.css'

const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;

    return (
        <div className={css.wrap}>
            <h2>{name} {surname}</h2>
            <h4>{age} years old</h4>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {Simpson};