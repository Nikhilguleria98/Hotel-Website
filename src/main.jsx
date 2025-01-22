import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Forms/Contact.jsx'
import Login from './components/Forms/Login.jsx'
import Signin from './components/Forms/Signin.jsx'
import Blog from './components/Blog/Blog.jsx'
import Gallery from './components/Gallery component/Gallery.jsx'
import Room from './components/Room/Room.jsx'
import ErrorPage from './components/Global/ErrorPage.jsx'
import GalleryLayout from './components/Gallery component/GalleryLayout.jsx'
import Frontext from './components/Gallery component/Frontext.jsx'
import HotelLobby from './components/Gallery component/HotelLobby.jsx'
import Spa from './components/Gallery component/Spa.jsx'
import Pool from './components/Gallery component/Pool.jsx'
import Dining from './components/Gallery component/Dining.jsx'
import RoomDetails from './components/Room/RoomDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: 'room',
        element: <Room />
      },
      {
        path: 'room/:id',
        element: <RoomDetails />
      },
      {
        path: 'gallery',
        element: <GalleryLayout />,
        children: [
          { index: true, element: <Navigate to="front-exterior" /> },
          { path: 'front-exterior', element: <Frontext /> },
          { path: 'lobby', element: <HotelLobby /> },
          { path: 'spa', element: <Spa /> },
          { path: 'pool', element: <Pool /> },
          { path: 'dining', element: <Dining /> },
        ],
      },
      {
        path: 'blog',
        element: <Blog />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
