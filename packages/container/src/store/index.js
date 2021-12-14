import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from '../features/auth/auth.slice';

const middleware = [
    ...getDefaultMiddleware(),
];


const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware,
});

export default store;