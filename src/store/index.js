import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlide";
import authReducer from "./features/auth/authSlice";
import deployAppReducer from "./features/deploy-app/deployAppSlice";
import {userReducer} from "@/store/features/user/userSlice";
import apiGit from "@/store/features/gitlab/gitApiSlice";
// import gitApiReducer from "@/store/features/gitlab/gitSlice"; // import the reducer
const store = configureStore({
    reducer: {
        // reducerPath is the name of the slice default is "api"
        [apiSlice.reducerPath]: apiSlice.reducer,
        // [apiGit.reducerPath]: apiGit.reducer,
        auth: authReducer,
        deploymentApp: deployAppReducer,
        user: userReducer,
        // git: gitApiReducer,
    },
    // this need for rtks query to work with cache and other stuff
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    // devTools must set to false in production
    devTools: true,
});

export default store;