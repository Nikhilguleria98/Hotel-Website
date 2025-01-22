import { NavLink } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    username: "",  
    password: "",
};

const LoginPage = () => {

    const { values, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    })

    return (
        <form onSubmit={handleSubmit}>

        <div className="w-screen min-h-screen flex items-center justify-center  bg-white px-6 sm:px-6 lg:px-8 mt-20">
    <div className="relative py-2 sm:max-w-xs sm:mx-auto shadow-xl shadow-rose-200 hover:shadow-rose-400">
        <div className="min-h-96 px-8 py-1 mt-4 text-left bg-white  rounded-xl ">
            <div className="flex flex-col justify-center items-center h-full select-none">
                <div className="flex flex-col items-center justify-center gap-2 mb-8">
                    <a href="https://amethgalarcio.web.app/" target="_blank">
                        <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" className="w-8" />
                    </a>
                    <p className="m-0 text-xl font-semibold text-black text-center">Login to your Account</p>
                    <span className="m-0 text-xs max-w-[90%] text-center text-black">Get started with our app, just start section and enjoy experience.
                    </span>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-lg text-gray-800 ">Username</label>
                    <input className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none dark:border-rose-500 bg-white" placeholder="Username" name='username'   value={values.username}
                                 onChange={handleChange}
                           onBlur={handleBlur}/>

                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800 ">Password</label>
                <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-rose-500 bg-white" placeholder="••••••••"  name='password' value={values.password}
                             onChange={handleChange}
                            onBlur={handleBlur}/>

            </div>
            <div className="mt-5">
                <button type='submit' className="py-2 px-8 bg-rose-500 hover:bg-rose-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center  font-semibold shadow-md  rounded-lg cursor-pointer select-none">Login</button>
            </div>
         <div className='flex mt-5 gap-4 h-fit p-2'>
         <p >Don't have an account?</p>
            <NavLink to="/Signin" className={`text-rose-500 font-bold duration-300 animate-bounce`}>
                              Sign in
                           </NavLink>
                          

         </div>
         
        </div>
        
    </div>
    
</div>
</form>
    );
};

export default LoginPage;
