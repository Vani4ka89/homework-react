import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "../Character/Character";
import {characterActions} from "../../../redux";

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const {ids} = useParams();

    useEffect(() => {
        dispatch(characterActions.getByIds({ids}));
    }, [ids, dispatch]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};