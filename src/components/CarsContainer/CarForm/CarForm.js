import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../../services";
import {carActions} from "../../../redux";

const CarForm = () => {
    const {handleSubmit, register, setValue, reset, formState: {isValid}} = useForm();
    const {carForUpdate} = useSelector(store => store.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);


    const save = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger());
        reset();
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.setCarForUpdate(null));
        dispatch(carActions.setTrigger());
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {required: true})}/>
            <input type="text" placeholder={'price'} {...register('price', {required: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {required: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};