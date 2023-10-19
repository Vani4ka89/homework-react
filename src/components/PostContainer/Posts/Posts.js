import React, {useEffect, useState} from 'react';

import {axiosService} from "../../../services/axios.service";
import {urls} from "../../../constants/urls";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        axiosService.get(urls.posts.base).then(({data}) => setPosts(data));
    }, []);

    const getDetails = async (postId) => {
        const {data} = await axiosService.get(urls.posts.byId(postId));
        setPostDetails(data);
    }

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <div className={css.Posts}>
                {posts.map(post => <Post key={post.id} post={post} getDetails={getDetails}/>)}
            </div>
        </div>
    );
};

export {Posts};