import React from 'react'

const ServiceOverview = [
    {
        title: "Collision Repair",
        description: "Restore your vehicle with expert collision repair, from minor dents to major damage"
    },
    {
        title: "Auto Painting",
        description: "Refresh your car's appearance with premium oven-bake painting for a lasting, glossy finish"
    },
    {
        title: "Paint-less Dent Repair",
        description: "Repair minor dents while preserving your car's original paint with cost-effective methods."
    },
    {
        title: "Frame Straightening",
        description: "Maintain your vehicle's safety with advanced frame straightening technology."
    },

]
const BodyRepairs = () => {

  return (
    <>
        <div className="bg-[url(/assets/body-repairs-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold leading-16">Body Repairs & Painting</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Professional repairs and painting for all vehicle makes and models
                </p>
            </div>
        </div>
        <div className='my-[20px] md:my-[50px] xl:my-[100px]'>
            <div className='bg-[#002748] py-[20px] md:py-[50px] px-[20px] md:px-[30px] xl:px-[100px]'>
                <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14 text-white">
                    Services Overview
                </h2>
                <div className='pt-[20px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-[20px]'>
                    {ServiceOverview.map((item, index) => {
                        return (
                            <div key={index} className='bg-white rounded-xl text-center px-[24px] py-[70px] h-[267px] w-full
                            hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                                <h5 className='text-[24px] font-semibold'>{item.title}</h5>
                                <p className='text-[16px] font-medium'>{item.description}</p>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>
        <div className='px-[20px] pb-[20px] md:px-[30px] md:pb-[50px] xl:px-[100px] xl:pb-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Why Choose Us
            </h2>
            <div className='shadow-xl'>

            </div>
        </div>
    </>
  )
}

export default BodyRepairs