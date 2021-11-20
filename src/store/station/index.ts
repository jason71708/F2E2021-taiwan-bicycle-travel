import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BikeStation, BikeAvailability } from '../../utils/api/types'
import { InitialState, SuccessPayload, FailurePayload } from '../types'

export type Station = BikeStation & BikeAvailability

const initialState: InitialState<Station[]> = {
  pedding: false,
  data: [],
  error: null
}

export type RequestPayload = {
  keyword: string
  city: string
}

export type NearByRequestPayload = {
  position: [number, number]
}

export const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    request: (state, action: PayloadAction<RequestPayload | NearByRequestPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pedding = true
    },
    success: (state, action: PayloadAction<SuccessPayload<(BikeStation & BikeAvailability)[]>>) => {
      state.pedding = false
      state.data = action.payload.data
      state.error = null
    },
    failure: (state, action: PayloadAction<FailurePayload>) => {
      state.pedding = false
      state.error = action.payload.error
    }
  }
})

export const { request: stationRequestAction, success: stationSuccessAction, failure: stationFailureAction } = stationSlice.actions

export default stationSlice.reducer