import React from 'react'

const HotelLobby = () => {
  return (
    <div>
      <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mt-10'>
    <div className="mx-auto max-w-screen-2xl ">
 

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
      
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/images/hotel spa.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />        
            </div>
   
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/images/swimming.jpg"  alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />
            </div>
      
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/images/pool.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />
            </div>
         
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/images/hotel dinner.jpg"  alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" /> 
            </div>
           
        </div>
    </div>
</div>
    </div>
  )
}

export default HotelLobby
