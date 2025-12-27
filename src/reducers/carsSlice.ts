import { createSlice } from '@reduxjs/toolkit'
import { GetCarById, GetCars } from '../api/request/car'

export interface CarsState {
  isLoading: boolean,
  cars: ICar[],
  carById: any
}

export interface ICar {
    id: number,
    title: string,
    pricePerHour: number,
    description: string,
    color: string,
    tinting: boolean,
    millage: number,
    year: number,
    seats: number,
    modelId: number,
    images: [],
    carAttributes: []
}

const initialState: CarsState = {
  isLoading: false,
  cars: [],
  carById: null
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(GetCars.pending, (state) => {
        state.isLoading = true
    })
    build.addCase(GetCars.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.cars = payload
    })
    build.addCase(GetCarById.pending, (state) => {
      state.isLoading = true
      state.carById = {}
    })
    build.addCase(GetCarById.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.carById = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = carsSlice.actions

export default carsSlice.reducer