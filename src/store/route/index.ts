import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BikeShapeSorted } from '../../service/tdxApi/types'
import { InitialState, SuccessPayload, FailurePayload } from '../types'

const initialState: InitialState<BikeShapeSorted[]> & { current: BikeShapeSorted | null } = {
  pedding: false,
  data: [],
  error: null,
  current: null
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
    request: (state, action: PayloadAction<RequestPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pedding = true
    },
    success: (state, action: PayloadAction<SuccessPayload<BikeShapeSorted[]>>) => {
      state.pedding = false
      state.data = action.payload.data
      state.error = null
    },
    failure: (state, action: PayloadAction<FailurePayload>) => {
      state.pedding = false
      state.error = action.payload.error
    },
    clear: (state, action: PayloadAction) => {
      state.data = []
      state.pedding = false
      state.error = null
      state.current = null
    },
    setCurrent: (state, action: PayloadAction<{ route: BikeShapeSorted }>) => {
      state.current = action.payload.route
    }
  }
})

export const {
  request: routeRequestAction,
  success: routeSuccessAction,
  failure: routeFailureAction,
  clear: routeClearAction,
  setCurrent: routeSetCurrent
} = routeSlice.actions

export default routeSlice.reducer