// authApiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authApiSlice = createSlice({
    name: 'authApi',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        setApiLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setApiError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearApiState: (state) => {
            state.loading = false;
            state.error = null;
        },
    },
});

export const { setApiLoading, setApiError, clearApiState } = authApiSlice.actions;
export default authApiSlice.reducer;
