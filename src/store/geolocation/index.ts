import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GeolocationInitialState = {
  position: [number, number] | null
}

const initialState: GeolocationInitialState = {
  position: null
}

export type UpdatePayload = {
  position: [number, number]
}

export const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UpdatePayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.position = action.payload.position
    },
    reset: state => {
      state.position = null
    }
  }
})

export const { update: geolocationUpdateAction, reset: geolocationResetAction } = geolocationSlice.actions

export default geolocationSlice.reducer