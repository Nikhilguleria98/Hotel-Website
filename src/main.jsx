import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'
import Signin from './Signin.jsx'
import Blog from './Blog.jsx'
import Gallery from './Gallery.jsx'
import Room from './Room.jsx'
import ErrorPage from './ErrorPage.jsx'
import GalleryLayout from './GalleryLayout.jsx'
import Frontext from './Gallery component/Frontext.jsx'
import HotelLobby from './Gallery component/HotelLobby.jsx'
import Spa from './Gallery component/Spa.jsx'
import Pool from './Gallery component/Pool.jsx'
import Dining from './Gallery component/Dining.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
     path:"",
     element:<Home/>
      },
      {
        path:"about",
        element:<About/>
         },
         {
          path:"contact",
          element:<Contact/>
           }, 
           {
            path:"login",
            element:<Login/>
             },
             {
              path:"signin",
              element:<Signin/>
               },
               {
                path:"room",
                element:<Room/>
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
                    path:"blog",
                    element:<Blog/>
                     },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
