import React from 'react';

import css from './Character.module.css'

const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character;

    return (
        <div className={css.wrap}>
            <h4>id: {id}</h4>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h4>{species}</h4>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};