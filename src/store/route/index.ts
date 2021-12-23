import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BikeShape } from '../../service/tdxApi/types'
import { InitialState, SuccessPayload, FailurePayload } from '../types'

const initialState: InitialState<BikeShape[]> = {
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

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    request: (state, action: PayloadAction<RequestPayload | NearByRequestPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pedding = true
    },
    success: (state, action: PayloadAction<SuccessPayload<BikeShape[]>>) => {
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

export const { request: routeRequestAction, success: routeSuccessAction, failure: routeFailureAction } = routeSlice.actions

export default routeSlice.reducer