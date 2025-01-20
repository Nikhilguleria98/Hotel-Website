import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {


    // this hook is used go back to previous page rather than go to the home page
    const navigate = useNavigate();

    const handleGoBack=()=>{
        navigate(-1)
        // navigate()
    }
    //this hook is used to find what type of error is there

    const error = useRouteError();
    console.log(error);
    

  return (
    <div className='flex flex-col items-center justify-center h-lvh'>
        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt=""  className='h-96 w-96 bg-transparent'/>
      <p>404 error page</p>
      <button className='p-2 bg-red-600 mt-5 rounded-lg text-white' onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage
