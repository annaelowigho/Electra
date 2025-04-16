import React from 'react'
import { FaCarRear, FaHelmetSafety } from "react-icons/fa6";
import { RiGasStationLine } from "react-icons/ri";
import { TbBuildingBridge } from "react-icons/tb";
import { FiTool } from "react-icons/fi";
import ProgressBar from '../Components/ProgressBar';
import Partner from '../Components/Partner';



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

const Team = [
    {
        image: "/assets/ceo.svg",
        name: "Charles Omordia ",
        position:"CEO"
    },
    {
        image: "/assets/coo.svg",
        name: "Engr. Ikechukwu Okafor",
        position:"COO"
    },
    {
        image: "/assets/cfo.svg",
        name: "Chidimma Ifiora ",
        position:"CFO"
    },
    {
        image: "/assets/cmo.svg",
        name: "Joshua Eromon",
        position:"CMO"
    }
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
                        <div key={index} className='bg-white px-[15px] py-[35px] w-full rounded-xl md:w-[360px] lg:w-[400px]
                        cursor-pointer transition-all duration-300 hover:-translate-y-2'>
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

        {/* Mission and Vision */}
        <div className='mt-[50px] xl:mt-[150px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] xl:py-[50px]'> 
            <h3 className='text-[30px] text-center font-semibold md:text-[48px]'>Our Mission & Vision</h3>
            <div className='pt-[30px] lg:pt-[50px] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center'>
                <img src="/assets/refilling.svg" alt="" className='lg:w-1/2 xl:w-[580px] xl:h-[458px]'/>
                <div className='flex flex-col gap-3 lg:gap-5 xl:justify-between xl:w-[610px]'>
                    <div className='bg-[#2FEAE4] px-[20px] py-[15px] rounded-xl h-[210px] md:h-[180px] xl:h-[220px]
                    xl:px-[30px] xl:py-[35px] text-[#002748] animate-colorChange'>
                        <h5 className='text-[24px] font-semibold'>Our Mission</h5>
                        <p className='text-[18px]'>
                            To empower Nigerians with affordable, reliable, and eco-friendly 
                            transport solutions through innovation in CNG and EV technologies.
                        </p>
                    </div>
                    <div className='bg-[#002748] px-[20px] py-[15px] rounded-xl h-[210px] md:h-[180px] xl:h-[220px] text-white
                    xl:px-[30px] xl:py-[35px] animate-colorChangeReverse'>
                        <h5 className='text-[24px] font-semibold'>Our Vision</h5>
                        <p className='text-[18px]'>
                            To become Africa’s leading clean mobility provider, transforming transportation with sustainable 
                            energy and empowering thousands with green jobs
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* CNG Project Scope */}
        <div className='bg-[#002748] mt-[50px] xl:mt-[150px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] xl:py-[50px]'>
            <h4 className='text-[30px] text-center font-semibold md:text-[48px] text-white'>CNG Project Scope</h4>
            <div className='pt-[30px] lg:pt-[50px] flex flex-col gap-6 md:gap-4 md:flex-row '>
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <div className='bg-white p-[15px] rounded-xl h-[180px] md:h-[180px] xl:h-[220px] xl:px-[30px] xl:py-[35px]'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D9D9D9] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                <FaCarRear className='text-[22px]'/>
                            </div>
                            <h5 className='text-[18px] md:text-[24px] font-semibold'>Vehicle Conversion Program</h5>
                        </div>
                        <p className='text-[16px] px-[10px] pt-3'>
                            Professional conversion of petrol vehicles too cng-powered systems, 
                            ensuring optimal performance and safety standards
                        </p>
                    </div>
                    <div className='bg-white p-[15px] rounded-xl h-[180px] md:h-[180px] xl:h-[220px] xl:px-[30px] xl:py-[35px]'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D9D9D9] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                <RiGasStationLine className='text-[22px]'/>
                            </div>
                            <h5 className='text-[18px] md:text-[24px] font-semibold'>Refueling Infrastructure</h5>
                        </div>
                        <p className='text-[16px] px-[10px] pt-3'>
                            Strategic deployment of CNG refueling stations across key urban 
                            locations to ensure convenient access
                        </p>
                    </div>
                    <div className='bg-white p-[15px] rounded-xl h-[180px] md:h-[180px] xl:h-[220px] xl:px-[30px] xl:py-[35px]'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D9D9D9] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                <FiTool className='text-[22px]'/>
                            </div>
                            <h5 className='text-[18px] md:text-[24px] font-semibold'>Technical Training Program</h5>
                        </div>
                        <p className='text-[16px] px-[10px] pt-3'>
                            State-of-the-art facility developing the next generation of CNG 
                            conversion specialists 
                        </p>
                    </div>
                </div>

                <div className='bg-white rounded-xl px-[20px] py-16 md:py-[15px] md:w-1/2'>
                    <h5 className='text-[24px] font-semibold'>Project Targets</h5>
                    <div className='md:pt-10'>
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </div>

        {/* Meet the Team */}
        <div className='mt-[50px] xl:mt-[100px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] xl:py-[50px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {Team.map((item, index) => (
                    <div key={index} className="flex flex-col items-center transition-all duration-500 ease-linear 
                    hover:-translate-y-2">
                        <img src={item.image} alt={item.name} className="object-cover transition-all duration-500 
                        ease-linear hover:scale-105 hover:shadow-[3px_3px_7px_#2FEAE4] hover:rounded-2xl hover:-translate-y-3" />
                        <p className="text-center text-[20px] font-bold pt-2">{item.name}</p>
                        <p className="text-center font-semibold text-[#2FEAE4]">{item.position}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Trusted Partners */}
        <div className='mb-[50px] xl:mb-[100px]'>
            <Partner />
        </div>
    </>
  )
}

export default AboutUs