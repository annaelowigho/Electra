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

const ChooseUs =[
    {
        image: "/assets/repair-helmet.svg",
        title: "Proven Expertise",
        description: "With years of expertise, we provide reliable auto repair and painting built on trust"
    },
    {
        image: "/assets/repair-tool.svg",
        title: "Modern Tools",
        description: "We use modern tools for precise and high-quality repairs and painting"
    },
    {
        image: "/assets/repair-helmet.svg",
        title: "Skilled Technicians",
        description: "Our skilled team ensures exceptional results with expertise and attention to detail."
    }
]


const BodyRepairs = () => {

  return (
    <>
        <div className="bg-[url(/assets/body-repairs-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] md:text-[60px] font-bold leading-14 md:leading-16">Body Repairs & Painting</h2>
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
                            hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748] '>
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
            <div className='flex flex-col md:flex-row gap-[20px] pt-[20px] xl:pt-[50px]'>
                {ChooseUs.map((item, index) => {
                    return (
                        <div key={index} className='shadow-lg flex flex-col items-center rounded-lg w-full px-[45px] py-[50px] space-y-3
                         transition-all duration-300 hover:-translate-y-2 hover:bg-[#2FEAE4] hover:text-[#002748]'>
                            <div className='bg-[#002748] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                                <img src={item.image} alt="" />
                            </div>
                            <h4 className='text-center text-[24px] font-semibold'>{item.title}</h4>
                            <p className='text-center'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='px-[20px] py-[20px] md:px-[30px] md:pb-[50px] xl:px-[100px] xl:pb-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Explore our Gallery
            </h2>
            <div className='flex flex-col md:flex-row items-center gap-[25px] justify-center pt-[20px] md:pt-[50px]'>
                <div className=''>
                    <img src="/assets/gallery-one.png" alt="" />
                </div>
                <div className=''>
                    <img src="/assets/gallery-one.png" alt="" />
                </div>
                <div className=''>
                    <img src="/assets/gallery-one.png" alt="" />
                </div>
                <div className=''>
                    <img src="/assets/gallery-one.png" alt="" />
                </div>
            </div>
        </div>
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[240px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-16">Contact Us</h2>
            <p className="text-center text-[20px] md:text-[24px] md:px-5 pt-5">
                Get in touch for a free estimate or to book an appointment
            </p>
            <div className='flex items-center justify-center mt-[30px] md:mt-[50px]'>
                <form action="" className='w-full space-y-3 xl:space-y-5'>
                    <input type="text" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                    text-[24px] outline-none' placeholder='Full Name'/>
                    <input type="email" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                    text-[24px] outline-none' placeholder='Email Address'/>
                    <input type="number" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                    text-[24px] outline-none' placeholder='Phone Number'/>
                    <textarea name="" id="" className='bg-[#D9E8F4] w-full rounded-xl p-3 resize-none px-[20px] md:px-[30px] py-[30px] text-[24px] 
                    outline-none' rows='4' placeholder='Describe your needs'/>
                    <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-xl cursor-pointer px-6 py-4 
                    text-center hover:shadow-lg transition-transform duration-500 hover:scale-102 hover:bg-[#2FEAE4]
                    hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default BodyRepairs