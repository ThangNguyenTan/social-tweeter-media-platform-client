import { api } from "../config";

export const getMyProfile = async () => {
    const response = await api.get(`/api/profile/me`);
    return response.data;
}