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
        element: <PrivateRoutes><ProductCart></ProductCart></PrivateRoutes>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
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
