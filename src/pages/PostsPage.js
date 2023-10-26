import React from 'react';
import {Posts} from "../components/PostsContainer/Posts/Posts";
import {useLocation} from "react-router-dom";

const PostsPage = () => {
    const {state: postId} = useLocation();

    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};

export {PostsPage};