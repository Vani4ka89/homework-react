import React from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../../../services";
import {carActions} from "../../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id);
        dispatch(carActions.setTrigger());
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <hr/>
        </div>
    );
};

export {Car};