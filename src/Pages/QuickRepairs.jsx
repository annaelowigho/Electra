import React from 'react'

const Services = [
    {
        image: "/assets/tire-repair.png",
        title: "Tire Repair & Replacement",
        description: "Quick tire patching or replacement for safe driving",
        price: "Starting at ₦5,000"
    },
    {
        image: "/assets/brake-repair.png",
        title: "Brake System Repair",
        description: "Fast brake pad replacement and system checks ",
        price: "Starting at ₦25,000"
    },
    {
        image: "/assets/oil-change.png",
        title: "Oil Change & Tune-Up",
        description: "Keep your engine running smoothly with quick oil change ",
        price: "Starting at ₦10,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img4.png",
        title: "Battery Check & Replacement",
        description: "Test & Replace batteries for reliable starts",
        price: "Starting at ₦15,000"
    }
]

const QuickRepairs = () => {
  return (
    <>
        <div className="bg-[url(/assets/quick-repair-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] md:text-[60px] font-bold leading-14 md:leading-16">Quick Repairs</h2>
                <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                    Speedy Repairs, Reliable Results  
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Services
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[23px]'>
                {Services.map((item, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md px-5 py-8 rounded-lg space-y-4'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[24px] font-semibold'>{item.price}</p>
                                <button className='font-primary text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[20px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='px-[20px] pb-[30px] md:px-[70px] md:pb-[50px] xl:px-[300px] xl:pb-[100px]'>
            <div className='p-[10px] md:p-[50px] shadow-md rounded-xl'>
                <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                    Book for Refurbishing
                </h2>
                <div className='pt-[20px]'>
                    <form action="" className='w-full space-y-3 xl:space-y-5'>
                        <input type="text" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Full Name'/>
                        <input type="text" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Phone Number'/>
                        <input type="email" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Email Address'/>
                        <div className=' px-[20px] md:px-[30px] bg-[#D9E8F4] rounded-xl'>
                            <select name="" id="" className='w-full h-[70px] md:h-[90px]
                            text-[24px] outline-none'>
                                <option value="">Select Service</option>
                                <option value="">Complete Engine Overhaul</option>
                                <option value="">Engine Diagnostics</option>
                                <option value="">Engine Tuning</option>
                                <option value="">Turbocharger Repair</option>
                            </select>
                        </div>
                        <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-xl cursor-pointer px-6 py-4 
                        text-center hover:shadow-lg transition-transform duration-500 hover:scale-102 hover:bg-[#2FEAE4]
                        hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuickRepairs