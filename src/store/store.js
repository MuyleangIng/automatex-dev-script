import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlide";
import authReducer from "./features/auth/authSlice";
import deployAppReducer from "./features/deploy-app/deployAppSlice";
const store = configureStore({
    reducer: {
        // reducerPath is the name of the slice default is "api"
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        deploymentApp: deployAppReducer
    },
    // this need for rtks query to work with cache and other stuff
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(apiSlice.middleware);
    // },
    // devTools must set to false in production
    devTools: true,
});

export default store;