import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Services = [
    {
        image:"/assets/req-icon1.png",
        title:"CNG Services"
    },
    {
        image:"/assets/req-icon2.png",
        title:"EV Services"
    },
    {
        image:"/assets/req-icon3.png",
        title:"Maintenance"
    },
    {
        image:"/assets/req-icon4.png",
        title:"Training"
    }
]

const InquiryServiceReqForm = () => {
  return (
    <>
        <div className='shadow-xl mx-[20px] my-[20px] md:mx-[50px] md:my-[40px] lg:mx-[100px] lg:my-[100px] xl:mx-[150px] rounded-2xl'>
            <div className='bg-[#002748] text-white py-5 md:py-8 rounded-t-2xl'>
                <h2 className='text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center font-semibold'>
                    Service Request Form
                </h2>
                <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                    Please fill out the form below to request our services
                </p>    
            </div> 
            <div className='rounded-b-2xl py-5 md:py-8'>
                <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10 px-5'>
                    <div className=''>
                        <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex items-center justify-center'>
                            2
                        </div>
                    </div>
                    <div className='flex bg-gray-200 w-1/2 rounded-xl h-[10px]'>
                        <div className='w-1/2 bg-[#002748] rounded-l-xl'></div>
                        <div className='w-1/2'></div>
                    </div>
                    <p className=''>Step 1 of 2</p>
                </div>
                <div className='px-3 md:px-5 lg:px-10 pt-5'>
                    <p className='text-[18px] font-semibold md:text-[20px] lg:text-[24px]'>1. Service Inquiry Type</p>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[15px] lg:gap-[45px] pt-7 px-8 md:px-0'>
                        {Services.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center justify-center w-full md:w-[160px] lg:w-[178.94px] h-[150.92px] shadow-lg
                                rounded-xl'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h4 className='text-[20px] font-medium'>{item.title}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex items-center justify-end pt-10'>
                        <div className='flex items-center justify-center gap-3 bg-[#002748] text-white text-[20px] py-2 px-7
                        rounded-lg'>
                            <button>
                                Next
                            </button>
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </>
  )
}

export default InquiryServiceReqForm