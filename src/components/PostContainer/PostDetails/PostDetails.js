import React from 'react';

import css from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;

    return (
        <div className={css.PostDetails}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};