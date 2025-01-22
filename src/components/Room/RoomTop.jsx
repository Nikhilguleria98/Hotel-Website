import React, { useState } from 'react'

const RoomTop = () => {

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
  

  return (
    <div>
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
    </div>
  )
}

export default RoomTop
