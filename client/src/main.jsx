
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>

)
