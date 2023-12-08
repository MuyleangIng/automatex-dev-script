
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: (state) => {
            return initialState;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user;
