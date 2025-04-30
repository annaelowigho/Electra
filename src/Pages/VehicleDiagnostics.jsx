import React, { useState } from 'react'
import { LuPlus } from "react-icons/lu";


const Services = [
    {
        image: "/assets/engine-diagnostic.png",
        title: "Engine Diagnostics",
        description: "Identify engine issues with state-of-the-art OBD-II scanning tools",
        price: "Starting at ₦15,000"
    },
    {
        image: "/assets/electric-system-diag.png",
        title: "Electrical System Diagnostics",
        description: "Diagnose issues in wiring, batteries, and electronic components",
        price: "Starting at ₦20,000"
    },
    {
        image: "/assets/transmission-diag.png",
        title: "Transmission Diagnostics",
        description: "Pinpoint transmission problems for smooth gear shifting.",
        price: "Starting at ₦45,000"
    }
]

const Process = [
    {
        number: "1",
        title: "Initial Consultation",
        description: "Discuss vehicle symptoms with our expert technicians"
    },
    {
        number: "2",
        title: "Diagnostics Scans",
        description: "Use advanced tools to retrieve error codes and system data."
    },
    {
        number: "3",
        title: "Analysis",
        description: "Interpret data to identify the root cause of issues."
    },
    {
        number: "4",
        title: "Report & Recommendation",
        description: "Provide a detailed report with repair recommendations."
    }
]

const FAQs = [
    {
        question: "How long does a diagnostic take?",
        answer: "Most diagnostic are completed with 30 - 60 minutes, depending on the complexity of the issue"
    },
    {
        question: "Do I need to book an appointment?",
        answer: "While walk-ins are welcomed, booking an appointment ensures faster service"
    },
    {
        question: "What happens after the diagnostics?",
        answer: "We provide a detailed report and recommend the next steps for repairs if needed"
    },
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

const VehicleDiagnostics = () => {
  return (
    <>
        <div className="bg-[url(/assets/vehicle-diagnostic-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] md:text-[60px] font-bold leading-14 md:leading-16">Vehicle Diagnostics</h2>
                <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                    Discover the Problem Drive with confidence 
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Diagnostics Services
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[23px]'>
                {Services.map((item, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md px-5 py-8 rounded-lg'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[24px] font-semibold'>{item.price}</p>
                                <button className='font-primary text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[20px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='bg-[#002748] px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] mb-[30px] md:mb-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14 text-white">
                Our Diagnostics Process
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]'>
                {Process.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-[22px] py-[31px] rounded-xl flex flex-col items-center space-y-3
                        hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-[#002748] text-white flex justify-center items-center'>
                                <p className='text-[24px]'>{item.number}</p>
                            </div>
                            <h5 className='text-[24px] font-semibold text-center'>{item.title}</h5>
                            <p className='text-center text-[18px] font-medium'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='px-[20px] pb-[30px] md:px-[70px] md:pb-[50px] xl:px-[200px] xl:pb-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Frequently Asked Question
            </h2>
            <div className="pt-[30px] flex flex-col gap-5 md:gap-8">
                {FAQs.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div> 
        </div>
        <div className='px-[20px] pb-[30px] md:px-[70px] md:pb-[50px] xl:px-[300px] xl:pb-[100px]'>
            <div className='p-[10px] md:p-[50px] shadow-md rounded-xl'>
                <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                    Book for Refurbishing
                </h2>
                <div className='pt-[20px]'>
                    <form action="" className='w-full space-y-3 xl:space-y-5'>
                        <input type="text" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Full Name'/>
                        <input type="text" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Phone Number'/>
                        <input type="email" className='bg-[#D9E8F4] w-full h-[70px] md:h-[90px] rounded-xl px-[20px] md:px-[30px]
                        text-[24px] outline-none' placeholder='Email Address'/>
                        <div className=' px-[20px] md:px-[30px] bg-[#D9E8F4] rounded-xl'>
                            <select name="" id="" className='w-full h-[70px] md:h-[90px]
                            text-[24px] outline-none'>
                                <option value="">Select Service</option>
                                <option value="">Complete Engine Overhaul</option>
                                <option value="">Engine Diagnostics</option>
                                <option value="">Engine Tuning</option>
                                <option value="">Turbocharger Repair</option>
                            </select>
                        </div>
                        <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-xl cursor-pointer px-6 py-4 
                        text-center hover:shadow-lg transition-transform duration-500 hover:scale-102 hover:bg-[#2FEAE4]
                        hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default VehicleDiagnostics