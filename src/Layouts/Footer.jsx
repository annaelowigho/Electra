import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { FaTurnUp } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className='bg-[#002748]'>
        <div className='px-[20px] md:px-[30px] xl:px-[150px] pt-[20px] xl:pt-[40px] pb-[50px] xl:pb-[102px]
        bg-[url(/assets/footer-bg-cover.svg)]'>
          <div className='flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between'>
            <div className='w-full md:w-[245px]'>
              <Link to='/'><img src="/assets/electra-logo.svg" alt="" /></Link>
              <p className='text-white text-[14px] xl:text-[18px] py-[15px] lg:py-[20px]'>
                Electra Motors Limited, based in Nigeria, offers expert vehicle maintenance, repairs, and CNG conversion.
                Committed to sustainability and exceptional service, it aims to lead the Nigerian automotive sector
              </p>
              <div className='text-white text-[25px] flex gap-5 items-center'>
                <a href="https://www.instagram.com/electramotorshq?igsh=MWhvNHc1N2xkaWY0cQ%3D%3D&utm_source=qr">
                  <FaInstagram className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125'/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61576083733329">
                  <LuFacebook className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125'/>
                </a>
                <SlSocialYoutube className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125' />
                <BsTwitterX className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125' />
              </div>
            </div>
            <div className='text-white'>
              <h5 className='text-[25px] font-semibold'>Company</h5>
              <div className='pt-4 flex flex-col gap-3'>
                <a href="/electra" className='text-[18px] hover:text-[#2FEAE4]'>Electra</a>
                {/* <Link to='/electra'>About Us</Link> */}
                <a href="/services" className='text-[18px] hover:text-[#2FEAE4]'>Services</a>
                <a href="/careers" className='text-[18px] hover:text-[#2FEAE4]'>Careers</a>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>News and Events</a>
                <a href="/inquiries" className='text-[18px] hover:text-[#2FEAE4]'>Inquiries</a>
                {/* <a href="/terms-policy" className='text-[18px] hover:text-[#2FEAE4]'>Terms Policy</a>
                <a href="/privacy-policy" className='text-[18px] hover:text-[#2FEAE4]'>Privacy Policy</a> */}
              </div>
            </div>
            <div className='text-white'>
              <h5 className='text-[25px] font-semibold'>Contact us</h5>
              <div className='pt-4 flex flex-col gap-3'>
                <div className='flex items-center gap-3 cursor-pointer hover:text-[#2FEAE4] xl:gap-5'>
                  <IoLocationOutline className='text-[40px] md:text-[30px] lg:text-[25px]'/>
                  <p className='text-[18px] md:w-[250px] xl:w-[380px]'># 1, Dbs Junction, Okpanam Road Beside Zenith Bank Plc, Asaba</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer hover:text-[#2FEAE4] xl:gap-5'>
                  <FiPhoneCall className='text-[25px] lg:text-[20px]'/>
                  <p className='text-[18px] w-[190px] xl:w-[380px]'>+234 811 5891 543  |  +234 814 5362 548</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer hover:text-[#2FEAE4] xl:gap-5'>
                  <BiEnvelope className='text-[25px] lg:text-[20px]'/>
                  <p className='text-[18px]'>info@electramotors.ng</p>
                </div>
                <div
                  className="flex justify-end animate-bounce cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  role="button"
                  aria-label="Scroll to top"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="flex items-center justify-center border-2 border-white w-[80px] h-[80px] rounded-xl hover:bg-[#2FEAE4] 
                  hover:border-[#002748] transition-all duration-300 text-[25px] text-white hover:text-[#002748]">
                    <FaTurnUp className="" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className='pt-5 md:pt-10 w-full'>
            <hr className='border-1 border-white w-full'></hr>
            <div className='pt-3 md:pt-4 text-white flex flex-col gap-2 md:flex-row md:gap-30 lg:justify-between'>
              <p className='text-[18px] font-medium'>All rights reserved © Copyright 2024 - 2025</p>
              <div className='space-x-2'>
                <a href="/terms-policy" className='text-[18px] hover:text-[#2FEAE4]'>Terms Policy</a>
                <span className='border-1 border-white'></span>
                <a href="/privacy-policy" className='text-[18px] hover:text-[#2FEAE4]'>Privacy Policy</a>
                <span className='border-1 border-white'></span>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>Refund Policy</a>
                <span className='border-1 border-white'></span>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>Safeguarding Policy</a>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/footer-line.svg" alt="" className='w-full'/>
      </div>
      
    </>
  )
}

export default Footer