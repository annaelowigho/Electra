import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaHelmetSafety } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { MdHomeWork } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaCar } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { LuPlus } from "react-icons/lu";


const JobCard = [
    {
        title: "CNG Conversion Technician",
        departmentIcon: "DepartmentIcon",
        department: "Engineering Department",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "CEV Maintenance Technician",
        departmentIcon: "DepartmentIcon",
        department: "Technical Services",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "EV Charging Specialist",
        departmentIcon: "DepartmentIcon",
        department: "Engineering Department",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Customer Care Rep",
        departmentIcon: "DepartmentIcon",
        department: "Customer Service",
        employmentTimeIcon: "TfiHeadphoneAlt",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Sales Executive",
        departmentIcon: "DepartmentIcon",
        department: "Marketing & Sales",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    },
    {
        title: "Logistics Coordinator",
        departmentIcon: "DepartmentIcon",
        department: "Supply Chain & Logistics",
        employmentTimeIcon: "EmploymentTimeIcon",
        employmentTime: "Full-Time",
        employmentTypeIcon: "EmploymentTypeIcon",
        employmentType: "Remote/Hybrid/On-site",
        dateIcon: "DateIcon",
        date: "Posted: April 15,2025",
        view: "View Details",
    }
]

const ChooseUs = [
    {
        icon: FaCar,
        title: "Pioneering EV & CNG Innovation in Nigeria",
        description: "Join Nigeria's green transport revolution and shape Africa's mobility future."
    },
    {
        icon: PiCertificateBold,
        title: "Certified Training & Career Growth",
        description: "Unlock learning with global certifications and career growth opportunities."
    },
    {
        icon: FaCar,
        title: "Sustainable & Impact-Driven Vision",
        description: "Help cut carbon emissions and create a sustainable future for Nigeria"
    },
    {
        icon: IoIosPeople,
        title: "Supportive Team Culture",
        description: "Be part of a team that champions innovation, inclusion, and work-life balance."
    }
]

const Testimonials = [
    {
        image: "/assets/testimonial3.svg",
        description: "Working at Electra Motors has been a career high—advancing Nigeria's sustainable future through innovative EV technology while growing professionally and personally.",
        name: "Adeboye Johnson",
        position: "Senior Engineer, 3 years"
    },
    {
        image: "/assets/testimonial2.svg",
        description: "At Electra Motors, I'm proud to help transform transportation in Nigeria—it's more than a job; it's a mission",
        name: "Chioma Okafor",
        position: "Marketing Specialist, 2 years"
    },
    {
        image: "/assets/testimonial3.svg",
        description: "Electra Motors' training elevated my career basic automotive skills to CNG conversion expertise &  shaped Nigeria's energy future.",
        name: "Emmanuel Nwachukwu",
        position: "CNG Technicians, 6 months"
    }
]

const FAQs = [
    {
        question: "What is the Process like?",
        answer: "Review the available job opportunities listed on our platform and click the apply now button corresponding to the job you're interested in.",
        
    },
    {
        question: "Where is the office located?",
        answer: "The office is situated at Delta State Innovation Hub, No. 1 DBS Junction, Okpanam Road, Beside Zenith Bank, Asaba, Delta State, Nigeria."
    },
    {
        question: "What are the training benefits?",
        answer: "CNG conversion services for vehicles, Technical Training to enhance skills and meet industry demands, and Sales of high-quality conversion kits to streamline the CNG transition process."
    },
    {
        question: "Can I apply without experience?",
        answer: "Yes! Beginners are welcome. The focus is on yor interest and willingness to learn."
    }
]

// FAQ Item Component
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    // Create a unique ID for accessibility (use question as base, sanitized)
    const answerId = `faq-answer-${question.toLowerCase().replace(/\s+/g, '-')}`;
  
    return (
      <div className="bg-[#D9E8F4] rounded-xl">
        <div className="p-3 md:p-5 xl:px-[50px] xl:py-[22px] flex justify-between items-center">
          <p className="text-[16px] md:text-[24px] font-semibold">{question}</p>
          <button
            onClick={toggleAnswer}
            className="bg-[#002748] w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200"
            aria-expanded={isOpen}
            aria-controls={answerId}
            type="button"
          >
            <span
              className={`text-white text-xl md:text-2xl transition-transform duration-200 ${
                isOpen ? 'rotate-45' : 'rotate-0'
              }`}
            >
              <LuPlus />
            </span>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          id={answerId}
        >
          <p className="py-1 px-3 md:p-5 xl:px-[50px] xl:py-[22px] text-[16px] md:text-[24px] font-medium">
            {answer}
          </p>
        </div>
      </div>
    );
  }

const Careers = () => {    
  
    const [departments, setDepartments] = useState("");

  return (
    <>
        <div className="bg-[url(/assets/career-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">Careers</h2>
                <p className="text-white text-[20px] md:text-[24px]">Join the Team Driving Nigeria’s Green Future</p>
            </div>
        </div>
        <div className='p-[20px] md:p-[50px] lg:p-[100px]'>
            <p className="text-[20px] md:text-[24px]">Explore open roles in Electric Vehicles, CNG Innovation, Tech, and Training.</p>
            <h4 className='text-[30px] font-semibold md:text-[48px] pt-[20px] lg:pt-[50px] text-center'>Open Positions</h4>
            <div className='bg-[#002748] py-[20px] px-[30px] md:py-[26px] md:px-[10px] lg:px-[50px] mt-[20px] rounded-xl 
            flex flex-col gap-[10px] md:flex-row lg:gap-[20px]'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Departments</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        value={departments}
                        onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="" disabled hidden>All Departments</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Job Types</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        // value={departments}
                        // onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="">All Types</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='text-white text-[20px] pb-2'>Location</h5>
                    <div className="rounded-md bg-white w-full p-3">
                        <select 
                        name="allDepartments" 
                        id="allDepartments"
                        // value={departments}
                        // onChange={(e) => setDepartments(e.target.value)}
                        className="outline-none w-full text-gray-700 bg-transparent"
                        >
                            <option value="" disabled hidden>All Locations</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h5 className='text-white text-[20px] pb-2'>Search</h5>
                    <div className="rounded-md bg-white w-full p-3 flex justify-between items-center">
                        <input type="text" placeholder='Search Jobs...' className='outline-none'/>
                        <IoMdSearch className='text-[24px]'/>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div className='pt-[20px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {JobCard.map((item, index) => {
                    return (
                        <div key={index} className='shadow-md p-5 rounded-lg'>
                            <h4 className='text-[24px] font-semibold'>{item.title}</h4>
                            <div className='pt-5 space-y-2'>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.departmentIcon && <FaHelmetSafety />}
                                    <p>{item.department}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.employmentTimeIcon && <CgToolbox />}
                                    <p>{item.employmentTime}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.employmentTypeIcon && <MdHomeWork />}
                                    <p>{item.employmentType}</p>
                                </div>
                                <div className='flex gap-3 items-center text-[18px] font-medium'>
                                    {item.dateIcon && <IoCalendarNumberOutline />}
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className='pt-[25px] flex justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <p>{item.view}</p>
                                    <FaChevronDown />
                                </div>
                                <button className='text-[16px] text-white bg-[#002748] p-[10px] rounded-lg cursor-pointer'>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Why Choose Us */}
        <div className='bg-[#002748] py-[30px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[100px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-7 md:leading-12 xl:leading-14 text-white">
                Why Choose Us
            </h2>
            <div className='pt-[30px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]'>          
                {ChooseUs.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className='bg-white px-[18px] py-[30px] flex flex-col items-center rounded-xl
                        h-[255px] xl:h-[270px] hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='bg-[#002748] h-[50px] w-[50px] rounded-full flex items-center justify-center'>
                                <Icon className='text-[30px] text-white'/>
                            </div>
                            <h4 className='text-[18px] font-semibold pt-5 text-center'>{item.title}</h4>
                            <p className='text-center pt-5 text-[14px]'>{item.description}</p>
                        </div>
                    )         
                })}
            </div>
        </div>

        {/* General Application */}
        <div className='py-[30px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-7 md:leading-12 xl:leading-14">
                General Application
            </h2>
            <p className="text-[20px] md:text-[24px] text-center pt-[10px]">No matching role? Submit your CV — we're always seeking talent</p>
            <div className='bg-[#D9E8F4] mt-[30px] xl:pt-[50px] rounded-xl p-[20px] xl:p-[50px]'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='text-[18px] md:text-[24px] font-semibold flex flex-col gap-2 w-full'>
                        <label htmlFor="">Full-Name</label>
                        <input type="text" className='bg-white rounded-md p-3'/>
                    </div>
                    <div className='text-[18px] md:text-[24px] font-semibold flex flex-col gap-2 w-full'>
                        <label htmlFor="">Email Address</label>
                        <input type="email" className='bg-white rounded-md p-3'/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:pt-4'>
                    <div className='text-[18px] md:text-[24px] font-semibold flex flex-col gap-2 w-full pt-4 md:pt-0'>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" className='bg-white rounded-md p-3'/>
                    </div>
                    <div className='text-[18px] md:text-[24px] font-semibold flex flex-col gap-2 w-full'>
                        <label htmlFor="">Preferred Department</label>
                        <div className='bg-white rounded-md p-3 font-normal'>
                            <select name="" id="" className='w-full outline-none'>
                                <option value="" hidden disabled>Select Department</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='pt-4 flex flex-col'>
                    <label htmlFor="" className=' text-[18px] md:text-[24px] font-semibold pb-3'>Upload CV (PDF or DOC)</label>
                    <div className='bg-white rounded-md p-3 flex justify-between items-center'>
                        <input type="file" className=''/>
                        <button className='bg-[#002748] px-3 py-2 rounded-md text-white hidden md:block'>
                            Browse File
                        </button>
                    </div>
                </div>
                <div className='pt-4 flex flex-col'>
                    <label htmlFor="" className=' text-[18px] md:text-[24px] font-semibold pb-3'>Cover Letter/Additional Information</label>
                    <textarea name="" id="" className='bg-white rounded-md p-3 resize-none' rows='5'/>
                </div>
                <div className='pt-4 space-x-3 flex items-center'>
                    <input type="checkbox" id='agree' className='w-[30px] md:w-[24px] h-[30px] md:h-[24px] cursor-pointer'/>
                    <label htmlFor="agree" className='text-[18px] md:text-[24px] font-semibold cursor-pointer leading-5'>
                        I agree to Electra Motors using my personal data for recruitment
                    </label>
                </div>
            </div>
        </div>


        {/* Testimonials */}
        <div className='pb-[30px] md:pb-[50px] xl:pb-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-7 md:leading-12 xl:leading-14">
                Testimonials
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-8 justify-center'>
                {Testimonials.map((item, index) => {
                    return (
                        <div key={index} className='mt-[20px] xl:mt-[50px] flex flex-col items-center shadow-lg rounded-xl p-[35px] gap-5 
                        text-[16px] font-semibold h-[255px] md:h-[360px] xl:h-[380px] hover:bg-[#002748] transition-all duration-300 
                        hover:-translate-y-2 hover:text-white'>
                            <img src={item.image} alt="" />
                            <p className='text-center'>{item.description}</p>
                            <div className='text-center'>
                                <p>{item.name}</p>
                                <p className='text-[gray]'>{item.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className='px-[20px] pb-[20px] md:px-[30px] md:pb-[50px] xl:px-[200px] xl:pb-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Frequently Asked Questions</h2>
            <p className="text-center text-[20px] md:text-[24px]">Find answers to common questions  about CNG  Conversion and its Benefits </p>
            <div className='pt-[30px] flex flex-col gap-5 md:gap-10 xl:gap-14'>
                <div className="pt-[30px] flex flex-col gap-5 md:gap-10 xl:gap-14">
                    {FAQs.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div> 
            </div>
        </div>

        <div className='bg-[#2FEAE4] py-[30px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[150px] mb-[30px] 
        md:mb-[50px] xl:mb-[100px]'>
            <div className='flex flex-col space-y-4 items-center'>
                <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-7 md:leading-12 xl:leading-14">
                    Can't find a role that suits you?
                </h2>
                <p className="text-[20px] md:text-[24px] text-center pt-[10px]">
                    Submit your CV anyway — we'd love to meet you and keep you in mind for future opportunities 
                    that match your skills and interests.
                </p>
                <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer px-6 py-4 text-center
                mt-[15px] hover:shadow-lg transition-transform-y duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px]
                hover:border-[#002748] hover:text-[#002748]'>
                    Open Application Form
                </button>
            </div>
        </div>
    </>
  )
}

export default Careers