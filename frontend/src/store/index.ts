import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import membershipReducer from './slices/membershipSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    membership: membershipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;