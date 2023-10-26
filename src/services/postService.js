import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getById: (postId) => axiosService.get(urls.posts.byId(postId))
}

export {
    postService
}