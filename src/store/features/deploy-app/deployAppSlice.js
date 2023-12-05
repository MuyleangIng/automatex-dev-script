import {createSlice} from "@reduxjs/toolkit";

const deployAppSlice = createSlice({
    name: 'survey',
    initialState: {
        deploymentApp: null,
        isLoading: true,
    },
    reducers: {
        addDeploymentApp(state, action) {
            state.survey = action.payload
        },
        setIsLoading: (state,action) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    addDeploymentApp
} = deployAppSlice.actions

export default deployAppSlice.reducer

export const selectDeploymentApp = state => state.deploymentApp.deploymentApp
