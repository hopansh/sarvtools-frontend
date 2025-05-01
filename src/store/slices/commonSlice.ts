import { createSlice } from '@reduxjs/toolkit';
export interface CommonState {}

const initialState: CommonState = {};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export const { resetState } = commonSlice.actions;

export default commonSlice.reducer;
