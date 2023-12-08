import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlide";
import authReducer from "./features/auth/authSlice";
import deployAppReducer from "./features/deploy-app/deployAppSlice";
import {userReducer} from "@/store/features/user/userSlice";
const store = configureStore({
    reducer: {
        // reducerPath is the name of the slice default is "api"
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        deploymentApp: deployAppReducer,
        user: userReducer,
    },
    // this need for rtks query to work with cache and other stuff
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    // devTools must set to false in production
    devTools: true,
});

export default store;