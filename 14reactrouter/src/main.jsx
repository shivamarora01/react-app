import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import {OrderStat} from './components/OrderStat.jsx'
import Product from './components/Product.jsx'
import {Feature} from './components/Feature.jsx'
import {Footer} from './components/Footer.jsx'
import { Home } from './components/Home.jsx'


const rti = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
       {/* <Route path='' element = {<Home/>}/> */}
      <Route path='' element = {<Product/>}/>
      <Route path='orderstat' element = {<OrderStat/>}/>
      <Route path='footer' element = {<Footer/>}/>
      <Route path='feature' element = {<Feature/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={rti}/>
  </React.StrictMode>,
)
