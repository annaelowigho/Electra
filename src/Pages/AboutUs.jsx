import React from 'react'
import { FaCarRear, FaHelmetSafety } from "react-icons/fa6";
import { RiGasStationLine } from "react-icons/ri";
import { TbBuildingBridge } from "react-icons/tb";
import { FiTool } from "react-icons/fi";



const SpecializeIn = [
    {
        icon: FaCarRear,
        heading: "Electric vehicle assembly & battery tech",
        description: "Building Electric Vehicles and Battery Technology for the Future."
    },
    {
        icon: RiGasStationLine,
        heading: "CNG conversion of petrol vehicles",
        description: "Transforming Petrol Cars to Cleaner CNG Technology"
    },
    {
        icon: TbBuildingBridge,
        heading: "EV & CNG infrastructure deployment",
        description: "Expanding EV & CNG Infrastructure for a Greener Future"
    },
    {
        icon: FaHelmetSafety,
        heading: "Auto technician training & certification",
        description: "We offer hands-on training to teach auto technicians the skills they need"
    },
    {
        icon: FiTool,
        heading: "Comprehensive Vehicle Care & Repair Services",
        description: "We offer reliable services to keep your vehicle in top shape"
    },
    {
        icon: RiGasStationLine,
        heading: "CNG conversion of petrol vehicles",
        description: "Transforming Petrol Cars to Cleaner CNG Technology"
    },
]

const AboutUs = () => {
  return (
    <>
        <div className="bg-[url(/assets/about-us-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">About Us</h2>
                <p className="text-white text-[20px] md:text-[24px]">Keeping your vehicle running at its best</p>
            </div>
        </div>
        <div className='mt-[20px] md:mt-[50px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] flex flex-col lg:flex-row lg:gap-[50px] 
        lg:items-center xl:justify-between'>
            <div className='lg:w-1/2'>
                <h4 className='text-[30px] font-bold md:text-[48px] '>Electra Motors</h4>
                <p className='text-justify text-[18px] md:text-[24px] font-medium'>
                    Electra Motors Limited is a Nigerian automotive innovation company focused on Electric Vehicles (EVs), 
                    Compressed Natural Gas (CNG) conversion, and sustainable transport infrastructure
                </p>
                <p className='text-justify text-[18px] md:text-[24px] pt-4 pb-7 lg:pb-0 font-medium'>
                    Founded in 2024,Electra Motors is on a mission to revolutionize mobility in Nigeria by offering clean, affordable 
                    alternatives to petrol and diesel-powered transportation.
                </p>
            </div>
            <div className=''>
                <img src="/assets/about-us-img.svg" alt="" className='md:h-[400px] lg:w-full lg:h-[470px]'/>
            </div>
        </div>
        <div className='bg-[#2FEAE4] mt-[50px] xl:mt-[150px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] xl:py-[50px]'>
            <h3 className='text-[30px] text-center font-semibold md:text-[48px]'>We Specialize in</h3>
            <div className='flex flex-col md:flex-row gap-5 pt-[30px] lg:pt-[50px] items-center justify-center flex-wrap'>
                {SpecializeIn.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className='bg-white px-[15px] py-[35px] w-full rounded-xl md:w-[360px] lg:w-[400px]'>
                            <div className='flex items-center gap-[20px]'>
                                <div className='bg-[#002748] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                                    <Icon className='text-white text-[22px]'/>
                                </div>
                                <h5 className='text-[20px] md:text-[24px] font-semibold w-[260px] md:w-[280px]'>
                                    {item.heading}
                                </h5>
                            </div>
                            <p className='text-[18px] pt-[27px]'>{item.description}</p>
                        </div> 
                    )
                })}
            </div>
        </div>
        <div> 
        </div>
    </>
  )
}

export default AboutUs