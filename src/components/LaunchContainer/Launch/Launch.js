import React from 'react';

import css from './Launch.module.css';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div className={css.Launch}>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <div>{mission_patch_small}</div>
        </div>
    );
};

export {Launch};