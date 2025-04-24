import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className='bg-[#002748]'>
        <div className='px-[20px] md:px-[30px] xl:px-[150px] pt-[20px] xl:pt-[40px] pb-[50px] xl:pb-[102px]
        bg-[url(/assets/footer-bg-cover.svg)]'>
          <div className='flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between'>
            <div className='w-full md:w-[245px]'>
              <img src="/assets/electra-logo.svg" alt="" />
              <p className='text-white text-[14px] xl:text-[18px] py-[15px] lg:py-[20px]'>
                Electra Motors Limited, based in Nigeria, offers expert vehicle maintenance, repairs, and CNG conversion.
                Committed to sustainability and exceptional service, it aims to lead the Nigerian automotive sector
              </p>
              <div className='text-white text-[25px] flex gap-5 items-center'>
                <FaInstagram className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125'/>
                <SlSocialYoutube className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125' />
                <BsTwitterX className='hover:text-[#2FEAE4] cursor-pointer transition-transform duration-300 transform hover:scale-125' />
              </div>
            </div>
            <div className='text-white'>
              <h5 className='text-[25px] font-semibold'>Company</h5>
              <div className='pt-4 flex flex-col gap-3'>
                <a href="/electra" className='text-[18px] hover:text-[#2FEAE4]'>About Us</a>
                {/* <Link to='/electra'>About Us</Link> */}
                <a href="/services" className='text-[18px] hover:text-[#2FEAE4]'>Services</a>
                <a href="/careers" className='text-[18px] hover:text-[#2FEAE4]'>Careers</a>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>FAQs</a>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>Terms Policy</a>
                <a href="" className='text-[18px] hover:text-[#2FEAE4]'>Privacy Policy</a>
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