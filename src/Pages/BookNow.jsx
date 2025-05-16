import React from 'react'
import { LuPhoneForwarded } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";

const BookNow = () => {
  return (
    <>
        <div className='py-[30px] md:py-[50px] px-[20px] md:px-[30px] xl:px-[100px]'>
            <p className='text-[20px] md:text-[24px] font-medium'>
                Please proceed to make a payment of ₦10,000 to book for the CNG conversion
            </p>
            <div className='py-[30px] md:py-[50px] px-[20px] md:px-[30px] xl:px-[200px]'>
                <div className='bg-[#002748] rounded-t-2xl px-5 py-10'>
                    <h1 className='text-[28px] text-white text-center font-semibold md:text-[48px] leading-7'>
                        Book Your CNG Conversion
                    </h1>
                    <p className='text-[15px] md:text-[24px] font-medium text-center text-white pt-3 md:pt-6'>
                        Schedule your vehicle's CNG conversion: Provide the details below
                    </p>
                </div>
                <div className='rounded-b-2xl px-5 py-10 shadow-lg'>
                    <form action="">
                        <div className='space-y-4'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Vehicle Type</label>
                                <div className='rounded-md p-3 font-normal border-1'>
                                    <select name="" id="" className='w-full outline-none'>
                                        <option value="">Select Your Vehicle Type</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Vehicle Specification</label>
                                <div className='rounded-md p-3 font-normal border-1'>
                                    <select name="" id="" className='w-full outline-none'>
                                        <option value="">Select Your Vehicle Type</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Service Date</label>
                                <div className='rounded-md p-3 font-normal border-1'>
                                    <input type="date" className='w-full outline-none'/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Service Time</label>
                                <div className='rounded-md p-3 font-normal border-1'>
                                    <input type="time" className='w-full outline-none'/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Phone Number</label>
                                <div className='rounded-md p-3 font-normal border-1 flex justify-between items-center'>
                                    <input type="text" className='w-full outline-none' placeholder='+234 800 000 0000'/>
                                    <LuPhoneForwarded />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Email Address</label>
                                <div className='rounded-md p-3 font-normal border-1 flex justify-between items-center'>
                                    <input type="text" className='w-full outline-none' placeholder='+234 800 000 0000'/>
                                    <BiEnvelope />
                                </div>
                            </div>
                        </div>
                        <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-lg cursor-pointer px-6 py-4 text-center
                        mt-[15px] hover:shadow-lg transition-transform duration-500 hover:scale-102 hover:bg-[#2FEAE4] hover:border-[3px]
                        hover:border-[#002748] hover:text-[#002748]'>
                            Open Application Form
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookNow