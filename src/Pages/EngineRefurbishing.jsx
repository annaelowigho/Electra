import React, { useState } from 'react'
import { LuPlus } from "react-icons/lu";


const Services = [
    {
        image: "/assets/engine-refurbishing-service-img1.png",
        title: "Brake pads",
        description: "High quality brake pads for all vehicle types",
        price: "15,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img2.png",
        title: "Oil Filters",
        description: "Premium oil filters for smooth engine performance",
        price: "45,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img3.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    },
    {
        image: "/assets/engine-refurbishing-service-img4.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    }
]

const Process = [
    {
        number: "1",
        title: "Inspection",
        description: "Thorough assessment of your engine's condition using advanced diagnostics."
    },
    {
        number: "2",
        title: "Disassembly",
        description: "Careful disassembly to identify worn or damaged components."
    },
    {
        number: "3",
        title: "Repair and Replace",
        description: "Replace faulty parts with genuine components and repair where possible."
    },
    {
        number: "4",
        title: "Testing",
        description: "Rigorous testing to ensure optimal performance before delivery."
    }
]

const FAQs = [
    {
        question: "How long does an engine overhaul take?",
        answer: "A complete engine overhaul typically takes 3-7 days, depending on the vehicle's condition and parts availability."
    },
    {
        question: "Do you offer a warranty?",
        answer: "Yes, we provide a 60-day warranty on all engine refurbishing services."
    },
    {
        question: "Can you service vehicles from any brand?",
        answer: "Absolutely! We handle engines from all major brands, including Toyota, Honda, Ford, and more"
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


const EngineRefurbishing = () => {
  return (
    <>
        <div className="bg-[url(/assets/engine-refurb-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] font-bold leading-16">Engine Refurbishing</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Durable, genuine parts for a smooth ride!
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Services
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[23px]'>
                {Services.map((item, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md px-5 py-8 rounded-lg'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[24px] font-semibold'>&#8358;{item.price}</p>
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
                Our Refurbishing Process
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]'>
                {Process.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-[22px] py-[31px] rounded-xl flex flex-col items-center space-y-3
                        hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-[#002748] text-white flex justify-center items-center'>
                                <p className='text-[24px]'>{item.number}</p>
                            </div>
                            <h5 className='text-[24px] font-semibold'>{item.title}</h5>
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
            <div className='p-[50px] shadow-md rounded-xl'>
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

export default EngineRefurbishing