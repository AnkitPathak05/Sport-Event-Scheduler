import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import './App.css'
import { routes } from './routes/Routes'
import {Layout} from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: routes, 
  },
]);

function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
