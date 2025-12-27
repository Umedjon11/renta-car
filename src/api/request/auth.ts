import axios from "axios"
import { SetToken } from "../../../utils/axios"
import { Bounce, toast } from "react-toastify"

//const LogInApi = import.meta.env.VITE_CLIENT_LOGIN

export const ApiLogIn = async (user: {email: string, password: string}) => {
    try {
        const { data } = await axios.post("http://157.180.29.248:5049/api/auth/login", user)
        SetToken(data)
        return data
    } catch (error: any) {
        toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}

export const ApiSignUp = async (user: {email: string, password: string, confirmPassword: string}) => {
    try {
        const { data } = await axios.post("http://157.180.29.248:5049/api/auth/register", user)
        toast.success(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return data
    } catch (error: any) {
        toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}