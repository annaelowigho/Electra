import React from 'react'

const Services = [
    {
        image: "/assets/engine-refurbishing-service-img1.png",
        title: "Brake pads",
        description: "High quality brake pads for all vehicle types",
        price: "15,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img2.png",
        title: "Oil Filters",
        description: "Premium oil filters for smooth engine performance",
        price: "45,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img3.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img4.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    }
]

const Process = [
    {
        number: "1",
        title: "Inspection",
        description: "Thorough assessment of your engine's condition using advanced diagnostics."
    },
    {
        number: "2",
        title: "Disassembly",
        description: "Careful disassembly to identify worn or damaged components."
    },
    {
        number: "3",
        title: "Repair and Replace",
        description: "Replace faulty parts with genuine components and repair where possible."
    },
    {
        number: "4",
        title: "Testing",
        description: "Rigorous testing to ensure optimal performance before delivery."
    }
]


const EngineRefurbishing = () => {
  return (
    <>
        <div className="bg-[url(/assets/engine-refurb-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] font-bold leading-16">Engine Refurbishing</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Durable, genuine parts for a smooth ride!
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
                        <div key={index} className='bg-white shadow-md px-5 py-8 rounded-lg'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[24px] font-semibold'>&#8358;{item.price}</p>
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
        <div className='bg-[#002748] px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] mb-[30px] md:mb-[80px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14 text-white">
                Our Refurbishing Process
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]'>
                {Process.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-[22px] py-[31px] rounded-xl flex flex-col items-center space-y-3
                        hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-[#002748] text-white flex justify-center items-center'>
                                <p className='text-[24px]'>{item.number}</p>
                            </div>
                            <h5 className='text-[24px] font-semibold'>{item.title}</h5>
                            <p className='text-center text-[18px] font-medium'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default EngineRefurbishing