import { createSlice } from '@reduxjs/toolkit';

const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState: {
        email: null, // Adjusted the structure of initialState
    },
    reducers: {
        setPersonalInfo: (state, action) => {
            return action.payload; // Replace the entire state with the payload
        },
        setEmail: (state, action) => {
            state.email = action.payload; // Update only the email property
        },
    },
});

export const { setPersonalInfo, setEmail } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
export const selectPersonalInfo = (state) => state.personalInfo;
