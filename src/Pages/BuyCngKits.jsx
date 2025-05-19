import React, { useState } from 'react'
import { LuPlus } from "react-icons/lu";



const Services = [
    {
        image: "/assets/tire-repair.png",
        title: "Standard CNG Kits",
        description: "Perfect for 4-cylinder vehicles, includes cylinder, regulator & injector system",
        price: "Starting at ₦700,000"
    },
    {
        image: "/assets/brake-repair.png",
        title: "Premium CNG Kits",
        description: "Perfect for 4-cylinder vehicles, includes cylinder, regulator & injector system",
        price: "Starting at ₦1,200,000"
    },
    {
        image: "/assets/oil-change.png",
        title: "Commercial CNG Kits",
        description: "Made for buses & trucks—high-capacity cylinder, built for heavy-duty use",
        price: "Starting at ₦1,800,000"
    },
]

const FAQs = [
    {
        question: "How long does it take to install a CNG kit?",
        answer: "Installation typically takes 1-2 days, depending on the vehicle and kit type, when performed by certified technicians"
    },
    {
        question: "Are CNG kits safe?",
        answer: "Yes, CNG Kits are safe when installed correctly. CNG is lighter than air and has a narrow flammability range, reducing kits"
    },
    {
        question: "Where can I refuel CNG in Nigeria?",
        answer: "CNG Stations are available in Lagos, Abuja, and Port Harcourt, with more under construction nationwide. Visit our services page for details"
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
          <p className="text-[15px] md:text-[24px] font-semibold">{question}</p>
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

const BuyCngKits = () => {
  return (
    <>
        <div className="bg-[url(/assets/buy-cng-kits-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] md:text-[60px] font-bold leading-14 md:leading-16">Buy CNG Kits</h2>
                <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                    Upgrade to CNG for cleaner, cheaper fuel with our trusted kits  
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Conversion Kits
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[23px]'>
                {Services.map((item, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md px-5 py-8 rounded-lg space-y-4'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[18px] md:text-[20px] font-semibold'>{item.price}</p>
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
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default BuyCngKits