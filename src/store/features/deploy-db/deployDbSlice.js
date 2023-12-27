import {createSlice} from "@reduxjs/toolkit";

const deployDbSlice = createSlice ({
    name: 'deploymentDatabase',
    initialState: {
        deploymentDatabase: null,
        isLoading: true,
        error: null,
        deploying: false,
    },
    reducers: {
        addDeploymentDatabase(state, action){
            state.deploymentDatabase = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setDeploying: (state, action) => {
            state.deploying = action.payload
        }
    }
})

export const {
    addDeploymentDatabase,
    setIsLoading,
    setError,
    setDeploying
} = deployDbSlice.actions

export default deployDbSlice.reducer

export const selectDeploymentDatabase = (state) => state.deploymentDatabase.deploymentDatabase
export const selectIsLoading = (state) => state.deploymentDatabase.isLoading
export const selectError = (state) => state.deploymentDatabase.error
export const getUuid = (state) => state.deploymentDatabase.deploymentDatabase?.uuid