"use client"

// create store here
import postReducer from '@/reducers/posts/post.reducer'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    posts: postReducer,
  }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<

    ReturnType,

    RootState,

    unknown,

    Action<string>

>;
