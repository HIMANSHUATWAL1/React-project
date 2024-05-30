import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContectUs from './components/ContectUs/ContectUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'
/*const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'about',
        element:<About/>
      }
      ,{
        path:'contect',
        element:<ContectUs/>
      }
    ]
  }
])
*/


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contect' element={<ContectUs/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={
        // fetch request here
        githubInfoLoader}
      path='github'
       element={<GitHub/>}
       />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
