import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Layout/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ProductCart from './Pages/ProductCart/ProductCart.jsx'

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
      {
        path:'/cart',
        element: <ProductCart></ProductCart>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
