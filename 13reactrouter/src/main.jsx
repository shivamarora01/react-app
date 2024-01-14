import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './pages/Layout.jsx'
import FAQ from './pages/FAQ.jsx'
import { Team } from './pages/Team.jsx'
import { Pricing } from './pages/Pricing.jsx'
import { TestimonialThree } from './pages/Testmoni.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Team/>}/>
      <Route path='faq' element = {<FAQ/>}/>
      <Route path='pricing' element = {<Pricing/>}/>
      <Route path='testmoni' element = {<TestimonialThree/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  
    router = {router} />
  </React.StrictMode>,
)
