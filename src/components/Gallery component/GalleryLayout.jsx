import React from 'react'
import Gallery from './Gallery'
import { Outlet } from 'react-router-dom'

const GalleryLayout = () => {
  return (
    <>
      <Gallery/>
      <Outlet/>
    </>
  )
}

export default GalleryLayout
