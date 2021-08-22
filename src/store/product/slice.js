import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload.data
    },
  },
})

export const productActions = productSlice.actions

export default productSlice
