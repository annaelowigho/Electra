import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Link} from 'react-scroll'


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header className={`bg-[#002748] w-full flex items-center justify-between px-[20px] md:px-[50px] xl:px-[101px] py-[20px]
      transition-all duration-500 ${isFixed ? "fixed top-0 left-0 shadow-lg z-50" : "" }`}>
        <img src="/assets/logo.svg" alt="" />
        <ul className='hidden xl:flex text-white gap-[45px] text-[18px] font-semibold font-primary'>
          <li>Home</li>
          <li>About Us</li>
          <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <div className='flex items-center'>
              <p>CNG</p>
              <MdKeyboardArrowDown className='text-[24px]'/>
            </div>
            {/* {isDropdownOpen && (
              <ul
                className="absolute left-0 w-[200px] bg-white shadow-md rounded-md p-2"
                onClick={() => setIsDropdownOpen(false)} // Close on click
              >
                <li className="hover:bg-gray-200 p-2">
                  <Link smooth to="#users">For Customers</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link smooth to="#laundry-shops">Laundry Shops</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link smooth to="#services">Services</Link>
                </li>
              </ul>
            )} */}
          </li>
          <li>
            <div className='flex items-center'>
              <p>Services</p>
              <MdKeyboardArrowDown className='text-[24px]'/>
            </div>
          </li>
          <li>Training</li>
          <li>Contact Us</li>
        </ul>
        <button className='font-primary text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer
        hidden xl:block'>
          Book Now
        </button>

        {/* Mobile menu */}
        <div className='xl:hidden'>
          <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-[30px] md:text-[40px] rounded-md p-2 md:p-3 bg-[#2FEAE4]"
            >
              {isMenuOpen ? <IoCloseSharp /> : <CgMenu />}
            </button>

            {isMenuOpen && (
              <div className="fixed top-[90px] md:top-[100px] left-0 w-full p-5 bg-[#002748]/50 rounded-b-3xl z-50">
                <ul className='text-white flex flex-col gap-[25px] text-[18px] font-semibold font-primary'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>
                    <div className='flex items-center'>
                      <p>CNG</p>
                      <MdKeyboardArrowDown className='text-[24px]'/>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <p>Services</p>
                      <MdKeyboardArrowDown className='text-[24px]'/>
                    </div>
                  </li>
                  <li>Training</li>
                  <li>Contact Us</li>
                </ul>

                <div className='py-[30px] flex items-center justify-center'>
                  <button className='font-primary text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer
                    '>
                    Book Now
                  </button>
                </div>
              </div>
            )}
        </div>
      </header>
    </>
  )
}

export default Nav