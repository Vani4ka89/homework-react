import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: {}
})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions
}

export {
    episodeReducer,
    episodeActions
}