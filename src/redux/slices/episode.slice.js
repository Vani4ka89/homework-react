import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prev: null,
    next: null,
    chapter: null,
    errors: null
};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setChapter: (state, action) => {
            state.chapter = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, info: {prev, next}} = action.payload;
                state.episodes = results;
                state.prev = prev;
                state.next = next;
            })

            .addMatcher(isFulfilled(getAll), state => {
                state.errors = null;
            })

            .addMatcher(isRejected(getAll), (state, action) => {
                state.errors = action.payload;
            })
});

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll
};

export {
    episodeReducer,
    episodeActions
};