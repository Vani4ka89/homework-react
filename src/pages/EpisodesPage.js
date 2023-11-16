import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {Episodes} from "../components";
import {episodeActions} from "../redux";

const EpisodesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.setChapter(null));
    }, [dispatch]);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};