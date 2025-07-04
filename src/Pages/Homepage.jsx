import React from 'react'
import { Link } from 'react-router-dom'
import { BiCalendarCheck, BiSupport } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
// import {  useEffect } from 'react';
import { MdOutlineVerifiedUser, MdOutlineTimer } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import Partner from '../Components/Partner';
import Map from '../Components/Map';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion"
import { DiSnapSvg } from 'react-icons/di';
import { IoArrowForwardSharp } from "react-icons/io5";


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
        image: "/assets/feedback1.png",
        feedback: "Thanks to Electra Motors, my vehicle now runs on CNG. I used to buy ₦30,000 worth of fuel daily, but now I spend less than ₦7,000 on gas. More profit, less headache!",
        customer: "Ebube",
        job: "Commercial Driver, Asaba"
    },
    {
        image: "/assets/feedback2.png",
        feedback: "Electra Motors installed CNG on our fleet of vehicles. Enabling us cut our logistics service charge to customers by over 60%",
        customer: "Chisom",
        job: "Logistics Company Manager, Warri"
    },
    {
        image: "/assets/feedback3.png",
        feedback: "Electra Motors helped me convert my salon car to run on both petrol and CNG. I now spend one-quarter of what I used to on fuel every month. Smooth ride, zero regrets",
        customer: "Efosa",
        job: "Civil Servant, Benin City"
    },
]

const Images = [
  "/assets/hero-image6.png",
  "/assets/hero-image2.png",
  "/assets/hero-image3.png",
  "/assets/hero-image5.png",
];

const Events = [
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    },
    {
        image: "/assets/new-img.png",
        date: "May 19,2025",
        title: "Electra Motors to Launch CNG Conversion Centre in Delta State, Nigeria",
        description: "Launching May 20, 2025, the centre will provide CNG retrofitting, training, and promote clean energy for greener transport in Nigeria.",
        button: "Read More"
    }
]

const Homepage = () => {


        // const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // useEffect(() => {
        //     const updateCountdown = () => {
        //     const now = new Date();
        //     const target = new Date('2025-05-20T00:00:00'); // Fixed date: May 20, 2025, 00:00:00 WAT
        //     const diff = target - now; // Difference in milliseconds

        //     if (diff <= 0) {
        //         // Countdown finished, set to zeros
        //         setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        //         return;
        //     }

        //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        //     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        //     setTimeLeft({
        //         days: days < 10 ? `0${days}` : days,
        //         hours: hours < 10 ? `0${hours}` : hours,
        //         minutes: minutes < 10 ? `0${minutes}` : minutes,
        //         seconds: seconds < 10 ? `0${seconds}` : seconds,
        //     });
        //     };

        //     updateCountdown();
        //     const interval = setInterval(updateCountdown, 1000);
        //     return () => clearInterval(interval); // Cleanup on unmount
        // }, []);

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
        <div className='bg-[#002748] bg-[url("/assets/bkg.png")] bg-cover bg-no-repeat bg-center overflow-hidden w-full'>
            <div className='px-[20px] py-[50px] md:px-[30px] md:py-[100px] lg:px-[80px] xl:px-[100px] xl:py-[100px] relative hero-section'>
                <div className='flex items-center justify-center md:justify-between'>
                    <img src="/assets/Eco Fuel 1.svg" alt="" className='hidden md:block'/>
                    <div>
                        <h1 className='text-[38px] md:text-[40px] lg:text-[55px] xl:text-[60px] font-black text-white text-center leading-[50px]
                        md:leading-[55px] lg:leading-[70px] xl:leading-[85px]'>
                            Convert to CNG and <br />
                            <span className='text-[#2FEAE4]'> Save up to 80% </span>
                        </h1>
                    </div>
                    <img src="/assets/3D Repair Icon Model 1.svg" alt="" className='hidden md:block'/>
                </div>
                <p className='text-white text-center pt-[30px] text-[18px] md:text-[20px] xl:text-[24px] font-medium'>
                    Book a Conversion, Join Training, Buy Kits, <br /> Find Refueling Station
                </p>
                <div className='flex items-center justify-center'>
                    <div className="overflow-hidden w-full pt-[30px] md:pt-[50px] xl:pt-[70px] ">
                    <motion.div
                    className="flex space-x-10 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
                        {[...Images, ...Images].map((img, index) => (
                        <img key={index} src={img} alt={`Scrolling image ${index + 1}`} className='w-[300px] h-[250px] object-cover rounded-xl'/>
                        ))}
                    </motion.div>
                </div>
                </div>
                {/* <div className="mt-5 bg-[url('/assets/live-now.png')] bg-contain bg-center bg-no-repeat py-10 flex flex-col items-center justify-center">
                    <img
                        src="/assets/lottie.gif"
                        alt="celebration"
                        className="absolute w-[500px] xl:w-[1000px] overflow-hidden"
                    />

                    <div className="text-center px-5">
                        <h1 className="text-[28px] md:text-[48px] lg:text-[60px] font-bold drop-shadow-md">
                        We Are Now Live!
                        </h1>
                        <p className="text-[18px] md:text-[22px] font-medium max-w-xl mx-auto">
                        We've officially launched!
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center pt-[20px] md:pt-[50px] text-white text-[20px]'>
                    <p className='text-center'>Explore our features and stay connected.</p>
                </div> */}
            </div>
        </div>
        

        {/* Services */}
        <div className='bg-[#2FEAE4] px-[10px] py-[20px] md:px-[30px] xl:px-[100px] xl:py-[50px] overflow-hidden'>
            <h3 className='text-[30px] text-center font-semibold md:text-[48px]'>Services</h3>
            <p className='text-center text-[20px] md:text-[24px] font-medium'>Explore our Services</p>
            <div className='pt-[20px] md:pt-[50px] flex flex-col gap-[20px] items-center justify-center'>
                <div className='flex flex-col items-center justify-center md:flex-row gap-[20px] w-full'>
                    <div
                    data-aos="fade-right"
                    data-aos-delay="100" className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 
                    w-full md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
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
                    <div 
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
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
                <div className='flex flex-col items-center justify-center md:flex-row gap-[20px] w-full'>
                    <div 
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/cng-kits.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Buy CNG Kits</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Upgrade to a greener drive! Purchase top-quality, certified CNG kits for improved fuel 
                                efficiency and reduced emissions
                            </p>
                            <Link to="/services/buy-cng-kits">
                                <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className='bg-white px-[10px] py-[15px] xl:px-[30px] xl:py-[36px] rounded-xl flex items-center gap-5 w-full 
                    md:w-[370px] lg:w-[470px] xl:w-full h-[190px] xl:h-[250px] cursor-pointer transition-all duration-300 hover:shadow-2xl 
                    hover:-translate-y-2'>
                        <img src="/assets/cng-station.svg" alt="" className='w-[120px] lg:w-[176px]'/>
                        <div >
                            <h4 className='text-[18px] min-[1300px]:text-[24px] font-semibold'>Find CNG Refuelling Station</h4>
                            <p className='text-[12px] min-[1300px]:text-[17px]'>
                                Locate convenient and reliable CNG refueling stations near you. Fuel up and stay eco-friendly today!
                            </p>
                            <Link to="/services/refuelling-station">
                                <button className='text-[17px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer
                                w-[150px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Find Station Now
                                </button>
                            </Link>
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
                    <div className='w-full md:w-[277px] xl:w-[298px]'
                    data-aos='fade-up'
                    data-aos-delay="100">
                        <div
                            key={index}
                            className="shadow-lg w-full md:w-[277px] xl:w-[298px] h-[238px] flex flex-col items-center justify-center rounded-xl 
                            px-5 cursor-pointer transition-all hover:-translate-y-2 duration-300 hover:shadow-xl hover:bg-[#002748] 
                            hover:text-white">
                            <div className="bg-[#2FEAE4] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                            <Icon className="text-[24px]" /> 
                            </div>
                            <h5 className="text-[24px] font-semibold text-center">{item.heading}</h5>
                            <p className="text-center text-[16px] font-medium pt-[15px]">
                            {item.description}
                            </p>
                            
                        </div>
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
                <div key={index}
                className='bg-white flex flex-col items-center justify-center px-[31px] py-[24px] rounded-lg gap-[15px] w-full md:w-[384px]
                cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                    <img src={item.image} alt={`${item.customer}'s feedback`} />
                    <p className='text-[16px] text-center'>{item.feedback}</p>
                    <div className='text-center'>
                        <p className='text-[18px] font-semibold'>{item.customer}</p>
                        <p className='text-black/50'>{item.job}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Gallery */}
        <div className='px-[20px] py-[40px] md:px-[30px] md:py-[50px] lg:px-[80px] lg:py-[100px] xl:px-[100px]'>
            <h3 className='text-[30px] text-center font-semibold md:text-[48px] pb-[20px] md:pb-[50px]'>Our Gallery</h3>
            <div className='grid grid-cols-1 gap-5 md:hidden'>
                <img src="/assets/gallery1.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
                <img src="/assets/gallery2.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
                <img src="/assets/gallery3.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
                <img src="/assets/gallery4.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
                <img src="/assets/gallery5.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
                <img src="/assets/gallery6.png" alt="" className='w-full h-[301px] object-cover rounded-2xl'/>
            </div>
            <div className='hidden md:grid xl:hidden grid-cols-[repeat(3,220px)] grid-rows-[repeat(3, 301px)] lg:grid-cols-[repeat(3,280px)] 
            gap-4 justify-center items-center'>
                <img src="/assets/gallery1.png" alt="" className='col-span-2 row-start-1 w-full h-[301px] object-cover rounded-3xl'/>
                <img src="/assets/gallery2.png" alt="" className='col-start-3 row-start-1 w-full h-[301px] object-cover rounded-3xl'/>
                <img src="/assets/gallery3.png" alt="" className='col-start-1 row-start-2 xl:row-start-1 w-full h-[301px] object-cover rounded-3xl'/>
                <img src="/assets/gallery4.png" alt="" className='col-span-2 col-start-2 row-start-2 w-full h-[301px] object-cover rounded-3xl'/>
                <img src="/assets/gallery5.png" alt="" className='col-span-2 col-start-1 row-start-3 w-full h-[301px] object-cover rounded-3xl'/>
                <img src="/assets/gallery6.png" alt="" className='col-start-3 row-start-3 w-full h-[301px] object-cover rounded-3xl'/>
            </div>
            <div className='hidden xl:grid grid-cols-[repeat(4,290px)] grid-rows-[repeat(2,301px)] gap-4 justify-center items-center'>
                <img src="/assets/gallery1.png" alt="" className='col-span-2 row-start-1 w-full h-[301px] object-cover'/>
                <img src="/assets/gallery2.png" alt="" className='start-3 row-start-1 w-full h-[301px] object-cover'/>
                <img src="/assets/gallery3.png" alt="" className='col-start-4 row-start-1 w-full h-[301px] object-cover'/>
                <img src="/assets/gallery4.png" alt="" className='col-start-1 row-start-2 w-full h-[301px] object-cover'/>
                <img src="/assets/gallery5.png" alt="" className='col-start-2 row-start-2 w-full h-[301px] object-cover'/>
                <img src="/assets/gallery6.png" alt="" className='col-span-2 col-start-3 row-start-2 w-full h-[301px] object-cover'/>
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
                            transition-all duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
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

        {/* News and Events */}
        <div className='bg-[#2FEAE4] px-[20px] py-[20px] md:px-[30px] xl:px-[100px] xl:py-[50px] mb-[30px] md:mb-[50px] 
        lg:mb-[80px] xl:mb-[100px]'>
            <h4 className='text-[30px] text-center font-semibold md:text-[48px] pb-3 md:pb-5 lg:pb-8'>News and Events</h4>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                {Events.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-4 py-5 lg:px-7 rounded-xl w-[330px] md:w-[398px]'>
                            <img src={item.image} alt="" />
                            <p className='pt-1 text-[14px]'>{item.date}</p>
                            <h4 className='text-[16px] lg:text-[18px] font-semibold leading-5 lg:leading-6 pt-2'>{item.title}</h4>
                            <p className='text-black/70 pt-1 text-[16px]'>{item.description}</p>
                            <div className='flex justify-end pt-3 cursor-pointer'>
                                <div className='flex justify-center items-center gap-2 text-[14px] xl:text-[16px] text-white font-semibold 
                                bg-[#002748]  rounded-lg cursor-pointer w-[120px] xl:w-[140px] h-[40px] lg:h-[45px] hover:shadow-lg 
                                transition-transform-y duration-500 hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] 
                                hover:border-[#002748] hover:text-[#002748]'>
                                    <button className=''>
                                        Read More
                                    </button>
                                    <IoArrowForwardSharp />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to='/news-and-events'>
                <div className='flex justify-center items-center pt-[20px] md:pt-[30px] xl:pt-[50px]'>
                    <button className='text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                    w-[170px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                    hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                        Explore More
                    </button>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Homepage