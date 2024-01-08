import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AddTodo2 from '../components/AddTodo2'
import { Provider } from 'react-redux'
import Todos2 from '../components/Todos2'
import {store} from '../app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <AddTodo2/>
    <Todos2/>
  </Provider>,
)
