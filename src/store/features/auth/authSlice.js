// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setTokens: (state, action) => {
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const { setUser, setTokens, clearUser } = authSlice.actions;
export default authSlice.reducer;
