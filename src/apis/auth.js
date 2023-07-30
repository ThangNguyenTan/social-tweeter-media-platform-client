import axios from "axios";
import {
    SERVER_URL
} from "../constants";

export const signup = async ({
    email,
    password
}) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/auth/signup`, {
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const signin = async ({
    email,
    password
}) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/auth/login`, {
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const signinGoogle = async () => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/auth/google`);

        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}