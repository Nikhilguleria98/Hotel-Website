import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { TiHome } from "react-icons/ti";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram,FaSquareXTwitter,FaYoutube } from "react-icons/fa6";


import { useFormik } from 'formik';

const initialValues ={
    name:"",
    email:"",
    message:"",

};

const Contact = () => {
    const {values, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { resetForm }) => {
            console.log('Form Data:', values);
            resetForm();
        }
    });

    return (
        <section>
            <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section overflow-hidden"
                id="contact-form">
                <div className="md:w-1/2 w-full mt-10 md:mt-20 bg-rose-400 p-5 flex flex-col  rounded-lg text-gray-200">
                    <h1 className="text-2xl font-bold mb-4 md:text-left text-center">Contact Us</h1>
                    <p className="text-md">
                        We're here to assist you! If you have any questions or need assistance, please feel free to reach
                        out to us.
                    </p>
                    <span className="inline-flex mt-6 justify-center sm:justify-start">
                    </span>


                    <div className='space-y-2 '>
                    <div className='flex gap-4 '>
                    <IoMdMail className='text-lg mt-1'/>
                    <p>xyz@gmail.com</p>
                    </div>
                    <div className='flex gap-4'>
                    <LuPhoneCall className='mt-1'/>
                    <p>+91 9876543210</p>
                    </div>
                    <div className='flex gap-4'>
                    <TiHome className='mt-1 text-xl'/>
                    <p>Jawali Kangra H.P. (176023)</p>
                    </div>

                    <div className='flex gap-10 justify-center '>
                    <NavLink>
                    <ImFacebook2 className='mt-10 text-3xl hover:brightness-75 duration-200 '/>
                    </NavLink>
                    <NavLink>
                    <FaInstagram className='mt-10 text-3xl hover:brightness-75 duration-200'/>
                    </NavLink>
                    <NavLink>
                    <FaSquareXTwitter className='mt-10 text-3xl hover:brightness-75  duration-200'/>
                    </NavLink>
                    <NavLink>
                    <FaYoutube className='mt-10 text-3xl hover:brightness-75 duration-200'/>
                    </NavLink>
                    </div>
                    </div>


                </div>

                
                <div className="md:w-2/3 w-full mt-20 md:mt-0 md:pl-28">
                    <h1 className="text-2xl text-gray-800 font-bold title-font mb-4">Contact Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 py-4 text-md text-gray-900">Your Name</label>
                                <input type="text" id="name" placeholder='Enter your name' name="name" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                    value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 py-4 text-md text-gray-900">Your Email</label>
                                <input type="email" id="email" placeholder='Enter your email' name="email" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                    value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 py-4 text-md text-gray-900">Your Message</label>
                                <textarea id="message" placeholder='Enter your message...' name="message" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit'
                                className="bg-rose-400 w-full py-3 md:p-3 text-white rounded-xl focus:border border-rose-500 focus:text-rose-500 focus:bg-white duration-200">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
