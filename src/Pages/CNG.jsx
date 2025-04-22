import React, { useState } from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { RiGasStationLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import Map from '../Components/Map';
import { LuPlus } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoTimeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";


const Process = [
    {
        number: "1",
        Icon: HiOutlineNewspaper,
        heading: "Submit Vehicle Information",
        description: "Provide Essential details about your vehicle through our online form for our customized conversion plan"
    },
    {
        number: "2",
        Icon: FaRegCalendarCheck,
        heading: " Book a Conversion Slot",
        description: "Choose your preferred appointment time through  our online booking system"
    },
    {
        number: "3",
        Icon: IoLocationOutline,
        heading: "Visit our Centre",
        description: "Bring your vehicle to our state of the art facility  for professional inspection"
    },
    {
        number: "4",
        Icon: BsTools,
        heading: "Installation & Testing",
        description: "Our Certified technicians will install the CNG kits and perform comprehensive safety tests"
    },
    {
        number: "5",
        Icon: GrCertificate,
        heading: "Certification",
        description: "Receive your safety compliance certificate  and detailed user guide for CNG operation"
    },
    {
        number: "6",
        Icon: RiGasStationLine,
        heading: "Start Saving",
        description: "Begin Refueling at our CNG Stations and  enjoy up to 40% savings on fuel cost"
    },
]

const FAQs = [
    {
        question: "How much can I save on fuel with CNG?",
        answer: "CNG fuel costs up to 40% less than petrol and is more efficient for long-lasting driving."
    },
    {
        question: "Is the conversion safe for my engine?",
        answer: "Yes, we use government-approved kits and follow the NADDC-certified installation process"
    },
    {
        question: "What happens if I run out of CNG?",
        answer: "Your vehicle can automatically switch to petrol, as our systems are bi-fuel compatible."
    },
    {
        question: "Will I get a certificate?",
        answer: "Yes. All converted vehicles receive a CNG"
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
      <div className="bg-[#2FEAE4] rounded-xl">
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
const CNG = () => {

    const [vehicleType, setVehicleType] = useState("");
    const [cylinderType, setCylinderType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    

  return (
    <>
        <div className="bg-[url(/assets/cng-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold">CNG Conversion</h2>
                <p className="text-white text-[20px] md:text-[24px]">Switch to CNG: Save Money, Drive Cleaner, Go Greene</p>
            </div>
        </div>

        {/* CNG Process */}
        <div className='bg-[#2FEAE4] py-[20px] md:py-[50px] xl:py-[100px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Our Conversion Process</h2>
            <p className="text-[20px] md:text-[24px] text-center">
                Follow our  Step-by-Step Process to convert  your vehicle to CNG
            </p>

            {/* Conversion Process */}
            <div className="pt-[30px] lg:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                {Process.map((item, index) => {
                    const Icon = item.Icon
                    return (
                        <div key={index} className="bg-white px-[20px] py-[30px] relative rounded-xl h-[200px] md:h-[180px] xl:h-[220px]">
                            <div className="bg-[#2FEAE4] w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-[-12px] right-[30px]">
                                <p className="text-[20px] lg:text-[24px] font-semibold">{item.number}</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className="text-[24px] bg-[#002748] flex justify-center items-center w-[50px] h-[50px] text-white rounded-full">
                                    <Icon />
                                </div>
                                <h5 className='text-[20px] md:text-[24px] font-semibold'>{item.heading}</h5>    
                            </div>    
                            <p className='pt-3 text-[16px] font-medium'>
                                {item.description} 
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>


        
        {/* Service Calculator */}
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[150px] xl:py-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Service Calculator</h2>
            <p className="text-center text-[20px] md:text-[24px]">Instantly estimate your CNG Conversion based on your vehicle's details.</p>
            <div className='pt-[30px] flex flex-col lg:flex-row lg:gap-10'>
                <img src="/assets/refilling.svg" alt="" className='lg:w-1/2'/>
                <div className='lg:w-1/2 flex flex-col justify-between xl:justify-center xl:gap-10 pt-8 lg:pt-0'>
                    <div>
                        <h5 className='text-[24px] font-semibold'>Vehicle Type</h5>
                        <div className="rounded-3xl bg-[#D9D9D9] w-full p-[20px] md:p-[30px] mt-3 text-[24px] ">
                            <select
                                name="serviceType"
                                id="serviceType"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                className="outline-none w-full text-gray-700 bg-transparent"
                            >
                            <option value="" disabled hidden>
                                Select Vehicle Type
                            </option>
                            <option value="toyota">Toyota</option>
                            <option value="lexus">Lexus</option>
                            <option value="tricycle">Tricycle</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-5 lg:pt-0'>
                        <h5 className='text-[24px] font-semibold'>Cylinder Type</h5>
                        <div className="rounded-3xl bg-[#D9D9D9] w-full p-[20px] md:p-[30px] mt-3 text-[24px] ">
                            <select
                                name="cylinderType"
                                id="cylinderType"
                                value={cylinderType}
                                onChange={(e) => setCylinderType(e.target.value)}
                                className="outline-none w-full text-gray-700 bg-transparent"
                            >
                            <option value="" disabled hidden>
                                Select Cylinder Type
                            </option>
                            <option value="50kg">50kg</option>
                            <option value="100kg">100kg</option>
                            <option value="70kg">70kg</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-[#002748] text-white p-[20px] md:p-[25px] text-center text-[18px] font-semibold rounded-3xl 
                    mt-8 lg:mt-0 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
                    hover:border-[#002748] hover:text-[#002748] border-[3px] border-transparent focus:outline-none focus:ring-2 
                    focus:ring-[#2FEAE4]'>
                        Calculate Estimate
                    </button>
                </div>
            </div>
        </div>

        {/* Appointment Scheduling */}
        <div className='bg-[#002748] px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px] text-white'>Schedule Appointment</h2>
            <p className="text-[20px] md:text-[24px] text-center text-white">
                Book your CNG Conversion in a single process
            </p>
            <div className='bg-white p-5 md:p-10 mt-[30px] rounded-xl'>
                <div className='flex flex-col md:flex-row md:gap-5 xl:gap-10'>
                    <div className='pb-[30px] md:w-1/2'>
                        <p className="text-[20px] md:text-[24px] font-semibold pb-[14px]">
                            Choose Location
                        </p>
                        <div className='w-full md:h-[180px]'>
                            <Map />
                        </div>
                        <div className='pt-[30px]'>
                            <label htmlFor='asaba' className='flex items-center gap-5 border px-5 py-3 rounded-2xl text-[18px] 
                            font-semibold w-full cursor-pointer'>
                                <input type="radio" id='asaba' name='location' value='Asaba'
                                className="w-6 h-6 accent-[#002748]"/>
                                <div>
                                    <p className='leading-4'>Delta State Innovation Hub</p>
                                    <p className='text-[#a09e9e]'>Asaba</p>
                                </div>
                            </label>
                            <label htmlFor='ibusa' className='flex items-center gap-5 border px-5 py-3 rounded-2xl text-[18px] 
                            font-semibold w-full mt-[30px] cursor-pointer'>
                                <input type="radio" id='ibusa' name='location' value='Ibusa'
                                className="w-6 h-6 accent-[#002748]"/>
                                <div>
                                    <p className='leading-4'>Delta State Industrial Estate</p>
                                    <p className='text-[#a09e9e]'>Ibusa Road, Asaba</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <p className="text-[20px] md:text-[24px] font-semibold pb-[5px]">
                            Select Date and Time
                        </p>
                        <div className='flex flex-col space-y-5'>
                            <div>
                                <p className="text-[20px] md:text-[24px] font-semibold pb-[5px]">Date</p>
                                <div className='bg-[#2FEAE4] px-5 py-3 rounded-2xl'>
                                    <select
                                        name="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="outline-none w-full text-gray-700 bg-transparent"
                                    >
                                    <option value="" disabled hidden>
                                        Select Date
                                    </option>
                                    <option value="toyota">Tuesday</option>
                                    <option value="lexus">Thursday</option>
                                    <option value="tricycle">Saturday</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p className="text-[20px] md:text-[24px] font-semibold pb-[5px]">Time</p>
                                <div className='bg-[#2FEAE4] px-5 py-3 rounded-2xl text-gray-500 flex items-center gap-4 text-[18px] w-[225px]'>
                                    <IoTimeOutline className='text-[28px]' />
                                    <DatePicker
                                    selected={time}
                                    onChange={(time) => setTime(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeFormat="h:mm aa" // 12-hour format with AM/PM
                                    // timeIntervals={15} // 15-minute intervals
                                    dateFormat="h:mm aa" // Display format (e.g., "2:30 PM")
                                    placeholderText="Choose time"
                                    isClearable
                                    className="w-full bg-transparent outline-none"
                                    />
                                </div>
                                </div>
                            <div>
                                <p className="text-[20px] md:text-[24px] font-semibold pb-[5px]">Contact Information</p>
                                <input type="text" className='bg-[#D9D9D9] px-5 py-3 rounded-2xl w-full xl:w-[385px]'/>
                            </div>
                            <button className='font-primary text-[18px] text-white font-semibold bg-[#002748]  rounded-lg 
                            cursor-pointer w-[147px] h-[52px] mb-6 md:mb-0 lg:w-[162px] hover:shadow-lg 
                            transition-all duration-300 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
                            hover:border-[#002748] hover:text-[#002748] border-[3px] border-transparent 
                            focus:outline-none focus:ring-2 focus:ring-[#2FEAE4]'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='border-[#D9D9D9]'/>
                    <div className='pt-[10px] md:pt-[30px] xl:pt-[50px] px-[5px] md:px-[30px] flex flex-col gap-3 md:flex-row 
                    justify-between md:gap-0'>
                        <div className='flex items-center gap-3 text-[18px]'>
                            <LuPhone />
                            <div>
                                <p className='leading-4'>Call us at</p>
                                <p className='font-semibold'>+234 814 536 2548</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-[18px]'>
                            <RxEnvelopeClosed />
                            <div>
                                <p className='leading-4'>Email us at</p>
                                <p className='font-semibold'>bookings@electramotors.ng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[200px] xl:py-[150px]'>
            <h2 className='text-[30px] text-center font-semibold md:text-[48px]'>Frequently Asked Questions</h2>
            <p className="text-center text-[20px] md:text-[24px]">Find answers to common questions  about CNG  Conversion and its Benefits </p>
            <div className='pt-[30px] flex flex-col gap-5 md:gap-10 xl:gap-14'>
                {/* <div className="bg-[#2FEAE4] rounded-xl">
                    <div className="p-3 md:p-5 xl:px-[50px] xl:py-[22px] flex justify-between items-center">
                    <p className="text-[16px] md:text-[24px] font-semibold">
                        How much can I save on fuel with CNG?
                    </p>
                    <button
                    onClick={toggleAnswer}
                    className="bg-[#002748] w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200"
                    aria-expanded={isOpen}
                    aria-controls="faq-answer"
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
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`} id="faq-answer"
                    >
                        <p className="py-1 px-3 md:p-5 xl:px-[50px] xl:py-[22px] text-[16px] md:text-[24px] font-medium">
                            CNG fuel costs up to 40% less than petrol and is more efficient for
                            long-lasting driving.
                        </p>
                    </div>
                </div> */}

                <div className="pt-[30px] flex flex-col gap-5 md:gap-10 xl:gap-14">
                    {FAQs.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default CNG