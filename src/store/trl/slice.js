import { createSlice } from '@reduxjs/toolkit'

const trlSlice = createSlice({
  name: 'trl',
  initialState: {
    data: null,
  },
  reducers: {
    setTrl(state, action) {
      state.data = action.payload.data
    },
  },
})

export const trlActions = trlSlice.actions

export default trlSlice
