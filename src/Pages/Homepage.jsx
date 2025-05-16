import React from 'react'
import { Link } from 'react-router-dom'
import { BiCalendarCheck, BiSupport } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { MdOutlineVerifiedUser, MdOutlineTimer } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import Partner from '../Components/Partner';
import Map from '../Components/Map';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { motion } from "framer-motion"

const Choose = [
    {
        icon: MdOutlineVerifiedUser,
        heading: "Certified Experts",
        description: "Factory trained technicians with extensive experience"
    },
    {
        icon: MdOutlineTimer,
        heading: "Quick Services",
        description: "Efficient service with minimal waiting time "
    },
    {
        icon: FaMoneyBillAlt,
        heading: "Best Value",
        description: "Competitive prices with no hidden charges "
    },
    {
        icon: BiSupport,
        heading: "24/7 Support",
        description: "Round the clock services in case of emergencies"
    },
]

const Feedback = [
    {
        image: "/assets/feedback1.svg",
        feedback: "I converted my car to CNG at Electra Motors. The process was smooth, and now my car runs efficiently. Great team and unmatched expertise!",
        customer: "Kingsley Okoro"
    },
    {
        image: "/assets/feedback2.svg",
        feedback: "Electra Motors revived my car with engine refurbishing. It runs like new exceptional service and attention to detail",
        customer: "Stephanie Igho"
    },
    {
        image: "/assets/feedback3.svg",
        feedback: "Electra Motors repainted my car after an accident—now it looks showroom-new! Their maintenance keeps it in top shape",
        customer: "Martin Okumagba"
    },
]

// const Images = [
//   "/assets/hero-img1.png",
//   "/assets/hero-img2.png",
//   "/assets/hero-img3.png",
//   "/assets/hero-img4.png",
// ];

const Homepage = () => {


        const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        useEffect(() => {
            const updateCountdown = () => {
            const now = new Date();
            const target = new Date('2025-05-20T00:00:00'); // Fixed date: May 20, 2025, 00:00:00 WAT
            const diff = target - now; // Difference in milliseconds

            if (diff <= 0) {
                // Countdown finished, set to zeros
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days < 10 ? `0${days}` : days,
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds,
            });
            };

            updateCountdown();
            const interval = setInterval(updateCountdown, 1000);
            return () => clearInterval(interval); // Cleanup on unmount
        }, []);

    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("")
    // const [serviceType, setServiceType] = useState("");

  return (
    

    <>
        
        <div>

            {/* Hero Section */}
            {/* <div className=' flex flex-col xl:flex-row items-center justify-between gap-10'>
                <img src="/assets/arrow12.svg" alt="" className='absolute top-[-70px] left-[550px] hidden min-[1300px]:block 
                min-[1900px]:left-[780px]'/>
                <img src="/assets/dots.svg" alt="" className='absolute top-[480px] left-[318px] hidden min-[1300px]:block'/>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='text-[50px] font-bold text-[#002748] leading-[60px] md:text-[80px] md:leading-[81px] xl:hidden
                    text-center md:text-start'>
                        Convert to CNG and  Save Up to <span className='text-[#D50808] font-black'>40%</span>
                    </h1>
                    <h1 className='font-bold text-[#002748] leading-[60px] text-[58px] md:leading-[81px] hidden xl:block
                    min-[1700px]:text-[69px]'>
                        Convert to CNG <br /> and Save Up to <span className='text-[#D50808] font-black'>40%</span>
                    </h1>
                    <p className='text-[20px] pt-[15px] font-medium md:text-[24px] text-center md:text-start'>
                        Book a Conversion, Join Training, Buy Kits, Find Refueling Station
                    </p>
                    <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer w-[147px] 
                    h-[52px] mt-[15px] hover:shadow-lg transition-transform-y duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px]
                    hover:border-[#002748] hover:text-[#002748]'>
                        Read More
                    </button>
                </div>
                <img src="/assets/hero.png" alt="" />
            </div> */}

            {/* Book Services */}
            {/* <div className='mx-auto mt-[20px] md:mt-[40px] lg:mt-[50px] min-[1280px]:mt-[100px] xl:mt-0'>
                <div className='bg-[#002748] mx-auto text-white px-[20px] xl:px-[50px] pt-[15px] pb-[46px] rounded-2xl w-full xl:w-[921px]
                min-[1300px]:absolute bottom-[-50px] left-[290px] right-[290px] min-[1900px]:left-[310px] min-[1900px]:right-[310px] 
                min-[1900px]:bottom-[10px]'>
                    <h3 className='text-[30px] font-semibold text-center'>Book Services</h3>
                    <div className='flex flex-col md:flex-row gap-4 xl:justify-between pt-[15px]'>
                        <div className='bg-white xl:py-2 px-5 rounded-md text-gray-500 flex items-center gap-4 text-[18px] w-full h-[60px]
                        xl:w-[210px]'>
                            <BiCalendarCheck className='text-[28px]'/>
                            <DatePicker 
                            selected={date} 
                            onChange={(date) => setDate(date)}
                            placeholderText='Available Date'
                            className="w-full bg-transparent outline-none"
                            />
                        </div>
                        <div className='bg-white xl:py-2 px-5 rounded-md text-gray-500 flex items-center gap-4 text-[18px] w-full h-[60px]
                        xl:w-[210px]'>
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
                            className="w-full bg-transparent outline-none"
                        />
                        </div> 
                        <div className='bg-white py-2 pl-5 pr-3  rounded-md text-gray-500 flex items-center gap-4 text-[18px] h-[60px]
                        w-full xl:w-[210px]'>
                            <FiTool className='text-[25px]'/>
                            <div className="rounded-md bg-white w-full">
                                <select
                                    name="serviceType"
                                    id="serviceType"
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    className="outline-none w-full text-gray-700 bg-transparent"
                                >
                                    <option value="" disabled hidden>
                                    Service Type
                                    </option>
                                    <option value="CNG">CNG</option>
                                    <option value="gas-refill">Gas Refill</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>
                        </div>
                        <Link to='/book-now'>
                            <button className='text-[18px] font-semibold bg-[#2FEAE4] px-[20px] py-[20px] md:py-0 flex 
                            items-center justify-center rounded-lg cursor-pointer w-full md:w-[180px] xl:w-[135px] h-[58px] text-[#002748] 
                            hover:shadow-lg transition-transform-y duration-500 hover:scale-105 hover:bg-[#002748] hover:border-[3px] 
                            hover:border-[#2FEAE4] hover:text-white'>
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
        
        {/* Updated Hero Section */}
        <div className='bg-[#002748] bg-[url(/assets/hero-bg.png)] bg-cover bg-no-repeat bg-center'>
            {/* <img src="/assets/Eco Fuel -left.png" alt="" className='absolute bottom-[-200px] left-[-250px]'/>
            <img src="/assets/3D Repair Icon Model-right.png" alt="" className='absolute top-[200px] right-0'/> */}
            <div className='px-[20px] py-[50px] md:px-[30px] md:py-[100px] lg:px-[80px] xl:px-[100px] xl:py-[100px] relative hero-section'>
                <div className='flex items-center justify-center md:justify-between'>
                    <img src="/assets/Eco Fuel 1.svg" alt="" className='hidden md:block'/>
                    <div>
                        <h1 className='text-[38px] md:text-[40px] lg:text-[55px] xl:text-[60px] font-black text-white text-center leading-[50px]
                        md:leading-[55px] lg:leading-[70px] xl:leading-[85px]'>
                            Convert to CNG and <br />
                            <span className='text-[#2FEAE4]'> Save up to 40% </span>
                        </h1>
                    </div>
                    <img src="/assets/3D Repair Icon Model 1.svg" alt="" className='hidden md:block'/>
                </div>
                <p className='text-white text-center pt-[30px] text-[18px] md:text-[20px] xl:text-[24px] font-medium'>
                    Book a Conversion, Join Training, Buy Kits, <br /> Find Refueling Station
                </p>
                {/* <div className='flex items-center justify-center'>
                    <div className='pt-[30px] md:pt-[50px] xl:pt-[70px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
                    place-items-center gap-8 md:gap-10'>
                        <img src="/assets/hero-img1.png" alt="Hero Image 1" className='' />
                        <img src="/assets/hero-img2.png" alt="Hero Image 2" className='' />
                        <img src="/assets/hero-img3.png" alt="Hero Image 3" className='' />
                        <img src="/assets/hero-img4.png" alt="Hero Image 4" className='' />
                    </div>
                </div> */}
                {/* <div className='flex items-center justify-center'>
                    <div className="overflow-hidden w-full pt-[30px] md:pt-[50px] xl:pt-[70px] ">
                    <motion.div
                    className="flex space-x-10 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
                        {[...Images, ...Images].map((img, index) => (
                        <img key={index} src={img} alt={`Scrolling image ${index + 1}`} />
                        ))}
                    </motion.div>
                </div>
                </div> */}
                <div className='flex flex-col md:flex-row mt-[30px] md:mt-[50px] lg:mt-[80px] xl:mt-[100px] text-[#002748]'>
                    <div className='bg-white rounded-tr-[27px] rounded-bl-0 md:rounded-tr-[0px] rounded-tl-[27px] md:rounded-bl-[27px] 
                    py-[30px] lg:py-[50px] w-full md:w-1/2 flex items-center justify-center'>
                        <p className='text-center md:text-start font-bold text-[38px] lg:text-[48px]'>
                            We are <br /> Launching!!!</p>
                    </div>
                    <div className='bg-[#2FEAE4] rounded-bl-[27px] rounded-tr-0 md:rounded-bl-[0px] md:rounded-tr-[27px] rounded-br-[27px] py-[30px] 
                    lg:py-[50px] w-full md:w-1/2 flex flex-col justify-center items-center'>
                        <div className='flex'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>{timeLeft.days}</p>
                                <p className='text-[15px]'>DAYS</p>
                            </div>
                            <span className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>:</span>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>{timeLeft.hours}</p>
                                <p className='text-[15px]'>HOURS</p>
                            </div>
                            <span className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>:</span>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>{timeLeft.minutes}</p>
                                <p className='text-[15px]'>MINUTES</p>
                            </div>
                            <span className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>:</span>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[48px] lg:text-[67.56px] font-bold leading-10 md:leading-14 lg:leading-16'>{timeLeft.seconds}</p>
                                <p className='text-[15px]'>SECONDS</p>
                            </div>
                        </div>
                        <p className='pt-[10px] text-[40px]'>20/05/2025</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center pt-[20px] md:pt-[50px] text-white text-[20px]'>
                    <img src="/assets/location-icon.png" alt="" />
                    <p className='text-center'>Delta State Innovation Hub</p>
                    <p className='text-center'>#1 DBS Junction, Okpanam Road, Asaba, Delta State.</p>
                </div>
            </div>
        </div>
        

        {/* Services */}
        <div className='bg-[#2FEAE4] px-[20px] py-[20px] md:px-[30px] xl:px-[100px] xl:py-[50px]'>
            <h3 className='text-[30px] text-center font-semibold md:text-[48px]'>Services</h3>
            <p className='text-center text-[20px] md:text-[24px] font-medium'>Explore our Servces</p>
            <div className='pt-[20px] md:pt-[50px] flex flex-col gap-[20px] items-center justify-center'>
                <div className='flex flex-col md:flex-row gap-[20px] w-full'>
                    <div className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/gas-green.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Book CNG Conversion</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Save on fuel and go green with our certified CNG conversion service.
                            </p>
                            <Link to='/book-now'>
                                <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/cng-training.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Join CNG Training</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Master CNG conversion with our expert training. Get certified
                            </p>
                            <Link to='/training'>
                                <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[20px] w-full'>
                    <div className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/cng-kits.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Buy CNG Kits</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Upgrade to a greener drive! Purchase top-quality, certified CNG kits for improved fuel efficiency and reduced emissions
                            </p>
                            <Link >
                                <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/cng-station.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Find CNG Refuelling Station</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Locate convenient and reliable CNG refueling stations near you. Fuel up and stay eco-friendly today!
                            </p>
                            <button className='text-[17px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer
                            w-[150px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                            hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                Find Station Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/services'>
                <div className='flex justify-center items-center pt-[20px] md:pt-[30px] xl:pt-[50px]'>
                    <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                    w-[170px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                    hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                        Explore More
                    </button>
                </div>
            </Link>
        </div>

        {/* Why choose us */}
        <div className='mt-[50px] md:mt-[100px] xl:mt-[100px] px-[20px] py-[20px] md:px-[30px] xl:px-[150px] xl:py-[50px]'>
            <div className='flex items-center justify-center gap-3 md:gap-10 xl:gap-16'>
                <img src="/assets/straight-dots.svg" alt="" />
                <div>
                    <h4 className='text-[30px] text-center font-semibold md:text-[48px]'>Why Choose Use</h4>
                    <p className='text-center text-[20px] md:text-[24px] font-medium'>Expert Care, Advanced Tech.</p>
                </div>
                <img src="/assets/straight-dots.svg" alt="" />
            </div>
            <div className="pt-[50px] flex flex-col md:flex-row flex-wrap items-center justify-center gap-[30px]">
                {Choose.map((item, index) => {
                    const Icon = item.icon; // Store the icon component
                    return (
                    <div
                        key={index}
                        className="shadow-lg w-full md:w-[277px] xl:w-[298px] h-[238px] flex flex-col items-center justify-center rounded-xl px-5
                         cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-[#002748] hover:text-white"
                    >
                        <div className="bg-[#2FEAE4] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                        <Icon className="text-[24px]" /> 
                        </div>
                        <h5 className="text-[24px] font-semibold text-center">{item.heading}</h5>
                        <p className="text-center text-[16px] font-medium pt-[15px]">
                        {item.description}
                        </p>
                    </div>
                    );
                })}
            </div>
        </div>

        {/* Customer Feedback */}
        <div className='mt-[50px] md:mt-[100px] xl:mt-[150px] px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[150px] xl:py-[80px] bg-[#002748]'>
            <h4 className='text-[30px] text-center font-semibold md:text-[48px] text-white'>Customer Feedback</h4>
            <div className='pt-[50px] flex flex-col md:flex-row xl:justify-center gap-[20px]'>
                {Feedback.map((item, index) => (
                <div
                    key={index}
                    className='bg-white flex flex-col items-center justify-center px-[31px] py-[24px] rounded-lg gap-[15px] w-full md:w-[384px]
                    cursor-pointer hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'
                >
                    <img src={item.image} alt={`${item.customer}'s feedback`} />
                    <p className='text-[16px] text-center'>{item.feedback}</p>
                    <p className='text-[18px] font-semibold'>{item.customer}</p>
                </div>
                ))}
            </div>
        </div>


        {/* Trusted Partners */}
        <Partner />

        {/* For Further Enquiries */}
        <div className='mt-[50px] md:mt-[100px] xl:mt-[150px] px-[20px] pb-[50px] md:px-[30px] md:pb-[100px] xl:px-[150px] xl:pb-[150px]'>
            <h4 className='text-[30px] text-center font-semibold md:text-[48px]'>For Further Enquiries</h4>
            <div className='pt-[20px] md:pt-[28px] flex flex-col items-center lg:flex-row gap-10 xl:gap-[79px]'>
                <div className='lg:w-1/2'>
                    <form action="submit">
                        <input type="email" placeholder='Email Address' 
                        className='bg-[#D9E8F4] p-[20px] rounded-xl w-full text-[18px] font-medium'/>
                        <input type="text" placeholder='Full Name' 
                        className='bg-[#D9E8F4] p-[20px] rounded-xl w-full text-[18px] font-medium mt-5 xl:mt-[30px]'/>
                        <textarea name="message" id="message" placeholder='Message' rows='4'
                        className='bg-[#D9E8F4] p-[20px] rounded-xl w-full text-[18px] font-medium mt-5 xl:mt-[30px] resize-none'></textarea>
                        <div className=''>
                        <button
                        className="text-[16px] md:text-[18px] text-white font-semibold bg-[#002748] px-[20px] py-[15px] 
                            rounded-lg cursor-pointer mt-[10px] xl:mt-[30px] w-full lg:w-[162px] hover:shadow-lg 
                            transition-all duration-300 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
                            hover:border-[#002748] hover:text-[#002748] border-[3px] border-transparent 
                            focus:outline-none focus:ring-2 focus:ring-[#2FEAE4]"
                        >
                            Send Message
                        </button>
                        </div>
                    </form>
                </div>
                <div className='w-full lg:w-1/2 md:px-[20px] lg:px-0 h-[441px]'>
                    <Map />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Homepage