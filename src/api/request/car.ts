import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../utils/axios";
import axios from "axios";
import { Bounce, toast } from "react-toastify";


export const GetCars = createAsyncThunk("Cars/GetCars", async () => {
    try {
        const { data } = await Axios.get("/api/cars")
        return data
    } catch (error) {}
})

export const GetCarById = createAsyncThunk("Cars/GetCarById", async (id: any, { rejectWithValue }) => {
    try {
        const { data } = await Axios.get(`/api/cars/${id}`)
        return data
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const Reserve = async (reservetion: {carId: any, startDate: any, endDate: any}) => {
    try {
        let { data } = await Axios.post("/api/reservations", reservetion)
        toast.success("Successfuly Rented!", {
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