import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';
import {episodeActions} from "../../../redux";

const Episodes = () => {
    const {episodes, prev, next} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page');

    useEffect(() => {
        dispatch(episodeActions.getAll({page}));
    }, [page, dispatch]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${page - 1}`);
            return prev;
        })
    };

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', `${page + 1}`);
            return prev;
        })
    };

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.button}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};