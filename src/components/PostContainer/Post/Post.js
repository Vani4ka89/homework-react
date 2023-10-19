import React from 'react';

import css from './Post.module.css';

const Post = ({post, getDetails}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>
                title:
                <h4>
                    {title}
                </h4>
            </div>
            <button className={css.btn} onClick={() => getDetails(id)}>Details</button>
        </div>
    );
};

export {Post};