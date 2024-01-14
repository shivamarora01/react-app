import {createSlice , nanoid} from '@reduxjs/toolkit';


//intial state declare
const initialState = {
    todos: [{id: 1 , text: "Hello World"}]
}


export const todoSlice = createSlice({
    //name , id , reducer => property
    name:"todo",
    initialState,
    reducers: {
        //properties and functions
        addTodo: (state,action) => {
           // action gives payload values
           const todo = {
            id: nanoid(),
            //payload ek object hai 
            //isme se further kuch bhi extract krskte hai
            text: action.payload
           }
           state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            //overwriting state by filtering
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


//two part export

//addTodo , removeTodo
//individual functionality export
//taaki compoenents m kaam aaye
export const {addTodo,removeTodo} = todoSlice.actions

//all rdeucers exported for storage 
//taki store ko pata rahe ki update kiin function se hoga
export default todoSlice.reducer