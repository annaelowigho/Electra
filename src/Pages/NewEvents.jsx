import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";


const Events = [
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025", 
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    }
]

const NewEvents = () => {

    

  return (
    <>
        <div className="bg-[#002748] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
            <h2 className="text-white text-[44px] md:text-[60px] font-bold leading-14 md:leading-16">
                News & Events
            </h2>
            <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                Stay Ahead with Industry Insights
            </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] lg:px-[80px] lg:py-[80px] xl:px-[100px] xl:py-[100px]'>
            <div className='flex justify-end'>
                <div className='border border-black/50 rounded-lg px-2 py-3 w-[206px] flex justify-between items-center'>
                    <select name="" id="" className='w-full outline-none'>
                        <option value="" disabled>Sort by</option>
                        <option value="">Latest News</option>
                        <option value="">All News</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 pt-[20px] md:pt-[50px]'>
                {Events.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-4 py-5 lg:px-7 rounded-xl w-full shadow-lg'>
                            <img src={item.image} alt="" className='w-full'/>
                            <p className='pt-1 text-[14px]'>{item.date}</p>
                            <h4 className='text-[16px] lg:text-[18px] font-semibold leading-5 lg:leading-6 pt-2'>{item.title}</h4>
                            <p className='text-black/70 pt-1 text-[16px]'>{item.description}</p>
                            <div className='flex justify-end pt-3 cursor-pointer'>
                                <div className='flex justify-center items-center gap-2 text-[14px] xl:text-[16px] text-white font-semibold 
                                bg-[#002748]  rounded-lg cursor-pointer w-[120px] xl:w-[140px] h-[40px] lg:h-[45px] hover:shadow-lg 
                                transition-transform-y duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
                                hover:border-[#002748] hover:text-[#002748]'>
                                    <button className=''>
                                        Read More
                                    </button>
                                    <IoArrowForwardSharp />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='pt-[30px] lg:pt-[50px] flex justify-center md:justify-end gap-[8px] md:gap-[15px] items-center'>
                <button className='bg-[#D9E8F4] px-3 md:px-5 py-2 text-[18px] md:text-[24px] font-semibold rounded-lg cursor-pointer
                hover:bg-[#002748] hover:text-white duration-500 hover:scale-90'>
                    Prev
                </button>
                {/* <div className='flex gap-2'>
                    <div class="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                    text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                    tabindex="0"
                    role="button"
                    aria-label="Toggle button">
                        1
                    </div>
                    <div class="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                    text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                    tabindex="0"
                    role="button"
                    aria-label="Toggle button">
                        2
                    </div>
                    <div class="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                    text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                    tabindex="0"
                    role="button"
                    aria-label="Toggle button">
                        3
                    </div>
                    <div class="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                    text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                    tabindex="0"
                    role="button"
                    aria-label="Toggle button">
                        4
                    </div>
                    <div class="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                    text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                    tabindex="0"
                    role="button"
                    aria-label="Toggle button">
                        5
                    </div>
                </div> */}
                <div className='flex gap-2'>
                    {[1,2,3,4,5].map(num => (
                        <div key={num} 
                        className="w-[28px] md:w-[43px] h-[38px] md:h-[47px] border flex items-center justify-center rounded-lg border-black/50 
                        text-[18px] font-semibold cursor-pointer focus:bg-[#002748] focus:text-white"
                        tabIndex="0" role="button" aria-label={`Page ${num}`}>
                            {num}
                        </div>
                    ))}
                </div>
                <button className='bg-[#D9E8F4] px-3 md:px-5 py-2 text-[18px] md:text-[24px] font-semibold rounded-lg cursor-pointer
                hover:bg-[#002748] hover:text-white duration-500 hover:scale-90'>
                    Next
                </button>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#D9E8F4] mx-[20px] mt-0 mb-[50px] px-5 py-10 md:p-10 lg:p-16 rounded-lg 
        md:mx-[80px] md:mb-[80px] lg:mb-[100px] xl:mb-[150px] lg:mx-[100px] min-[1280px]:mx-[100px] xl:mx-[200px]'>
            <h2 className="text-[28px] md:text-[48px] font-bold text-center leading-9 md:leading-14">
                Stay Updated with Our Newsletter
            </h2>
            <p className="text-[18px] md:text-[24px] text-center pt-5">
                Subscribe for the latest news, events, and clean energy innovations from Electra Motors.
                Stay ahead with exclusive updates
            </p>
            <div className='flex flex-col lg:flex-row items-center justify-center pt-[25px] gap-[25px] w-full'>
                <input type="text" placeholder='Enter email address' 
                className='bg-white py-[16.5px] px-[35px] w-full lg:w-[388px] h-[60px] rounded-lg'/>
                <button className="font-primary text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer 
                w-[148px] h-[58px] flex items-center justify-center hover:shadow-lg transition-transform duration-500 hover:scale-105 
                hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]">
                    Subscribe
                </button>
            </div>
        </div>
    </>
  )
}

export default NewEvents