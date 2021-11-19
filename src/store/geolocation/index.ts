import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  position: [number, number] | null
}

const initialState: InitialState = {
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
      state.position = action.payload.position
    },
    reset: state => {
      state.position = null
    }
  }
})

export const { update: geolocationUpdateAction, reset: geolocationResetAction } = geolocationSlice.actions

export default geolocationSlice.reducer