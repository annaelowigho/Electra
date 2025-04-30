import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiPhoneForwarded } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import Map from '../Components/Map';




const Center = [
    {
        icon: HiOutlineBuildingOffice2,
        office: "Head Office",
        location: "108 3RD Avenue, Gwarimpa, FCT Abuja",
    },
    {
        icon: HiOutlineBuildingOffice2,
        office: "Training Center",
        location: "#1, DBS Junction, Okpanam Road Beside Zenith Bank Plc, Asaba",
    },
    {
        icon: HiOutlineBuildingOffice2,
        office: "Production Facility",
        location: "Plot 12, Block 3, Delta State Industrial Estate,Ibusa Road, Asaba, Delta State",
    }
]

const ContactUs = () => {
  return (
    <>
        <div className="bg-[url(/assets/contact-us-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">Contact Us</h2>
                <p className="text-white text-[20px] md:text-[24px]">Reach Out for Expert Assistance and Services</p>
            </div>
        </div>

        {/* Training Center */}
        <div className='py-[20px] md:pt-[50px] xl:pt-[100px] px-[20px] md:px-[30px] xl:px-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
                {Center.map((item, index) => {
                    const Icon = item.icon
                    return(
                        <div key={index} className='px-[15px] py-[35px] shadow-lg rounded-2xl space-y-5 xl:px-[20px] xl:py-[50px]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                                <Icon className='text-white text-[24px]'/> 
                            </div>
                            <h5 className='text-[24px] font-semibold'>{item.office}</h5>
                            <p className='text-[18px] font-medium'>{item.location}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='py-[20px] md:py-[50px] px-[20px] md:px-[30px] xl:px-[100px] flex flex-col gap-[20px] md:flex-row'>
            <div className='px-[15px] py-[35px] shadow-lg rounded-2xl space-y-5 w-full xl:px-[20px] xl:py-[50px]'>
                <h5 className='text-[24px] font-semibold'>Contact Information</h5>
                <div className='flex gap-[20px] items-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                        <FiPhoneForwarded className='text-[22px] text-white'/> 
                    </div>
                    <div className='text-[18px] font-medium'>
                        <p>+234 814 5362 548</p>
                        <p>+234 811 5891 543</p>
                    </div>
                </div>
                <div className='flex items-center gap-[20px] pt-[25px]'>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                        <RxEnvelopeClosed className='text-[22px] text-white'/> 
                    </div>
                    <p className='text-[18px] font-medium'>info@electramotors.ng</p>
                </div>
            </div>
            <div className='px-[15px] py-[35px] shadow-lg rounded-2xl space-y-5 w-full xl:px-[20px] xl:py-[50px]'>
                <h5 className='text-[24px] font-semibold'>Working Hours</h5>
                <div className='flex justify-between'>
                    <div className='space-y-4'>
                        <p className='text-[18px] font-medium'>
                            Monday - Friday
                        </p>
                        <p className='text-[18px] font-medium'>
                            Saturday
                        </p>
                        <p className='text-[18px] font-medium'>
                            Sunday
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-[18px] font-medium'>
                            8:00am - 5:00pm
                        </p>
                        <p className='text-[18px] font-medium'>
                            9:00am - 4:00pm
                        </p>
                        <p className='text-[18px] font-medium'>
                            Closed
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Info */}
        <div className='py-[20px] md:py-[50px] xl:py-[150px] px-[20px] md:px-[30px] xl:px-[100px] flex flex-col lg:flex-row lg:justify-center lg:gap-[50px] xl:gap-[100px]'>
            <div className='w-full lg:w-1/2'>
                <form action="" className='space-y-[10px] xl:space-y-[30px]'>
                    <input type="text" placeholder='Full Name' className='bg-[#D9E8F4] text-[18px] font-medium p-[25px] rounded-2xl w-full' />
                    <input type="email" placeholder='Email Address' className='bg-[#D9E8F4] text-[18px] font-medium p-[25px] rounded-2xl w-full' />
                    <input type="email" placeholder='Phone Number' className='bg-[#D9E8F4] text-[18px] font-medium p-[25px] rounded-2xl w-full' />
                    <textarea name="message" id="message" placeholder='Message' rows='4'
                    className='bg-[#D9E8F4] p-[20px] rounded-xl w-full text-[18px] font-medium resize-none'></textarea>
                    <button className='font-primary text-[18px] md:text-[22px] text-white font-semibold bg-[#002748] rounded-lg 
                    cursor-pointer w-full xl:w-[203px] h-[52px] hover:bg-[#2FEAE4]
                    hover:border-[3px] hover:border-[#002748] hover:text-[#002748] hover:shadow-lg
                    transition-transform-y duration-500 hover:scale-105'>
                        Send Message
                    </button>
                </form>
            </div>
            <div className='bg-[#D9E8F4] p-[30px] xl:p-[50px] flex flex-col items-center justify-center rounded-2xl mt-[50px] w-full lg:w-1/2 lg:mt-0'>
                <h5 className='text-[24px] font-semibold'>Our Newsletter</h5>
                <p className='text-[18px] font-medium pt-[25px] text-center'>
                    Stay Ahead on the Road: Exclusive Updates on 
                    CNG Solutions and Expert Vehicle Maintenance Tips
                </p>
                <input type="email" placeholder='Email Address' 
                className='bg-white text-[18px] font-medium p-[25px] rounded-2xl w-full mt-[50px]' />
                <button className='mt-[50px] font-primary text-[18px] md:text-[22px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer w-[203px] 
                h-[52px] hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748] hover:shadow-lg
                transition-transform-y duration-500 hover:scale-105'>
                    Submit
                </button>
            </div>
        </div>

        {/* Map */}
        <div className='pb-[20px] pt-[50px] xl:pt-0 md:pb-[50px] xl:pb-[150px] px-[20px] md:px-[30px] xl:px-[100px] w-full h-[458px] xl:h-[600px]'>
            <Map />
        </div>
    </>
  )
}

export default ContactUs