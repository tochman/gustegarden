import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  title: 'GUSTEGÅRDEN',
}
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {}
})

export default applicationSlice.reducer