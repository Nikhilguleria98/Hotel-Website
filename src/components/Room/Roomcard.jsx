import React from 'react'
import { IoBedSharp } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
const Roomcard = () => {


    const roomDataContainer = [
        {
          id: 1,
          name: "VIP Room",
          rate: "₹800/night",
          adults: "2",
          children: "2",
          area: "200 sqft",
          img: "/images/vip room.jpg",
        },
        {
          id: 2,
          name: "Love Room",
          rate: "₹1400/night",
          adults: "2",
          children: "2",
          area: "240 sqft",
          img: "/images/loveroom.jpg",
        },
        {
          id: 3,
          name: "Vintage Room",
          rate: "₹2000/night",
          adults: "2",
          children: "2",
          area: "300 sqft",
          img: "/images/vintage-bedroom.jpg",
        },
        {
          id: 4,
          name: "Family Room",
          rate: "₹800/night",
          adults: "2",
          children: "2",
          area: "200 sqft",
          img: "/images/family-room.jpg",
        },
        {
          id: 5,
          name: "Asia Room",
          rate: "₹1200/night",
          adults: "2",
          children: "2",
          area: "260 sqft",
          img: "/images/asiaroom.jpg",
        },
        {
          id: 6,
          name: "Deluxe Room",
          rate: "₹4000/night",
          adults: "2",
          children: "2",
          area: "400 sqft",
          img: "/images/deluxe-room-.jpg",
        },
      ];
  return (
    <div>
          {/* Room Cards */}
          <ul className="md:mt-28 mt-12 grid sm:grid-cols-12 gap-6 m-4 h-fit pb-10 gap-y-16">
        {roomDataContainer.map((room) => (
          <li
            key={room.id}
            className=" w-fit min-h-[100px] h-fit lg:col-span-4 sm:col-span-6 md:col-span-6 col-span-12 shadow-lg shadow-gray-300 pb-5"
          >
        
        <img
              src={room.img}
              alt={room.name}
              className=" inset-0 h-full min-h-80 rounded-lg  object-cover hover:brightness-50 duration-500"
            />
      
            <div className="flex justify-between p-2">
            <p className="p-2 text-xl font-semibold">{room.name}</p>
            <p className="border border-rose-400 w-24 h-10 flex justify-center  items-center text-rose-400">
              {room.rate}
            </p>
          </div>

          <div className="flex gap-6 px-2">
            <div className="flex items-center">
              <IoIosContact />
              <p>{room.adults} Adults</p>
            </div>
            <div className="flex items-center">
              <FaChildren />
              <p>{room.children} Children</p>
            </div>

            <div className="flex items-center ">
              <IoBedSharp />
              <p>{room.area}</p>
            </div>
          </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Roomcard
