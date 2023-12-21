import { createAsyncThunk } from '@reduxjs/toolkit';
import {baseQueryExport} from "@/store/api/apiGitSlice";
export const fetchGitProjectById = createAsyncThunk(
    'projects/fetchGitProjectById',
    async (id) => {
        const url = `${process.env.NEXT_PUBLIC_GITLAB_URL}/projects/${id}`;
        console.log('Request URL:', url);
        try {
            const response = await baseQueryExport(url, { method: 'GET' });
            console.log('Response:', response);
            const projectById = await response.data;
            console.log('Data Get project by ID :', projectById);
            return projectById;
        } catch (error) {
            console.error('Error fetching GitLab project:', error.message);
            throw error;
        }
    }
);
export const fetchProjectTree = createAsyncThunk(
    'projects/fetchProjectTree',
    async (id) => {
        const url = `${process.env.NEXT_PUBLIC_GITLAB_URL}/projects/${id}/repository/tree`;
        console.log('Request URL:', url);
        try {
            const response = await baseQueryExport(url, { method: 'GET' });
            console.log('Response list project:', response);
            const projectTree = await response.data;
            console.log('Project Tree Data:', projectTree);
            return projectTree;
        } catch (error) {
            console.error('Error fetching GitLab project tree:', error.message);
            throw error;
        }
    }
);
