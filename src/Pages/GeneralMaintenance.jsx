import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { FaOilCan } from "react-icons/fa";
import { PiTireBold, PiCarBatteryBold } from "react-icons/pi";
import { TbCarTurbine } from "react-icons/tb";

const GeneralMaintenance = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const { state } = useLocation(); // Get the state passed via Link
  const service = state?.service; // Extract the service from state

  // If no service data or ID doesn't match, redirect to /services
  if (!service || service.id !== id) {
    return <Navigate to="/services" replace />;
  }

  const Maintenance = [
    {
        icon: FaOilCan,
        title: "Regular Oil Changes",
        description: "Change your engine oil every 5,000-7,000 km to combat Nigeria's dusty environment & use high-quality tropical-grade oils like 5W-30 or 10W-40 for optimal performance."
    },
    {
        icon: PiTireBold,
        title: "Tyre Maintenance",
        description: "Check tyre pressure monthly (30-35 PSI for most cars). Rotate tyres every 10,000 km and inspect for wear, as potholes and rough roads are common"
    },
    {
        icon: TbCarTurbine,
        title: "Brake System Checks",
        description: "Inspect brake pads and fluid levels every 6 months. Heavy traffic in cities like Abuja and Lagos stresses brakes, so replace pads every 20,000-30,000 km."
    },
    {
        icon: PiCarBatteryBold,
        title: "Battery Care",
        description: " Clean battery terminals monthly to prevent corrosion, common in humid areas. Check voltage (12.6V when off) and replace batteries every 2-3 years"
    },
    {
        icon: PiTireBold,
        title: "Air Filter Replacement",
        description: "Replace air filters every 10,000 km or sooner in dusty regions like the North. Clogged filters reduce fuel efficiency and engine performance."
    },
    {
        icon: PiTireBold,
        title: "Cooling System Maintenance",
        description: "Flush and refill coolant every 2 years to prevent overheating, critical in Nigeria’s hot climate. Check radiator and hoses for leaks regularly."
    }
  ]

  return (
    // <div className="px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]">
    //   <h2 className="text-[30px] md:text-[48px] font-semibold text-center">{service.heading}</h2>
    //   <div className="mt-[30px] flex flex-col items-center">
    //     <img src={service.image} alt={service.heading} className="w-[200px] mb-[20px]" />
    //     <p className="text-[16px] md:text-[18px] max-w-[800px] text-center">{service.description}</p>
    //     <a
    //       href="/book-now"
    //       className="mt-[20px] font-primary text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer w-[147px] h-[52px] flex items-center justify-center hover:shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]"
    //     >
    //       Book Now
    //     </a>
    //   </div>
    // </div>
    <>
        <div className="bg-[url(/assets/general-maintenance-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold leading-16">General Maintenance</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Keep your vehicle in top shape with our expert tips tailored for Nigerian roads.
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Why Vehicle Maintenance Matters in Nigeria
            </h2>
            <p className="text-center text-[20px] md:text-[24px] md:px-5 pt-5">
                Nigeria's varied roads and tough conditions demand regular vehicle upkeep to ensure safety, save costs, 
                and prolong your car's life
            </p>
        </div>
        <div className='bg-[#002748] py-[30px] md:py-[50px] xl:py-[80px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] text-white leading-10 md:leading-14">
                Essential Maintenance Tips
            </h2>
            <div className='pt-[30px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>          
                {Maintenance.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className='bg-white px-[18px] py-[30px] flex flex-col items-center rounded-xl
                        h-[255px] xl:h-[270px] hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='bg-[#002748] h-[50px] w-[50px] rounded-full flex items-center justify-center'>
                                <Icon className='text-[30px] text-white'/>
                            </div>
                            <h4 className='text-[18px] font-semibold pt-5 text-center'>{item.title}</h4>
                            <p className='text-center pt-5 text-[14px]'>{item.description}</p>
                        </div>
                    )         
                })}
            </div>
        </div>
        <div className='py-[30px] md:py-[50px] xl:py-[80px] px-[20px] md:px-[30px] xl:px-[100px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-10 md:leading-14">
                Recommended Maintenance Schedule
            </h2>
            <div className='w-[600px] md:w-full overflow-x-scroll rounded-t-2xl xl:overflow-hidden mt-5 flex flex-col'>
                <div className='bg-[#002748] text-white 
                flex text-[24px] font-semibold justify-around xl:'>
                    <h4>Tasks</h4>
                    <h4>Frequency</h4>
                    <h4>Notes</h4>
                </div>
                {/* <div className='pt-5 flex justify-around xl:justify-between px-[20px] xl:px-[50px] py-5 '>
                    <div className='space-y-5 text-center'>
                        <p>Oil Change</p>
                        <p>Tyre Rotation</p>
                        <p>Brake Inspection</p>
                        <p>Battery Check</p>
                        <p>Air Filter</p>
                        <p>Coolant Flush</p>
                    </div>
                    <div className='space-y-5 text-center'>
                        <p>Every 5,000-7,000 km</p>
                        <p>Every 10,000 km</p>
                        <p>Every 6 months</p>
                        <p>Monthly</p>
                        <p>Every 10 km</p>
                        <p>Every 2 years</p>
                    </div>
                    <div className='space-y-5 text-center'>
                        <p>Use synthetic oil for high temperatures.</p>
                        <p>Balance and Align wheels.</p>
                        <p>Check pads, disc, and fluid.</p>
                        <p>Clean Terminal, check charge.</p>
                        <p>Inspect more often in dusty areas.</p>
                        <p>Use ethylene glycol-based coolant.</p>
                    </div>
                </div> */}
            </div>
            <div className='overflow-x-scroll md:overflow-x-hidden'>
                <table className="w-[500px] md:w-full">
                    <tbody className=" [&>tr>td]:pt-[10px]">
                        <tr className='font-semibold'>
                            <td>
                                <p className="text-start text-[16px] md:text-[24px]">Basic CNG Installation</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">4 weeks</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">₦150,000</p>
                            </td>
                        </tr>
                        <tr className='font-semibold'>
                            <td>
                                <p className="text-start text-[16px] md:text-[24px]">Advanced Conversion & Tuning</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">4 weeks</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">₦200,000</p>
                            </td>
                        </tr>
                        <tr className='font-semibold'>
                            <td>
                                <p className="text-start text-[16px] md:text-[24px]">Station Operation & Management</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">4 weeks</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">₦300,000</p>
                            </td>
                        </tr>
                        <tr className='font-semibold'>
                            <td>
                                <p className="text-start text-[16px] md:text-[24px]">Full Technician Bundle (All 3)</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">12 weeks</p>
                            </td>
                            <td className='px-3'>
                                <p className="text-start text-[16px] md:text-[24px]">₦500,000</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default GeneralMaintenance;