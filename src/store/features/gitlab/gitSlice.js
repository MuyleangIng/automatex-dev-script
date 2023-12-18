// import { createSlice } from '@reduxjs/toolkit';
//
// const initialState = {
//     gitProjects: [],
//     project: {},
//     status: 'idle',
//     error: null
// };
//
// const gitApiSlice = createSlice({
//     name: 'gitApi',
//     initialState,
//     reducers: {
//
//         setProjectsGitLab(state, action) {
//             state.gitProjects = action.payload
//         },
//         getProjectsStart(state) {
//             state.status = 'loading';
//         },
//         getProjectsSuccess(state, action) {
//             state.status = 'succeeded';
//             // Add any fetched projects to the array
//             state.gitProjects = state.gitProjects.concat(action.payload);
//         },
//         getProjectsFailure(state, action) {
//             state.status = 'failed';
//             state.error = action.payload;
//         },
//         getProjectStart(state) {
//             state.status = 'loading';
//         },
//         getProjectSuccess(state, action) {
//             state.status = 'succeeded';
//             state.project = action.payload;
//         },
//         getProjectFailure(state, action) {
//             state.status = 'failed';
//             state.error = action.payload;
//         },
//     },
// });
//
// export const selectAllProjects = (state) => state.gitApi.gitProjects;
// export const { getProjectsStart, getProjectsSuccess, getProjectsFailure, getProjectStart, getProjectSuccess, getProjectFailure,setProjectsGitLab } = gitApiSlice.actions;
//
// export default gitApiSlice.reducer;