
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'
import './index.css'

import HomePage from './Pages/HomePage.jsx'
import AuthorsPage from "./Pages/AuthorsPage.jsx"
import CategoryPostsPage from "./Pages/CategoryPostsPage.jsx"
import CreatePostPage from "./Pages/CreatePostPage.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import DeletePostPage from "./Pages/DeletePostPage.jsx"
import EditPostPage from "./Pages/EditPostPage.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import LogoutPage from "./Pages/LogoutPage.jsx"
import NotFoundPage from "./Pages/NotFoundPage.jsx"
import PostDetailsPage from "./Pages/PostDetailsPage.jsx"
import RegisterPage from "./Pages/RegisterPage.jsx"
import UserProfile from "./Pages/UserProfile.jsx"
import AuthorPostsPage from './Pages/AuthorPostsPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "authors", element: <AuthorsPage /> },
      { path: "posts/categories/:category", element: <CategoryPostsPage /> },
      { path: "posts/:id", element: <PostDetailsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "logout", element: <LogoutPage /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "posts/users/:id", element: <AuthorPostsPage /> },
      { path: "posts/:id/edit", element: <EditPostPage /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "create", element: <CreatePostPage /> },
      { path: "delete/:id", element: <DeletePostPage /> }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
