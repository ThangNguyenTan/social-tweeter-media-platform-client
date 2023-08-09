import { api } from "../config";

export const fetchPosts = async () => {
    const response = await api.get(`/api/posts`);
    return response.data;
}

export const createPost = async (post) => {
    const response = await api.post(`/api/posts`, post);
    return response.data;
}