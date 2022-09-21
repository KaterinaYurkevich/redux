import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {v4} from "uuid";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');

            if (!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async function (title, text, { rejectWithValue, dispatch }) {
        try {
            const post = {
                userId: 1,
                id: v4(),
                title: title,
                body: text,
            }

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(post)
            });

            if (!response.ok) {
                throw new Error("Can't add post. Server error");
            }

            const data = await response.json();
            dispatch(addNews(data))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const changeNews = createAsyncThunk(
    'posts/changeNews',
    async function (id, title, text, { rejectWithValue, dispatch, getState }) {
        const post = getState().posts.posts.find(post => post.id === id);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    title: 'New title',
                    body: 'Some news',
                })
            });

            if (!response.ok) {
                throw new Error("Can't change news. Server error");
            }

            dispatch(updateNews({ id, title, text }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteNews = createAsyncThunk(
    'posts/deleteNews',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error("Can't delete news. Server error");
            }

            dispatch(removeNews({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {
        addNews(state, action) {
            state.posts.push(action.payload)
        },
        updateNews(state, action) {
            const newPost = state.posts.find(post => post.id === action.payload.id);
            newPost.title = action.payload.title;
            newPost.body = action.payload.text;
        },
        removeNews(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const { addNews, updateNews, removeNews } = postSlice.actions;

export default postSlice.reducer;