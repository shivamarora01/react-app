import { useState } from "react";

//useDispatch is a wireup that how redux will be used in react
import { useDispatch } from "react-redux";

import {addTodo} from '../features/todo/todoSlice';

const [input,setInput] = useState('')
const dispatch = useDispatch();

const addTodoHandler = (e) => {
    //taaki deafault submit na hojaye
    e.preventDefault();
    //dispatch reducer ko use karte huye 
    //store m values change krta hai
    dispatch(addTodo(input))
    setInput('')
}

