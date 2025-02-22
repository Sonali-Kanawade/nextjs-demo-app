"use client";
import { getPosts } from '@/actions/post'
import { createSlice } from '@reduxjs/toolkit'

interface PostType {
    id: string;
    title: string;
    userId: string;
}

const initialState = {
    posts: [] as PostType[]
};

const postReducer = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            return {
                ...state,
                posts: [...action.payload]
            };
        });
    }
});

export const { getPost } = postReducer.actions
export default postReducer.reducer