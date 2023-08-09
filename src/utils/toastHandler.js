import {
    toast
} from "react-toastify"

export const handleToast = (status, message) => {
    toast[status](message, {
        toastId: `${status}-1`,
    });
}