import React from 'react'
import blog1 from './assets/images/blog 1.jpg';
import blog2 from './assets/images/blog 2.jpg';
import blog3 from './assets/images/blog3.jpg';
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <>
<div className='grid gap-4 place-items-start p-4 md:p-8 lg:p-10 mt-20 '>
<div className='h-fit w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]  lg:min-h-[500px] pb-10'>
  <img src={blog1} alt="" className='object-contain object-center w-[900px] h-full'/>
  <h1 className='mt-4'>Visiting Beach resort  </h1>
  <p className='w-full max-w-[900px] mt-4 '>I joined Coinbase about two months ago to establish and lead a new tech hub for Coinbase in India. In this blog post, I wanted to share. bit about our plan and ambitions in india</p>
  <button className='p-3 bg-rose-600 rounded-lg text-white mt-4'>Read now</button>
</div>

 
<div className='h-fit w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]'>
  <img src={blog2} alt="" className='object-contain object-center w-[900px] h-full'/>
  <h1 className='mt-4'>Visiting Beach resort  </h1>
  <p className='w-full max-w-[900px] mt-4 '>I joined Coinbase about two months ago to establish and lead a new tech hub for Coinbase in India. In this blog post, I wanted to share. bit about our plan and ambitions in india</p>
  <button className='p-3 bg-rose-600 rounded-lg text-white mt-4'>Read now</button>
</div>

  
<div className='h-fit w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]'>
  <img src={blog3} alt="" className='object-contain object-center w-[900px] h-full'/>
  <h1 className='mt-4'>Visiting Beach resort  </h1>
  <p className='w-full max-w-[900px] mt-4 '>I joined Coinbase about two months ago to establish and lead a new tech hub for Coinbase in India. In this blog post, I wanted to share. bit about our plan and ambitions in india</p>
  <button className='p-3 bg-rose-600 rounded-lg text-white mt-4'>Read now</button>
</div>
</div>






    </>
  )
}

export default Blog 




