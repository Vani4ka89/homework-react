import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";

const Posts = ({postId}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {<Post key={post.id} post={post}/>}
        </div>
    );
};

export {Posts};