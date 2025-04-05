import React, { useState } from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { RiGasStationLine } from "react-icons/ri";



const Process = [
    {
        number: "1",
        Icon: HiOutlineNewspaper,
        heading: "Submit Vehicle Information",
        description: "Provide Essential details about your vehicle through our online form for our customized conversion plan"
    },
    {
        number: "2",
        Icon: FaRegCalendarCheck,
        heading: " Book a Conversion Slot",
        description: "Choose your preferred appointment time through  our online booking system"
    },
    {
        number: "3",
        Icon: IoLocationOutline,
        heading: "Visit our Centre",
        description: "Bring your vehicle to our state of the art facility  for professional inspection"
    },
    {
        number: "4",
        Icon: BsTools,
        heading: "Installation & Testing",
        description: "Our Certified technicians will install the CNG kits and perform comprehensive safety tests"
    },
    {
        number: "5",
        Icon: GrCertificate,
        heading: "Certification",
        description: "Receive your safety compliance certificate  and detailed user guide for CNG operation"
    },
    {
        number: "6",
        Icon: RiGasStationLine,
        heading: "Start Saving",
        description: "Begin Refueling at our CNG Stations and  enjoy up to 40% savings on fuel cost"
    },
]

const CNG = () => {

    const [vehicleType, setVehicleType] = useState("");
  return (
    <>
        <div className="bg-[url(/assets/cng-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">CNG Conversion</h2>
                <p className="text-white text-[20px] md:text-[24px]">Switch to CNG: Save Money, Drive Cleaner, Go Greene</p>
            </div>
        </div>

        {/* CNG Process */}
        <div className='bg-[#2FEAE4] py-[20px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Our Conversion Process</h2>
            <p className="text-[20px] md:text-[24px] text-center">
                Follow our  Step-by-Step Process to convert  your vehicle to CNG
            </p>

            {/* Conversion Process */}
            <div className="pt-[30px] lg:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                {Process.map((item, index) => {
                    const Icon = item.Icon
                    return (
                        <div key={index} className="bg-white px-[20px] py-[30px] relative rounded-xl h-[200px] md:h-[180px] xl:h-[220px] ">
                            <div className="bg-[#2FEAE4] w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-[-12px] right-[30px]">
                                <p className="text-[20px] lg:text-[24px] font-semibold">{item.number}</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className="text-[24px] bg-[#002748] flex justify-center items-center w-[50px] h-[50px] text-white rounded-full">
                                    <Icon />
                                </div>
                                <h5 className='text-[20px] md:text-[24px] font-semibold'>{item.heading}</h5>    
                            </div>    
                            <p className='pt-3 text-[16px] font-medium'>
                                {item.description} 
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>


        
        {/* Service Calculator */}
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[150px] xl:py-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Service Calculator</h2>
            <p className="text-center text-[20px] md:text-[24px]">Instantly estimate your CNG Conversion based on your vehicle's details.</p>
            <div className='pt-[30px] lg:pt-[30px] flex flex-col lg:flex-row lg:gap-10'>
                <img src="/assets/refilling.svg" alt="" className='lg:w-1/2'/>
                <div className='lg:w-1/2 flex flex-col justify-between xl:justify-center xl:gap-10 pt-8 lg:pt-0'>
                    <div>
                        <h5 className='text-[24px] font-semibold'>Vehicle Type</h5>
                        <div className="rounded-3xl bg-[#D9D9D9] w-full p-[20px] md:p-[30px] mt-3 text-[24px] ">
                            <select
                                name="serviceType"
                                id="serviceType"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                className="outline-none w-full text-gray-700 bg-transparent"
                            >
                            <option value="" disabled hidden>
                                Select Vehicle Type
                            </option>
                            <option value="toyota">Toyota</option>
                            <option value="lexus">Lexus</option>
                            <option value="tricycle">Tricycle</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-5 lg:pt-0'>
                        <h5 className='text-[24px] font-semibold'>Cylinder Type</h5>
                        <div className="rounded-3xl bg-[#D9D9D9] w-full p-[20px] md:p-[30px] mt-3 text-[24px] ">
                            <select
                                name="serviceType"
                                id="serviceType"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                className="outline-none w-full text-gray-700 bg-transparent"
                            >
                            <option value="" disabled hidden>
                                Select Cylinder Type
                            </option>
                            <option value="toyota">Toyota</option>
                            <option value="lexus">Lexus</option>
                            <option value="tricycle">Tricycle</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-[#002748] text-white p-[20px] md:p-[25px] text-center text-[18px] font-semibold rounded-3xl mt-8 lg:mt-0'>
                        Calculate Estimate
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CNG