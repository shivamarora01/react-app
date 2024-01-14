import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home} from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Form from './components/Form/Form.jsx'
import Found from './components/Found/Found.jsx'
import NewItem from './components/NewItem/Newitem.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router = createBrowserRouter([
  //list of objects
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },{
        path:"/About",
        element: <About/>
      },{
        path:"/form",
        element: <Form/>
      },{
        path:"/found",
        element: <Found/>
      },{
        path:"/NewItem",
        element: <NewItem/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router}/>
  </Provider>,
)
