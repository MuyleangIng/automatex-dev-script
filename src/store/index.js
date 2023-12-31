import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlide";
import authReducer from "./features/auth/authSlice";
import deployAppReducer from "./features/deploy-app/deployAppSlice";
import {userReducer} from "@/store/features/user/userSlice";
import gitSlice from "@/store/api/apiGitSlice"
import deployDbSlice from "./features/deploy-db/deployDbSlice";
import fileSlice from "@/store/features/fileupload/fileSlice";

const store = configureStore({
    reducer: {
        // reducerPath is the name of the slice default is "api"
        [apiSlice.reducerPath]: apiSlice.reducer,
        // [apiGit.reducerPath]: apiGit.reducer,
        auth: authReducer,
        deploymentApp: deployAppReducer,
        user: userReducer,
        git: gitSlice,
        deploymentDatabase: deployDbSlice,
        uploadFile: fileSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    // devTools must set to false in production
    devTools: true,
});

export default store;