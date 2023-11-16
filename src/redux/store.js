import {configureStore} from "@reduxjs/toolkit";

import {characterReducer, episodeReducer} from "./slices";

const store = configureStore({
    reducer: {
        characters: characterReducer,
        episodes: episodeReducer
    }
});

export {store};