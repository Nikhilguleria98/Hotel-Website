import { NavLink } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    fullname: "",  
    email: "",  
    phone: "",  
    password: "",
    confirm: "",
};

const Signin = () => {

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
    <div className="relative py-2 sm:mx-auto shadow-xl shadow-rose-200 hover:shadow-rose-400 px-3">
        <div className="min-h-96 px-8 py-1 mt-4 text-left bg-white  rounded-xl ">
            <div className="flex flex-col justify-center items-center h-full select-none">
                <div className="flex flex-col items-center justify-center gap-2 mb-8">
             
                    <p className="m-0 text-xl font-semibold text-black text-center">Create your Account</p>
               
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-lg text-gray-800 ">Username</label>
                    <input className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none dark:border-rose-500 bg-white" placeholder="Username" name='fullname'   value={values.username}
                                 onChange={handleChange}
                           onBlur={handleBlur}/>

                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800 ">Email</label>
             <div className='flex gap-2'>
             <input type="email" className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none border-rose-500 bg-white" placeholder="Enter your email"  name='email' value={values.email}
                             onChange={handleChange}
                            onBlur={handleBlur}/>
                         
             </div>

            </div>
            <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800 ">Phone No.</label>
                <input type="tel" className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none border-rose-500 bg-white" placeholder="Phone no."  name='phone' value={values.phone}
                             onChange={handleChange}
                            onBlur={handleBlur}/>

            </div>
        <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800 ">Password</label>
             <div className='flex gap-2'>
             <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none border-rose-500 bg-white" placeholder="password"  name='password' value={values.password}
                             onChange={handleChange}
                            onBlur={handleBlur}/>
                               <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-md w-full outline-none border-rose-500 bg-white" placeholder="confirm password"  name='confirm' value={values.confirm}
                             onChange={handleChange}
                            onBlur={handleBlur}/>
             </div>

            </div>
            <div className="mt-5">
                <button type='submit' className="py-2 px-8 bg-rose-500 hover:bg-rose-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center  font-semibold shadow-md  rounded-lg cursor-pointer select-none">Create Account</button>
            </div>
         <div className='flex mt-5 justify-between h-fit p-2 '>
         <p >Already have an account?</p>
            <NavLink to="/Login" className={`text-rose-500 font-bold duration-300 animate-bounce text-center`}>
                              Log in
                           </NavLink>
                          

         </div>
         
        </div>
        
    </div>
    
</div>
</form>
    );
};

export default Signin;
