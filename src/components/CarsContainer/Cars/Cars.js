import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../../redux";
import {carService} from "../../../services";

const Cars = () => {
    const {cars, trigger} = useSelector(store => store.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)));
    }, [dispatch, trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};