import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaHelmetSafety } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { MdHomeWork } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const JobCard = [
    {
        title: "CNG Conversion Technician",
        departmentIcon: "DepartmentIcon",
        department: "Engineering Department",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "CEV Maintenance Technician",
        departmentIcon: "DepartmentIcon",
        department: "Technical Services",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "EV Charging Specialist",
        departmentIcon: "DepartmentIcon",
        department: "Engineering Department",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Customer Care Rep",
        departmentIcon: "DepartmentIcon",
        department: "Customer Service",
        employmentTimeIcon: "TfiHeadphoneAlt",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Sales Executive",
        departmentIcon: "DepartmentIcon",
        department: "Marketing & Sales",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Logistics Coordinator",
        departmentIcon: "DepartmentIcon",
        department: "Supply Chain & Logistics",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
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

            {/* Open Positions */}
            <div className='pt-[20px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {JobCard.map((item, index) => {
                    return (
                        <div key={index} className='shadow-md p-5 rounded-lg'>
                            <h4 className='text-[24px] font-semibold'>{item.title}</h4>
                            <div className='pt-5 space-y-2'>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.departmentIcon && <FaHelmetSafety />}
                                    <p>{item.department}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.employmentTimeIcon && <CgToolbox />}
                                    <p>{item.employmentTime}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.employmentTypeIcon && <MdHomeWork />}
                                    <p>{item.employmentType}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.dateIcon && <IoCalendarNumberOutline />}
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className='pt-[25px] flex justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <p>{item.view}</p>
                                    <FaChevronDown />
                                </div>
                                <button className='text-[16px] text-white bg-[#002748] p-[10px] rounded-lg cursor-pointer'>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Why Choose Us */}
        <div className='bg-[#002748] py-[20px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-7 md:leading-12 xl:leading-14 text-white">
                Why Choose Us
            </h2>
            {/* <div className='pt-[30px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]'>          
                {Courses.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className='bg-white w-full h-[200px] md:h-[266px] rounded-2xl p-[15px] flex flex-col justify-between'>
                            <div className='flex justify-center items-center bg-[#002748] w-[50px] h-[50px] rounded-full'>
                                <Icon className='text-[24px] text-white'/>
                            </div>
                            <h5 className='text-[17px] font-semibold'>{item.heading}</h5>
                            <p className='text-[15px] font-semibold'>
                                {item.description}
                            </p>
                            <button className='text-[#002748] flex items-center gap-2 text-[15px] font-semibold cursor-pointer'>
                            <p>{item.button}</p>
                            <PiGreaterThan className='text-[13px]'/>
                            </button>
                        </div>
                    )         
                })}
            </div> */}
        </div>
    </>
  )
}

export default Careers