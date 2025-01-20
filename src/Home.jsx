import React from 'react';
import { Link } from 'react-router-dom';

import picture from './assets/images/hotel 1.jpg';
import hotelspa from './assets/images/hotel spa.jpg';
import pool from './assets/images/pool.jpg';
import dinner from './assets/images/hotel dinner.jpg';
import swimming from './assets/images/swimming.jpg';
import hotelpic from './assets/images/hotel pic.jpg';
import hotelrooms1 from './assets/images/hotel room 1.jpg';
import { NavLink } from 'react-router-dom';
import { FaSpa } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaPersonSwimming } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="mt-16">
      <div className="flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 gap-6">
          <p className="text-xl animate-bounce text-white bg-rose-500 overflow-hidden px-4 py-2 cursor-pointer shadow-lg shadow-rose-500 rounded-full ">Welcome</p> 
          <h1 className='text-4xl md:text-5xl text-wrap text-center font-extrabold overflow-hidden'>Your Home Away from <br /> Home.</h1>
          <p className='text-center text-lg text-gray-600'>At Our <span className='text-rose-500 font-bold'>Hotel</span>, your comfort is our priority. Enjoy top-notch amenities and attentive service in the heart of <span  className='text-rose-500 font-bold'>Himalayas</span>, perfect for both relaxation and adventure.</p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img className="object-cover w-full h-auto md:w-[750px] md:h-auto md:mt-12 rounded-xl brightness-125" src={picture} alt="Hotel" />
        </div>
      </div>


      <div>
        <h2 className='text-center md:mt-20 mt-10 text-4xl overflow-hidden'>Our <span className='text-rose-500'>Services</span></h2>
 
 
 <div className='flex justify-center gap-7 flex-wrap p-5 md:mt-20 mt-10'>

         <div className='h-fit w-72  rounded-lg hover:shadow-lg hover:shadow-rose-500 bg-rose-300 duration-200 cursor-pointer'>
  <div className='flex items-start p-5 gap-12'>
  <FaSpa className='text-2xl text-green-500' />
  <p className='text-lg font-semibold text-gray-200'>SPA & WELLNESS</p>
  </div>
       <p className='p-4 text-center text-gray-100'>Open daily</p>
         </div>

         <div className='h-fit w-72  rounded-lg hover:shadow-lg hover:shadow-rose-500 bg-rose-300 duration-200 cursor-pointer'>
  <div className='flex items-start p-5 gap-9'>
  <PiForkKnifeBold  className='text-3xl font-extrabold text-blue-700' />
  <p className='text-lg font-semibold text-gray-200'>TOP RESTAURANT</p>
  </div>
       <p className='p-4 text-center text-gray-100'>Breakfast & Dinner</p>
         </div>
         <div className='h-fit w-72  rounded-lg hover:shadow-lg hover:shadow-rose-500 bg-rose-300 duration-200 cursor-pointer'>
  <div className='flex items-start p-5 gap-12'>
  <BsSuitcaseLgFill  className='text-2xl text-gray-700' />
  <p className='text-lg font-semibold text-gray-200'>BEST SUITES</p>
  </div>
       <p className='p-4 text-center text-gray-100'>Cool view</p>
         </div>

         <div className='h-fit w-72  rounded-lg hover:shadow-lg hover:shadow-rose-500 bg-rose-300 duration-200 cursor-pointer'>
  <div className='flex items-start p-5 gap-9'>
  < FaPersonSwimming className='text-3xl text-blue-500' />
  <p className='text-lg font-semibold text-gray-200'>SWIMMING POOL</p>
  </div>
       <p className='p-4 text-center text-gray-100'>Open daily</p>
         </div>
 </div>
      </div>



      <section className="bg-white md:mt-20">
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<Link className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={hotelspa} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</Link>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<Link className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src={pool} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</Link>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<Link className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={dinner} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					</Link>
					<Link className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={swimming} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					</Link>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<Link className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={hotelpic} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</Link>
			</div>
		</div>
	</div>
</section>

{/* <section className="sm:flex justify-center gap-10 p-4 w-screen">
  <div className="img">
    <img src={hotelpic} alt="Hotel view" className="object-cover w-[800px]" />
  </div>
<div className='mt-10 md:mt-14  flex flex-col text-center'>
<div className=" ">
    <h1 className="font-extrabold text-2xl text-center">Beach Hotel More than a stay</h1>
    <p className="text-center sm:text-center ">
      We have a lot of effort to bring more quality time to you and the people you love.
      You will have a chance to enjoy meaningful moments together, and that’s the reason why
      we’re here.
    </p>
  </div>
</div>
</section> */}


<section className='md:mt-20 mt-10'>
  <div>
<p className='text-center text-4xl overflow-hidden '>   Our Favourite <span className='text-rose-500'>Rooms</span></p>
  </div>
</section>



<section >

<div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mt-10 md:mt-20'>
    <div className="mx-auto max-w-screen-2xl ">
 

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
      
            <Link
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={picture} alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />        
            </Link>
   
            <Link
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={swimming}  alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />
            </Link>
      
            <Link
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={hotelrooms1} alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" />
            </Link>
         
            <Link
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={pool}  alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-in-out hover:scale-110" /> 
            </Link>
           
        </div>
    </div>
</div>

    

    
</section>
    

    </main>



  );
};

export default Home;
