import React, { useState } from "react";
// import background1 from "./assets/images/background1.jpg";
import { IoBedSharp } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

const Room = () => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

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
    <>
     <div>
        <div className="relative w-full h-64 overflow-hidden mt-20">
          <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-5xl text-white font-bold animate-pulse overflow-hidden">
            Rooms
          </h1>
          <img
            src="/images/background1.jpg"
            alt="Room Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center h-48 md:h-20 ">
          <div className="w-64 md:w-fit h-fit md:h-32 shadow-lg shadow-gray-300 mt-10 absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white md:flex justify-center items-center gap-4 p-4 text-gray-500 space-y-4 md:space-y-0 hover:shadow-lg hover:shadow-rose-400 duration-200">
            <div>
              <input
                type="date"
                className="h-12 w-full p-1 border border-gray-400 rounded-md"
              />
            </div>
            <div>
              <input
                type="date"
                className="h-12 w-full p-1 border border-gray-400 rounded-md"
              />
            </div>

            <div className="h-12 md:w-fit border border-gray-400 rounded-md flex items-center text-sm p-2 gap-5 md:gap-3 w-full ">
              Adult
              <div onClick={decrement} className="cursor-pointer text-lg">
                -
              </div>
              {count}
              <div onClick={increment} className="cursor-pointer text-lg">
                +
              </div>
            </div>

            <div className="h-12 w-full md:w-fit border border-gray-400 rounded-md flex items-center text-sm p-2 gap-5 md:gap-3">
              Children
              <div onClick={decrement1} className="cursor-pointer text-lg">
                -
              </div>
              {count1}
              <div onClick={increment1} className="cursor-pointer text-lg">
                +
              </div>
            </div>

            <button className="w-full md:w-36 h-12 bg-rose-500 text-white rounded-lg">
              Check Availability
            </button>
          </div>
        </div>

        <div className="mt-28 md:mt-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold overflow-hidden">
            Discover Our Rooms
          </h1>
        </div>
      </div>



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
    </>
  );
};

export default Room;
