// reducers.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'pwm',
  initialState: { left: 0, right: 0 },
  reducers: {
    setPwm: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setPwm } = counterSlice.actions
export default counterSlice.reducer
