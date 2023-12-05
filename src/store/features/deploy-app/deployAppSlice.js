import {createSlice} from "@reduxjs/toolkit";

const deployAppSlice = createSlice({
    name: 'deploymentApp',
    initialState: {
        deploymentApp: null,
        isLoading: true,
    },
    reducers: {
        addDeploymentApp(state, action) {
            state.deploymentApp = action.payload
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

export const selectDeploymentApp = state => state.deploymentApp
console.log(selectDeploymentApp)