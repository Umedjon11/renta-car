import axios from "axios"

export const SetToken = (token: any) => {
    const time = Date.now()

    localStorage.setItem("last_active", `${time}`)
    localStorage.setItem("access_token_time", "3300000")
    localStorage.setItem("access_token", token)
}

export const GetToken = () => {
    const token = localStorage.getItem("access_token")
    return token
}

export const GetTokenTime = () => {
    const tokenTime = localStorage.getItem("access_token_time")
    return tokenTime
}

export const SetNewTokenTime = () => {
    const tokenTime: any = GetTokenTime()
    if (tokenTime && +tokenTime <= 0) {
        localStorage.clear()
    }
    else {
        localStorage.setItem("access_token_time", `${+tokenTime-1000}`)
    }
}


export const Axios = axios.create({
    baseURL: "http://157.180.29.248:5049"
})

Axios.interceptors.request.use(
    (config) => {
        const token = GetToken()

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)