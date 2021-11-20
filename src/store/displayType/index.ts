import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DisplayTypes } from '../../constants'

export type DisplayTypeState = {
  type: DisplayTypes
}

const initialState: DisplayTypeState = {
  type: DisplayTypes.Bike
}

export const displayTypeSlice = createSlice({
  name: 'displayType',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<DisplayTypeState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.type = action.payload.type
    }
  }
})

export const { update: displayTypeUpdateAction } = displayTypeSlice.actions

export default displayTypeSlice.reducer