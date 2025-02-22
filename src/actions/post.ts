"use client"

import { getPlaceholderPosts } from "@/services"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk("getPosts", async () => {
    const data = await getPlaceholderPosts()
    return data
})