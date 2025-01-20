import React from 'react'
import { FaSpa } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaPersonSwimming } from "react-icons/fa6";

const OurServices = () => {
    const data = [
        {
            detail: "SPA & WELLNESS",
            timigs: "Open daily",
            icon:<FaSpa/>
        },
        {
            detail: "TOP RESTAURANT",
            timigs: "Breakfast & Dinner",
            icon:<PiForkKnifeBold/>
        },
        {
            detail: "BEST SUITES",
            timigs: "Cool view",
            icon:<BsSuitcaseLgFill/>,
            color:"text-red-500"
        },
        {
            detail: "SWIMMING POOL",
            timigs: "Open daily",
            icon:<FaPersonSwimming/>
        }
    ]


    return (
        <div>
            <div>
                <h2 className='text-center md:mt-20 mt-10 text-4xl overflow-hidden'>Our <span className='text-rose-500'>Services</span></h2>


                <div className='flex justify-center gap-7 flex-wrap p-5 md:mt-20 mt-10'>

                    {
                        data.map((currElem) => {
                            return (
                                <div className='h-fit w-72  rounded-lg hover:shadow-lg hover:shadow-rose-500 bg-rose-300 duration-200 cursor-pointer'>
                                    <div className='flex items-start p-5 gap-12'>
                                        {/* <FaSpa className='text-2xl text-green-500' /> */}
                                        <div className={`text-2xl  ${currElem.color}`}>
                                            {currElem.icon}
                                        </div>
                                        <p className='text-lg font-semibold text-gray-200'>{currElem.detail}</p>
                                    </div>
                                    <p className='p-4 text-center text-gray-100'>{currElem.timigs}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices
