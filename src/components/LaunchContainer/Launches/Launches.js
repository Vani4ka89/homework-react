import React, {useEffect, useState} from 'react';

import {axiosService} from "../../../services/axios.service";
import {urls} from "../../../constants/urls";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css';

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axiosService.get(urls.launches.base).then(({data}) => {
            const filteredLaunches = data.filter(value => value.launch_year !== '2020');
            setLaunches(filteredLaunches);
        })
    }, []);

    return (
        <div className={css.Launches}>
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    )
}

export {
    Launches
}