import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'config',
  initialState: {
    data: null,
  },
  reducers: {
    setConfig(state, action) {
      state.data = action.payload.data
    },
  },
})

export const configActions = configSlice.actions

export default configSlice
