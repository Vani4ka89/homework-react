import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters: [],
    errors: null
};

const getByIds = createAsyncThunk(
    'characterSlice/getByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const characterSlice = createSlice({
    name: 'characterSlice',
    reducers: {},
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, action) => {
                state.characters = action.payload;
            })

            .addMatcher(isRejected(getByIds), (state, action) => {
                state.errors = action.payload;
            })

            .addMatcher(isFulfilled(getByIds), state => {
                state.errors = null;
            })
});

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {
    ...actions,
    getByIds
};

export {
    characterReducer,
    characterActions
};