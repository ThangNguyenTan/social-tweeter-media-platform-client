import {
    api
} from "../config";

export const likePost = async (postId) => {
    const response = await api.post(`/api/likes`, {
        postId
    });
    return response.data;
}

export const unLikePost = async (likeId) => {
    const response = await api.delete(`/api/likes/${likeId}`);
    return response.data;
}