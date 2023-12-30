import {createSlice} from "@reduxjs/toolkit";

const fileSlice = createSlice ({
    name: 'uploadFile',
    initialState: {
        fileUpload: null,
        isLoading: true,
        error: null,
        deploying: false,
    },
    reducers: {
        addUploadFile(state, action){
            state.uploadFile = action.payload
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
    addUploadFile,
    setIsLoading,
    setError,
    setDeploying
} = fileSlice.actions

export default fileSlice.reducer

export const selectUploadFile = (state) => state.uploadFile.uploadFile
export const selectIsLoading = (state) => state.uploadFile.isLoading
export const selectError = (state) => state.uploadFile.error
export const getUuid = (state) => state.uploadFile.uploadFile?.uuid