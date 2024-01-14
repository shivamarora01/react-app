import {createSlice,nanoid} from '@reduxjs/toolkit'

//initial state created
const initialState = {
    todos:[{
        id: 1,
        text: "Hi Shivam"
    },{
        id: 2,
        text: "Hi Arora"
    }]
}

// Why we use createSlice in Redux?
// The createSlice() function is used to simplify and reduce the code 
// needed when creating application slices. It takes an object of options
// as an argument. The options are: name : the slice name used as the prefix 
// of the generated action.

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        addTodo: (state,action)  => {
            const newTodo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions // why this ?

export default todoSlice.reducer