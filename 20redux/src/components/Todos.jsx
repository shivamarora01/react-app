//sab todos store dedega

import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

//how to get all todos

 const todos = useSelector(state => state.todos)
 const dispatch = useDispatch();

 //looping and showing
 //maaping
 todos.map((todo) => (
    <li key={todo.id} > {todo.text}
    <button
    onClick={() => dispatch(removeTodo(todo.id))}>X</button></li>
 ))