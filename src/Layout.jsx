import React from 'react'
import Header from './components/Global/Header.jsx'
import Footer from './components/Global/Footer.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './components/Global/Loading.jsx'

const Layout = () => {

//useNavigation nad useNavigate both are different 
//We use useNavigation hook to add loader to screen to globally instead of defining them at every page

const navigation = useNavigation()
console.log(navigation);

if(navigation.state === "loading") return <Loading/>

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default Layout
