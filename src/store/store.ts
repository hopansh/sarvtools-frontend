import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/commonSlice';
import toolsReducer from './slices/toolsSlice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    tools: toolsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
