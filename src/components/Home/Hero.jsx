import React from 'react'

const Hero = () => {
  return (
    <>

<div className="flex flex-col md:flex-row">

<div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 gap-6">
  <p className="text-xl animate-bounce text-white bg-rose-500 overflow-hidden px-4 py-2 cursor-pointer shadow-lg shadow-rose-500 rounded-full ">Welcome</p>
  <h1 className='text-4xl md:text-5xl text-wrap text-center font-extrabold overflow-hidden'>Your Home Away from <br /> Home.</h1>
  <p className='text-center text-lg text-gray-600'>At Our <span className='text-rose-500 font-bold'>Hotel</span>, your comfort is our priority. Enjoy top-notch amenities and attentive service in the heart of <span className='text-rose-500 font-bold'>Himalayas</span>, perfect for both relaxation and adventure.</p>
</div>

<div className="w-full md:w-1/2 p-4">
  <img className="object-cover w-full h-auto md:w-[750px] md:h-auto md:mt-12 rounded-xl brightness-125" src="/images/hotel 1.jpg" alt="Hotel" />
</div>
</div>
      
    </>
  )
}

export default Hero
