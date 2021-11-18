import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BikeStation } from '../../utils/api/types'
import { InitialState, SuccessPayload, FailurePayload } from '../types'

const initialState: InitialState<BikeStation[]> = {
  pedding: false,
  data: [],
  error: null
}

export type RequestPayload = {
  keyword: string
  city: string
}

export const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    request: (state, action: PayloadAction<RequestPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('reducers.request')
      state.pedding = true
    },
    success: (state, action: PayloadAction<SuccessPayload<BikeStation[]>>) => {
      console.log('reducers.success')
      console.log(action)
      state.pedding = false
      state.data = action.payload.data
      state.error = null
    },
    failure: (state, action: PayloadAction<FailurePayload>) => {
      state.error = action.payload.error
    }
  }
})

export const { request: stationRequestAction, success: stationSuccessAction, failure: stationFailureAction } = stationSlice.actions

export default stationSlice.reducer