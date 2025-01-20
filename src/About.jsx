import React from 'react'
// import picture from './assets/images/hotel 1.jpg';


const About = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20">

    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 gap-6">
  
      <h1 className='text-4xl md:text-5xl text-wrap text-center font-extrabold overflow-hidden'>About <span className='text-rose-500'>Us</span></h1>
      <p className='text-left text-sm md:text-lg text-gray-600'>Welcome to [Hotel Name], where your comfort and satisfaction are our top priorities. Located in the heart of [Location], our hotel offers a unique blend of luxury and warmth, providing the perfect getaway for both leisure and business travelers.

Our story began in [Year], with a vision to create a welcoming haven that captures the essence of hospitality. Since then, we have been committed to offering exceptional service, exquisite accommodations, and memorable experiences. Our dedicated team works tirelessly to ensure that every guest feels valued and cared for, making your stay not just a visit, but a cherished memory.

.</p>
    </div>

    <div className="w-full md:w-1/2 p-4">
      <img className=" object-cover w-full h-auto md:w-[750px] md:h-auto md:mt-12 rounded-xl brightness-125" src="images/hotel 1.jpg" alt="Hotel" />
    </div>
  </div>
  )
}

export default About
