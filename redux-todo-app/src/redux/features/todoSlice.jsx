import { createSlice } from '@reduxjs/toolkit';
import {v4} from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        count: 0,
    },
    reducers: {
        addTodo(state, action) {
            state.count += 1;
            state.todos.push({
                id: v4(),
                text: action.payload.text,
                completed: false,
                count: state.count,
            });
        },
        toggleComplete(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.count -= 1;
        },
        // filterTodo(state, action) {
        //     let filteredTodos = state.todos;
        //     if (action.payload.status === 'all') {
        //         return filteredTodos
        //     } else {
        //         filteredTodos = filteredTodos.filter(todo => todo.completed === action.payload.status);
        //     }
        // },
    }
})

export const { addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;