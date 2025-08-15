import { createSlice, nanoid } from "@reduxjs/toolkit";

const intitialState = {
    todos: [{ id: 1, text: "hello World" }],
}

export const todoSlice = createSlice({
    name: "todo",
    intitialState,
    reducers: {
        addTod: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload;
            })
        },

        
    }

})


export const { addTod, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;