
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'
import './index.css'

import HomePage from './Pages/HomePage.jsx'
import AuthorPage from "./Pages/AuthorPage.jsx"
// import CategoryPostPage from "./Pages/CategoryPostPage.jsx"
// import CreatePostPage from "./Pages/CreatePostPage.jsx"
// import Dashboard from "./Pages/Dashboard.jsx"
// import DeletePostPage from "./Pages/DeletePostPage.jsx"
// import EditPostPage from "./Pages/EditPostPage.jsx"
// import LoginPage from "./Pages/LoginPage.jsx"
// import LogoutPage from "./Pages/LogoutPage.jsx"
import NotFoundPage from "./Pages/NotFoundPage.jsx"
// import PostDetailsPage from "./Pages/PostDetailsPage.jsx"
// import RegisterPage from "./Pages/RegisterPage.jsx"
// import UserProfile from "./Pages/UserProfile.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/author", element: <AuthorPage /> },
      // { path: "/login", element: <CategoryPostPage /> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/login", element: <LoginPage /> },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>

)
