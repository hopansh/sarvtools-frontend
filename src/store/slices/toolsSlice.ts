import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export const { resetState } = toolsSlice.actions;

export default toolsSlice.reducer;
