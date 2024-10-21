import linksReducer from '@/redux/features/links/linksSlice';
import profileReducer from '@/redux/features/profile/profileSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        links: linksReducer,
        profile: profileReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;