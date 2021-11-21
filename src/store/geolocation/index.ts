import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GeolocationInitialState = {
  position: [number, number] | null,
  center: [number, number]
}

const initialState: GeolocationInitialState = {
  position: null,
  center: [23.703875, 120.982024] // Taiwan
}

export type UpdatePayload = Partial<GeolocationInitialState>

export const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UpdatePayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.position !== undefined) {
        state.position = action.payload.position
      }
      if (action.payload.center !== undefined) {
        state.center = action.payload.center
      }
    },
    reset: state => {
      state.position = null
    }
  }
})

export const { update: geolocationUpdateAction, reset: geolocationResetAction } = geolocationSlice.actions

export default geolocationSlice.reducer