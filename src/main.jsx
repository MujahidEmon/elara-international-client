import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Layout/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ProductCart from './Pages/ProductCart/ProductCart.jsx'
// import Registration from './Pages/Registration/Registration.jsx'
// import Login from './Pages/Login/Login.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Registration/Register.jsx'
import AllProducts from './Pages/AllProducts/AllProducts.jsx'
import { Toaster } from 'react-hot-toast'

// routing section
const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ({params}) => fetch('http://localhost:5000/products')
      },
      {
        path:'/cart',
        element: <ProductCart></ProductCart>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/allProducts',
        element: <AllProducts></AllProducts>,
        loader: ({params}) => fetch('http://localhost:5000/products')
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
