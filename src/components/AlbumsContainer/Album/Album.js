import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};