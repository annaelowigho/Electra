import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaHelmetSafety } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Positions = [
    {
        title: "CNG Conversion Technician",
        
    }
]


const Careers = () => {

    const [departments, setDepartments] = useState("");

  return (
    <>
        <div className="bg-[url(/assets/career-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">Careers</h2>
                <p className="text-white text-[20px] md:text-[24px]">Join the Team Driving Nigeria’s Green Future</p>
            </div>
        </div>
        <div className='p-[20px] md:p-[50px] lg:p-[100px]'>
            <p className="text-[20px] md:text-[24px]">Explore open roles in Electric Vehicles, CNG Innovation, Tech, and Training.</p>
            <h4 className='text-[30px] font-semibold md:text-[48px] pt-[20px] lg:pt-[50px] text-center'>Open Positions</h4>
            <div className='bg-[#002748] py-[20px] px-[30px] md:py-[26px] md:px-[10px] lg:px-[50px] mt-[20px] rounded-xl 
            flex flex-col gap-[10px] md:flex-row lg:gap-[20px]'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Departments</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        value={departments}
                        onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="" disabled hidden>All Departments</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Job Types</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        // value={departments}
                        // onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="">All Types</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Location</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        // value={departments}
                        // onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="" disabled hidden>All Locations</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-white text-[20px] pb-2'>Search</h5>
                    <div className="rounded-md bg-white w-full p-3 flex justify-between items-center">
                        <input type="text" placeholder='Search Jobs...' className='outline-none'/>
                        <IoMdSearch className='text-[24px]'/>
                    </div>
                </div>
            </div>
            <div className='pt-[20px] md:pt-[50px]'>
                <div className='shadow-lg p-5 rounded-lg'>
                    <h4 className='text-[24px] font-semibold'>CNG Conversion Technician</h4>
                    <div className='pt-5 space-y-2'>
                        <div className='flex gap-3 items-center text-[18px] font-medium'>
                            <FaHelmetSafety />
                            <p>Engineering Department</p>
                        </div>
                        <div className='flex gap-3 items-center text-[18px] font-medium'>
                            <CgToolbox />
                            <p>Full-Time</p>
                        </div>
                        <div className='flex gap-3 items-center text-[18px] font-medium'>
                            <FaMoneyBillAlt />
                            <p>₦100,000-₦150,000/month</p>
                        </div>
                        <div className='flex gap-3 items-center text-[18px] font-medium'>
                            <IoCalendarNumberOutline />
                            <p>Posted: April 15,2025</p>
                        </div>
                    </div>
                    <div className='pt-[25px] flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <p>View Details</p>
                            <FaChevronDown />
                        </div>
                        <button className='text-[16px] text-white bg-[#002748] p-[10px] rounded-lg cursor-pointer'>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Careers