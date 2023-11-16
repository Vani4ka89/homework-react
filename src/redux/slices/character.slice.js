import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: {}
})

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {
    ...actions
}

export {
    characterReducer,
    characterActions
}