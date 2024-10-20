import linksReducer from '@/redux/features/links/linksSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        links: linksReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;