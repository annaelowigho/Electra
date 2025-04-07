import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const Center = [
    {
        icon: HiOutlineBuildingOffice2,
        office: "Head Office",
        location: "108 3RD Avenue, Gwarimpa, FCT Abuja",
    }
]

const ContactUs = () => {
  return (
    <>
        <div className="bg-[url(/assets/contact-us-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">Contact Us</h2>
                <p className="text-white text-[20px] md:text-[24px]">Reach Out for Expert Assistance and Services</p>
            </div>
        </div>
        <div className='py-[20px] md:py-[50px] xl:pt-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <div className='px-[15px] py-[35px] shadow-lg rounded-2xl space-y-5'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                    <HiOutlineBuildingOffice2 className='text-white text-[24px]'/> 
                </div>
                <h5 className='text-[24px] font-semibold'>Head Office</h5>
                <p className='text-[18px] font-medium'>108 3RD Avenue, Gwarimpa, FCT Abuja</p>
            </div>
        </div>
    </>
  )
}

export default ContactUs