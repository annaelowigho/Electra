import React, { useState } from 'react'
import { LuPhoneForwarded } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";

const BookNow = () => {

    const [email, setEmail] = useState('');
    const [vehicleRegNum, setVehicleRegNum] = useState('');

  return ( 
    <>
        <div className='py-[30px] md:py-[50px] px-[20px] md:px-[30px] xl:px-[100px]'>
            {/* <p className='text-[20px] md:text-[24px] font-medium text-center'>
                Please proceed to make a payment of ₦10,000 to book for the CNG conversion
            </p> */}
            <div className='py-[30px] md:py-[50px] md:px-[30px] xl:px-[200px]'>
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
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Full Name</label>
                                <input type="text" placeholder='John Doe' 
                                className='w-full rounded-md p-3 font-normal border-1 border-black/50'/>
                            </div>
                            <div className='relative flex flex-col gap-2 w-full'>
                                <label htmlFor="email" className='text-[18px] md:text-[24px] font-semibold'>
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder='youremail@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full rounded-md p-3 font-normal border border-black/50'
                                />

                                {email === '' && (
                                    <span className='absolute right-[8px] top-[52px] md:top-[55px] text-black/50 text-[12px] md:text-[16px]
                                    lg:text-[18px]'>
                                        optional
                                    </span>
                                )}
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Phone Number</label>
                                <input type="email" placeholder='+2340123456789' 
                                className='w-full rounded-md p-3 font-normal border-1 border-black/50'/>
                            </div>
                            <div className='relative flex flex-col gap-2 w-full'>
                                <label htmlFor="vehicleRegNum" className='text-[18px] md:text-[24px] font-semibold '>Vehicle Reg No</label>
                                <input id='vehicleRegNum' type="text" placeholder='GGE 123 ZY' value={vehicleRegNum}
                                onChange={(e) => setVehicleRegNum(e.target.value)}
                                className='w-full rounded-md p-3 font-normal border-1 border-black/50'/>
                                {vehicleRegNum === '' && (
                                    <span className='absolute right-[8px] top-[52px] md:top-[55px] text-black/50 text-[12px] md:text-[16px]
                                    lg:text-[18px]'>
                                        optional
                                    </span>
                                )}
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-[18px] md:text-[24px] font-semibold '>Vehicle Brand</label>
                                <input type="text" placeholder='Toyota' 
                                className='w-full rounded-md p-3 font-normal border-1 border-black/50'/>
                            </div>
                        </div>
                        <div className='flex items-center pt-4 gap-3 cursor-pointer'>
                            <label className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" className='w-[20px] h-[20px] cursor-pointer' />
                                <p className='text-[14px] md:text-[18px] font-semibold m-0'>
                                I agree to the Company's <span className='italic font-light'>Terms and Conditions.</span>
                                </p>
                            </label>
                        </div>
                        <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-lg cursor-pointer px-6 py-4 text-center
                        mt-[15px] hover:shadow-lg transition-transform duration-500 hover:scale-101 hover:bg-[#2FEAE4] hover:border-[3px]
                        hover:border-[#002748] hover:text-[#13202b]'>
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookNow