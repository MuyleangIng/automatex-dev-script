import {createSlice} from "@reduxjs/toolkit";

const deployAppSlice = createSlice({
    name: 'deploymentApp',
    initialState: {
        deploymentApp: null,
        isLoading: true,
        error: null,
        deploying: false,
    },
    reducers: {
        addDeploymentApp(state, action) {
            state.deploymentApp = action.payload
        },
        setIsLoading: (state,action) => {
            state.isLoading = action.payload
        },
        setError: (state,action) => {
            state.error = action.payload
        },
        setDeploying: (state,action) => {
            state.deploying = action.payload
        }
    }
})

export const {
    addDeploymentApp,
    setIsLoading,
    setError,
    setDeploying
} = deployAppSlice.actions

export default deployAppSlice.reducer

export const selectDeploymentApp = (state) => state.deploymentApp.deploymentApp
export const selectIsLoading = (state) => state.deploymentApp.isLoading
export const selectError = (state) => state.deploymentApp.error
export const getUuid = (state) => state.deploymentApp.deploymentApp?.uuid