import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
// import { Link} from 'react-scroll'
import { Link, NavLink } from 'react-router-dom';


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
          <li className="hover:text-[#2FEAE4]">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              Home
            </NavLink>
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to='/about-us' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              About Us
            </NavLink>
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to='/cng' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              CNG
            </NavLink>
          </li>
          {/* <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <div className='flex items-center'>
              <p>CNG</p>
              <MdKeyboardArrowDown className='text-[24px]'/>
            </div>
            {isDropdownOpen && (
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
            )}
          </li> */}
          <li>
            <NavLink to='/services' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              <div className='flex items-center hover:text-[#2FEAE4]'>
                <p>Services</p>
                <MdKeyboardArrowDown className='text-[24px]'/>
              </div>
            </NavLink>
            
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to="/training" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              Training
            </NavLink>
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <button className='font-primary text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer text-[#002748]
        hidden xl:block hover:shadow-lg transition-transform-y duration-500 hover:scale-105 hover:bg-[#002748] hover:border-[3px]
        hover:border-[#2FEAE4] hover:text-white'>
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
                  <li className="hover:text-[#2FEAE4]">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/about-us' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      About Us
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/cng' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      CNG
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/services' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      <div className='flex items-center'>
                        <p>Services</p>
                        <MdKeyboardArrowDown className='text-[24px]'/>
                      </div>
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/training' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      Training
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/contact-us' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

                <div className='py-[30px] flex items-center justify-center'>
                  <button className='font-primary text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer
                  hover:shadow-lg transition-transform-y duration-500 hover:scale-105 hover:bg-[#002748] hover:border-[3px]
                hover:border-[#2FEAE4] hover:text-white'>
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