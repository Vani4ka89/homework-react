import React, {useEffect} from 'react';

import {Episodes} from "../components";
import {useChapter} from "../hooks/useChapter.hook";

const EpisodesPage = () => {
    const {setChapter} = useChapter();

    useEffect(() => {
        setChapter(null);
    }, [setChapter]);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};