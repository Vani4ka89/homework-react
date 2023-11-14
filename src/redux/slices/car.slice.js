import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        setTrigger: state => {
            state.trigger = !state.trigger;
        }
    }
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
};

export {
    carReducer,
    carActions
};