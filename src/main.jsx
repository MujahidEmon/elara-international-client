import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Layout/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'

// routing section
const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
