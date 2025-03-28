import { createSlice } from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: getNextId(), label: 'Laundry', complete: true},
            {id: getNextId(), label: 'Groceries', complete: false},
            {id: getNextId(), label: 'Dishesy', complete: false}
        ],
        showCompletedTodos: true, 
    },
    reducers: {
        toggleShowCompletedTodos: state => {
            state.showCompletedTodos = !state.showCompletedTodos
        },
        createNewTodo: {
            reducer(state, action) {
                state.todos.push(action.paylod)
            },
            prepare(label, complete) {
                return {
                    payload: {
                        id: getNextId(),
                        label,
                        complete
                    }
                }
            },
        },
        toggleTodo: (state, action) => {
            let todo = state.todos.find(td => td.id === action.payload)
            todo.complete = !todo.complete
        }
    }
})

export const {
    toggleShowCompletedTodos,
    createNewTodo,
    toggleTodo,
} = todoSlice.actions

export default todoSlice.reducer