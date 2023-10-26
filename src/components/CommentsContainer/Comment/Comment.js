import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;


    return (
        <div onClick={() => navigate('/posts', {state: postId})}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};