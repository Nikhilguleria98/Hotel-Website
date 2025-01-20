import React from 'react'
import viproom from "./assets/images/vip room.jpg";
import { IoBedSharp } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

const Card = (props) => {
  return (
<div className='h-fit p-1'>
<div className="flex flex-wrap gap-4 justify-center hover:brightness-50 duration-200 mt-20 shadow-md shadow-gray-300">
                <div className="h-fit pb-10 w-fit ">
            <img
              src={props.viproom}
              className="object-cover object-center h-80 w-96"
              alt=""
            />

            <div className="flex justify-between p-2">
              <p className="p-2 text-xl font-semibold">{props.roomname}</p>
              <p className="border border-rose-400 w-24 h-10 flex justify-center  items-center text-rose-400">
                {props.price}
              </p>
            </div>

            <div className="flex gap-6 px-2">
              <div className="flex items-center">
              <IoIosContact />
                <p>{props.adults}</p>
              </div>
              <div className="flex items-center">
              <FaChildren />
                <p>2 Children</p>
              </div>

              <div className="flex items-center ">
              <IoBedSharp />
                <p>{props.area} sqft</p>
              </div>
            </div>
          </div>
    </div>
</div>
  )
}


export default Card;


<div className=' p-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4'>
<div className="flex flex-wrap gap-4 justify-center hover:brightness-50 duration-200 mt-20 shadow-md shadow-gray-300">
            
             <div className="h-fit pb-10 w-fit">
            <img
              src={viproom}
              className="object-cover object-center  w-full"
              alt=""
            />

            <div className="flex justify-between p-2">
              <p className="p-2 text-xl font-semibold">VIP</p>
              <p className="border border-rose-400 w-24 h-10 flex justify-center  items-center text-rose-400">
                $300/night
              </p>
            </div>

            <div className="flex gap-6 px-2">
              <div className="flex items-center">
              <IoIosContact />
                <p>Adults</p>
              </div>
              <div className="flex items-center">
              <FaChildren />
                <p>2 Children</p>
              </div>

              <div className="flex items-center ">
              <IoBedSharp />
                <p>200 sqft</p>
              </div>
            </div>
          </div>
    </div>
