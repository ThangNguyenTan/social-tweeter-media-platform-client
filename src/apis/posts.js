import { api } from "../config";

export const fetchPosts = async () => {
    const response = await api.get(`/api/posts`);
    return response.data;
}