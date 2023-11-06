import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "@/store/apiSlide";
const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    devTools: true,
});

export default store;