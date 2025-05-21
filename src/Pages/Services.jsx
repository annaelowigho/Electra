import React from 'react'
import { FiPhoneForwarded } from "react-icons/fi";
import { Outlet, Link, useLocation } from 'react-router-dom'


const Service = [
    {
        id: "cng-conversion",
        image: "/assets/gas-white.svg",
        heading: "Certified CNG Conversion",
        description: "Professional CNG conversion service with government certification. Save on fuel cost while being environmental conscious",
        button: "Read More"
    },
    {
        id: "cng-training",
        image: "/assets/training.svg",
        heading: "CNG Training",
        description: "Comprehensive training programs for mechanics & technicians on CNG system installation, maintenance, & troubleshooting",
        button: "Read More"
    },
    {
        id: "buy-cng-kits",
        image: "/assets/cng-kits.svg",
        heading: "Buy CNG Kits",
        description: "Buy top-quality CNG kits for all vehicles, with expert advice to find the perfect system",
        button: "Read More"
    },
    {
        id: "refuelling-station",
        image: "/assets/refilling.svg",
        heading: "Find CNG Refuelling Station",
        description: "Locate CNG refueling stations with our directory to keep your vehicle running.",
        button: "Read More"
    },
    {
        id: "body-repairs",
        image: "/assets/repair.svg",
        heading: "Body Repairs and Painting",
        description: "Restore your vehicle's exterior with expert painting and dent removal for a brand-new look.",
        button: "Read More"
    },
    {
        id: "general-maintenance",
        image: "/assets/maintenance.svg",
        heading: "General Maintenance",
        description: "Regular maintenance: oil changes, filter replacements, fluid checks, and inspections to keep your vehicle smooth.",
        button: "Read More"
    },
    {
        id: "spare-parts",
        image: "/assets/spare-parts.svg",
        heading: "Spare Parts Sale",
        description: "Genuine spare parts for all major brands. Quality parts ensure optimal vehicle performance.",
        button: "Read More"
    },
    {
        id: "engine-refurbishing",
        image: "/assets/engine.svg",
        heading: "Engine Refurbishing",
        description: "Complete engine overhaul and rebuilding services to restore performance and extend the lifespan of your vehicle's power plant.",
        button: "Read More"
    },
    {
        id: "vehicle-diagnostic",
        image: "/assets/diagnostics.svg",
        heading: "Vehicle Diagnostic",
        description: "Advanced computer diagnostics to identify and troubleshoot electrical and mechanical issues with precision and accuracy.",
        button: "Read More"
    },
    {
        id: "quick-repair",
        image: "/assets/quick-repair.svg",
        heading: "Quick Repair",
        description: "Fast and efficient repair services for minor issues, with most repairs completed while you wait to minimize downtime.",
        button: "Read More"
    },
]

const Services = () => {
    const location = useLocation();
    const isServicesRoot = location.pathname === '/services';
  return (
    <>
        {isServicesRoot && (
            <>
                <div className="bg-[url(/assets/services-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
                    <div className="text-center">
                        <h2 className="text-white text-[60px] font-bold">Services</h2>
                        <p className="text-white text-[20px] md:text-[24px] md:px-5">
                            We specialize in CNG solutions and quality care for your vehicle, from maintenance to major repairs
                        </p>
                    </div>
                </div>
                <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
                    <h2 className='text-[30px] text-center font-semibold md:text-[48px] leading-10 md:leading-12'>
                        Explore Some of Our Unique Services
                    </h2>
                    <div className='pt-[30px] grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[30px]'>
                        {Service.map((item, index) => {
                            return (
                                <div key={index} className='bg-white px-[10px] py-[15px] xl:px-[40px] xl:py-[36px] rounded-xl flex 
                                items-center gap-5 w-full md:w-full lg:w-[470px] xl:w-full h-[200px] xl:h-[250px] shadow-md'>
                                    <img src={item.image} alt="" className='w-[120px] lg:w-[176px]'/>
                                    <div >
                                        <h4 className='text-[18px] xl:text-[24px] font-semibold'>{item.heading}</h4>
                                        <p className='text-[12px] xl:text-[15px]'>
                                            {item.description}
                                        </p>
                                        <Link to={`/services/${item.id}`}>
                                            <button className='font-primary text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                            w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                            hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                                {item.button}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='bg-[#002748] mx-[20px] my-[20px] md:mx-[30px] md:my-[50px] xl:mx-[100px] rounded-xl 
                p-[10px] md:p-[30px] xl:p-[60px]'>
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-4'>
                        <div>
                            <h2 className='text-[30px] text-white font-medium md:text-[48px]  leading-14'>
                                Considering CNG Conversion? <br /> We're the experts!
                            </h2>
                            <p className="text-white text-[18px] pt-[10px] xl:w-[550px]">
                                Certified specialists convert your vehicle to clean, affordable CNG,
                                cutting fuel costs by up to 50% and reducing your carbon footprint.
                            </p>
                            <div className='pt-[30px] flex flex-col xl:flex-row gap-[50px]'>
                                <div className='flex gap-[20px] items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-[#2FEAE4] flex items-center justify-center'>
                                    <FiPhoneForwarded className='text-[22px]'/> 
                                    </div>
                                    <div className='text-white'>
                                        <p>+234 814 5362 548</p>
                                        <p>+234 811 5891 543</p>
                                    </div>
                                </div>
                                <button className='font-primary text-[18px] font-semibold bg-[#2FEAE4] rounded-lg px-[20px] py-[10px] 
                                cursor-pointer text-[#002748] hover:shadow-lg transition-transform duration-500 
                                hover:scale-105 hover:bg-transparent hover:border-[3px] hover:border-[#2FEAE4] hover:text-white'>
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                        <img src="/assets/service-repair.svg" alt="" className='h-[500px]'/>
                    </div>
                </div>
            </>
        )}
        <Outlet />
    </>
  )
}

export default Services