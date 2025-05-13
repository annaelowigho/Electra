import React from 'react'
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
// import { Link} from 'react-scroll'
import { Link, NavLink } from 'react-router-dom';
// import { ul } from 'framer-motion/client';


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
        <Link to="/"><img src="/assets/electra-logo.svg" alt="" /></Link>
        <ul className='hidden xl:flex text-white gap-[45px] text-[18px] font-semibold font-primary'>
          <li className="hover:text-[#2FEAE4]">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              Home
            </NavLink>
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to='/electra' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              Electra
            </NavLink>
          </li>
          <li className='hover:text-[#2FEAE4]'>
            <NavLink to='/cng' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}>
              CNG
            </NavLink>
          </li>
          <li className='relative' onMouseEnter={() => setIsDropdownOpen(true)} >
            <NavLink>
              <div className='flex items-center hover:text-[#2FEAE4]'>
                <p>Services</p>
                <MdKeyboardArrowDown className='text-[24px]'/>
              </div>
            </NavLink>
            {isDropdownOpen && (
              <ul className='absolute top-[60px] bg-white text-black w-[300px] shadow-lg z-50 px-10 py-10 '
              onClick={() => setIsDropdownOpen(false)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Book CNG Conversion</li>
                <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Join CNG Training</li>
                <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Buy CNG Kits</li>
                <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Find Refueling Station</li>
                <Link to='/services'><li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Explore More</li></Link>
              </ul>
            )}
            
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
        <Link to='/book-now'>
          <button className='text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer text-[#002748] hidden 
          w-[147px] h-[52px] xl:w-[150px] xl:flex items-center justify-center transition-transform duration-500 hover:scale-105 
          hover:bg-transparent hover:border-[3px] hover:border-[#2FEAE4] hover:text-[#2FEAE4]'>
            Book Now
          </button>
        </Link>
        {/* Mobile menu */}
        <div className='xl:hidden'>
          <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-[30px] md:text-[40px] rounded-md p-2 md:p-3 bg-[#2FEAE4]"
            >
              {isMenuOpen ? <IoCloseSharp /> : <CgMenu />}
            </button>

            {isMenuOpen && (
              <div className="fixed top-[90px] md:top-[100px] left-0 w-full p-5 bg-[#002748]/70 rounded-b-3xl z-50">
                <ul className='text-white flex flex-col gap-[25px] text-[18px] font-semibold font-primary'>
                  <li className="hover:text-[#2FEAE4]">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/electra' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      Electra
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]'>
                    <NavLink to='/cng' className={({ isActive }) => isActive ? "text-[#2FEAE4]" : "text-inherit"}
                    onClick={() => setIsMenuOpen(false)}>
                      CNG
                    </NavLink>
                  </li>
                  <li className='hover:text-[#2FEAE4]' onClick={() => setIsDropdownOpen(true)}>
                    <NavLink>
                      <div className='flex items-center'>
                        <p>Services</p>
                        <MdKeyboardArrowDown className='text-[24px]'/>
                      </div>
                    </NavLink>  
                    {isDropdownOpen && (
                      <ul className=' bg-white text-black w-[300px] shadow-lg z-50 px-6 py-5 mt-2'
                      onClick={() => setIsMenuOpen(false)}>
                        <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Book CNG Conversion</li>
                        <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Join CNG Training</li>
                        <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Buy CNG Kits</li>
                        <li className='hover:bg-[#002748] cursor-pointer hover:text-white duration-500 w-full p-3'>Find Refueling Station</li>
                        <li className='hover:bg-[#2FEAE4] cursor-pointer hover:text-white duration-500 w-full p-3'><Link to='/services'>Explore More</Link></li>
                        {/* <Link to='/services'><li className='hover:bg-[#2FEAE4] cursor-pointer hover:text-white duration-500 w-full p-3'>Explore More</li></Link> */}
                      </ul>
                    )}
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
                  <Link to='/book-now' onClick={() => setIsMenuOpen(false)}>
                    <button className='text-[18px] font-semibold bg-[#2FEAE4] px-[30px] py-[15px] rounded-lg cursor-pointer text-[#002748]
                    h-[52px] w-[150px] flex items-center justify-center transition-transform duration-500 hover:scale-105 
                    hover:bg-transparent hover:border-[3px] hover:border-[#2FEAE4] hover:text-[#2FEAE4]'>
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            )}
        </div>
      </header>
    </>
  )
}

export default Nav