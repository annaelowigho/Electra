import React, { useState, } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { PiGasPump } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";


const Services = [
    {
        id: "cng",
        image:"/assets/req-icon1.png",
        title:"CNG Services"
    },
    {
        id: "ev",
        image:"/assets/req-icon2.png",
        title:"EV Services"
    },
    {
        id: "maintenance",
        image:"/assets/req-icon3.png",
        title:"Maintenance"
    },
    {
        id: "training",
        image:"/assets/req-icon4.png",
        title:"Training"
    }
]

const InquiryServiceReqForm = () => {

    const [activeModalId, setActiveModalId] = useState(null);
    const [isYesForFinancing, setIsYesForFinancing] = useState(false);
    const [isYesForAlreadyUsingCNG, setIsYesForAlreadyUsingCNG] = useState(false);
    const [isYesForChargingInfrastructure, setIsYesForChargingInfrastructure] = useState(false);
    const [isYesForCertificationRequired, setIsYesForCertificationRequired] = useState(false);

      const closeModal = () => setActiveModalId(null);

//       useEffect(() => {
//     if (activeModalId) {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'auto';
//     }

//     return () => {
//         document.body.style.overflow = 'auto';
//     };
// }, [activeModalId]);

  return (
    <>
        <div className='shadow-xl mx-[20px] my-[20px] md:mx-[50px] md:my-[40px] lg:mx-[100px] lg:my-[100px] xl:mx-[150px] rounded-2xl'>
            <div className='bg-[#002748] text-white py-5 md:py-8 rounded-t-2xl'>
                <h2 className='text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center font-semibold'>
                    Service Request Form
                </h2>
                <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                    Please fill out the form below to request our services
                </p>    
            </div> 
            <div className='rounded-b-2xl py-5 md:py-8'>
                <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10 px-5'>
                    <div className=''>
                        <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex items-center justify-center'>
                            2
                        </div>
                    </div>
                    <div className='flex bg-gray-200 w-1/2 rounded-xl h-[10px]'>
                        <div className='w-1/2 bg-[#002748] rounded-l-xl'></div>
                        <div className='w-1/2'></div>
                    </div>
                    <p className=''>Step 1 of 2</p>
                </div>
                <div className='px-3 md:px-5 lg:px-10 pt-5'>
                    <p className='text-[18px] font-semibold md:text-[20px] lg:text-[24px]'>1. Service Inquiry Type</p>
                    <div className='relative'>
                    {/* Services list */}
                        <div className='flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[15px] lg:gap-[45px] pt-7 px-8 md:px-0'>
                            {Services.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveModalId(item.id)}
                                className='flex flex-col items-center justify-center w-full md:w-[160px] lg:w-[178.94px] h-[150.92px] shadow-lg rounded-xl cursor-pointer hover:shadow-xl transition'
                            >
                                <div className='w-[50px] h-[50px] rounded-full bg-[#002748] flex items-center justify-center'>
                                <img src={item.image} alt={item.title} />
                                </div>
                                <h4 className='text-[20px] font-medium'>{item.title}</h4>
                            </div>
                            ))}
                        </div>
                    <div className='flex items-center justify-end pt-10'>
                        <div className='flex items-center justify-center gap-3 bg-[#002748] text-white text-[20px] py-2 px-7
                        rounded-lg'>
                            <button>
                                Next
                            </button>
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>
            </div>       
            </div>
        </div>

        {/* CNG MODAL */}
        {activeModalId === "cng" && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-2xl w-[90%] lg:w-[70%] relative'>
                    <div className='bg-[#002748] rounded-t-2xl text-white py-5'>
                        <h2 className='text-[20px] md:text-[36px] text-center font-semibold'>
                            Service Request Form
                        </h2>
                        <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                            Please fill out the form below to request our services
                        </p>  
                    </div>
                    <div className='rounded-b-2xl py-5 md:py-8 p-2 md:p-6 '>
                        <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex 
                                items-center justify-center'>
                                    1 
                                </div>
                                <p>Service Type </p>
                            </div>
                            <div className='flex bg-[#002748] w-1/2 rounded-xl h-[10px]'></div>
                            <p className=''>Step 2 of 2</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiGasPump className='text-[20px]'/>
                            <h5 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold'>CNG Services</h5>
                        </div>
                        <div className='pt-2'>
                            <p className='text-[18px] font-semibold'>Type of vehicle</p>
                            <div className='flex justify-between pt-1 text-[20px] lg:px-[100px]'>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="tricycle" value="Tricycle" className='scale-125'/>
                                    <label htmlFor="tricycle">Tricycle</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="sedan" value="Sedan" className='scale-125'/>
                                    <label htmlFor="sedan">Sedan</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="bus" value="Bus" className='scale-125'/>
                                    <label htmlFor="bus">Bus</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="suvs" value="SUVs" className='scale-125'/>
                                    <label htmlFor="suvs">SUVs</label>
                                </div>
                            </div>
                            <div className='pt-[36px] space-y-4'>
                                <label htmlFor="">No of Vehicles for Conversion</label>
                                <input type="text" id='full-name' placeholder='Enter No. of Vehicles'
                                className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                                <label htmlFor="">Expected Started Date</label>
                                <input type="date" id='full-name' placeholder='Enter No. of Vehicles'
                                className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                            </div>
                            <div className='pt-5 flex justify-between px-5 lg:px-[100px]'>
                                <div>
                                    <p className='text-[16px] font-semibold'>Need Financing</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">{isYesForFinancing ? 'Yes' : 'No'}</span>
                                        <label className="relative inline-block w-14 h-8 cursor-pointer">
                                            <input type="checkbox"
                                            className="sr-only peer"
                                            checked={isYesForFinancing}
                                            onChange={() => setIsYesForFinancing(!isYesForFinancing)}
                                            />
                                            <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 
                                            transition-all duration-300"></div>
                                            <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform 
                                            duration-300 peer-checked:translate-x-6"></div>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[16px] font-semibold'>Already Using CNG</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">{isYesForAlreadyUsingCNG ? 'Yes' : 'No'}</span>
                                        <label className="relative inline-block w-14 h-8 cursor-pointer">
                                            <input type="checkbox"
                                            className="sr-only peer"
                                            checked={isYesForAlreadyUsingCNG}
                                            onChange={() => setIsYesForAlreadyUsingCNG(!isYesForAlreadyUsingCNG)}
                                            />
                                            <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 
                                            transition-all duration-300"></div>
                                            <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform 
                                            duration-300 peer-checked:translate-x-6"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5 flex justify-between'>
                                <div onClick={closeModal}
                                className='flex justify-center items-center gap-2 bg-[#2FEAE4] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-[#002748] cursor-pointer'>
                                    <FaArrowLeft />
                                    <button className='cursor-pointer'>Previous</button>
                                </div>
                                <div className='flex justify-center items-center gap-2 bg-[#002748] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-white cursor-pointer'>
                                    <button className='cursor-pointer'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* EV modal */}
        {activeModalId === "ev" && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-2xl w-[90%] lg:w-[70%] relative'>
                    <div className='bg-[#002748] rounded-t-2xl text-white py-5'>
                        <h2 className='text-[20px] md:text-[36px] text-center font-semibold'>
                            Service Request Form
                        </h2>
                        <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                            Please fill out the form below to request our services
                        </p>  
                    </div>
                    <div className='rounded-b-2xl py-5 md:py-8 p-2 md:p-6 '>
                        <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex 
                                items-center justify-center'>
                                    1 
                                </div>
                                <p>Service Type </p>
                            </div>
                            <div className='flex bg-[#002748] w-1/2 rounded-xl h-[10px]'></div>
                            <p className=''>Step 2 of 2</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiGasPump className='text-[20px]'/>
                            <h5 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold'>EV Services</h5>
                        </div>
                        <div className='pt-2'>
                            <p className='text-[18px] font-semibold'>Types of Electric vehicles</p>
                            <div className='flex justify-between pt-1 text-[20px] lg:px-[100px]'>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="personal" value="Personal" className='scale-125'/>
                                    <label htmlFor="personal">Personal</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="commercial" value="Commercial" className='scale-125'/>
                                    <label htmlFor="commercial">Commercial</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="vehicle" id="fleet" value="Fleet" className='scale-125'/>
                                    <label htmlFor="fleet">Fleet</label>
                                </div>
                            </div>
                            <div className='pt-[36px] space-y-4'>
                                <label htmlFor="">No of Vehicles for Conversion</label>
                                <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                                    <select name="" id="" className='w-full h-[55px] text-[18px] text-black/50 font-medium outline-none'>
                                        <option value="">Purchase</option>
                                        <option value="">Lease</option>
                                        <option value="">Test Drive</option>
                                        <option value="">Distribution</option>
                                    </select>
                                </div> 
                                <label htmlFor="">Expected Quantity (if fleet)</label>
                                <input type="text" id='full-name' placeholder='10'
                                className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                            </div>
                            <div className='pt-5'>
                                <p className='text-[16px] font-semibold'>EV Charging Infrastructure Required</p>
                                <div className="pt-2 flex items-center gap-2">
                                    <span className="text-sm font-medium">{isYesForChargingInfrastructure ? 'Yes' : 'No'}</span>
                                    <label className="relative inline-block w-14 h-8 cursor-pointer">
                                        <input type="checkbox"
                                        className="sr-only peer"
                                        checked={isYesForChargingInfrastructure}
                                        onChange={() => setIsYesForChargingInfrastructure(!isYesForChargingInfrastructure)}
                                        />
                                        <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 
                                        transition-all duration-300"></div>
                                        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform 
                                        duration-300 peer-checked:translate-x-6"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='pt-5 flex justify-between'>
                                <div onClick={closeModal}
                                className='flex justify-center items-center gap-2 bg-[#2FEAE4] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-[#002748] cursor-pointer'>
                                    <FaArrowLeft />
                                    <button className='cursor-pointer'>Previous</button>
                                </div>
                                <div className='flex justify-center items-center gap-2 bg-[#002748] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-white cursor-pointer'>
                                    <button className='cursor-pointer'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Maintenance modal */}
        {activeModalId === "maintenance" && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-2xl w-[90%] lg:w-[70%] relative'>
                    <div className='bg-[#002748] rounded-t-2xl text-white py-5'>
                        <h2 className='text-[20px] md:text-[36px] text-center font-semibold'>
                            Service Request Form
                        </h2>
                        <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                            Please fill out the form below to request our services
                        </p>  
                    </div>
                    <div className='rounded-b-2xl py-5 md:py-8 p-2 md:p-6 '>
                        <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex 
                                items-center justify-center'>
                                    1 
                                </div>
                                <p>Service Type </p>
                            </div>
                            <div className='flex bg-[#002748] w-1/2 rounded-xl h-[10px]'></div>
                            <p className=''>Step 2 of 2</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FiTool className='text-[20px]'/>
                            <h5 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold'>Maintenance Services</h5>
                        </div>
                        <div className='pt-5'>
                            <div className='space-y-2'>
                                <label htmlFor=""  className='text-[18px] md:text-[20px] font-semibold'>Vehicle Type</label>
                                <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                                    <select name="" id="" className='w-full h-[55px] text-[18px] text-black/50 font-medium outline-none'>
                                        <option value="" disabled>Select Vehicle Type</option>
                                        <option value="">Sedan (Salon)</option>
                                        <option value="">Bus</option>
                                        <option value="">SUV</option>
                                        <option value="">Truck</option>
                                    </select>
                                </div> 
                                <div>
                                    <h5 className='text-[18px] md:text-[20px] font-semibold'>Service Needed</h5>
                                    <div className='flex flex-wrap gap-3 md:gap-8'>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="diagnosis" value="Diagnosis" className='scale-125'/>
                                            <label htmlFor="diagnosis">Diagnosis</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="general-services" value="General-services" className='scale-125'/>
                                            <label htmlFor="general-services">General-services</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="electrical" value="Electra" className='scale-125'/>
                                            <label htmlFor="electrical">Electrical</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="engine" value="Engine" className='scale-125'/>
                                            <label htmlFor="engine">Engine</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="others" value="Others" className='scale-125'/>
                                            <label htmlFor="other">Others</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-[18px] md:text-[20px] font-semibold'>Frequency</h5>
                                    <div className='flex flex-wrap gap-3 md:gap-8'>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="diagnosis" value="Diagnosis" className='scale-125'/>
                                            <label htmlFor="diagnosis">Monthly</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="general-services" value="General-services" className='scale-125'/>
                                            <label htmlFor="general-services">One-time</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="service_needed" id="electrical" value="Electra" className='scale-125'/>
                                            <label htmlFor="electrical">Fleet-plan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5 flex justify-between'>
                                <div onClick={closeModal}
                                className='flex justify-center items-center gap-2 bg-[#2FEAE4] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-[#002748] cursor-pointer'>
                                    <FaArrowLeft />
                                    <button className='cursor-pointer'>Previous</button>
                                </div>
                                <div className='flex justify-center items-center gap-2 bg-[#002748] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-white cursor-pointer'>
                                    <button className='cursor-pointer'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Training modal */}
        {activeModalId === "training" && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-2xl w-[95%] lg:w-[70%] relative'>
                    <div className='bg-[#002748] rounded-t-2xl text-white py-5'>
                        <h2 className='text-[20px] md:text-[36px] text-center font-semibold'>
                            Service Request Form
                        </h2>
                        <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium px-2'>
                            Please fill out the form below to request our services
                        </p>  
                    </div>
                    <div className='rounded-b-2xl py-5 md:py-8 p-2.5 md:p-6 '>
                        <div className='flex items-center justify-between lg:justify-center gap-2 md:gap-5 xl:gap-10'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-[#002748] w-[30px] h-[30px] text-white rounded-full text-center flex 
                                items-center justify-center'>
                                    1 
                                </div>
                                <p>Service Type </p>
                            </div>
                            <div className='flex bg-[#002748] w-1/2 rounded-xl h-[10px]'></div>
                            <p className=''>Step 2 of 2</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiGraduationCap className='text-[20px]'/>
                            <h5 className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold'>Training and Certification</h5>
                        </div>
                        <div className='pt-5'>
                            <div className='space-y-2'>
                                <label htmlFor=""  className='text-[18px] md:text-[20px] font-semibold'>Type of Program</label>
                                <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                                    <select name="" id="" className='w-full h-[55px] text-[18px] text-black/50 font-medium outline-none'>
                                        <option value="">EV Tech</option>
                                        <option value="">CNG Conversion</option>
                                        <option value="">General Auto Engineering</option>
                                    </select>
                                </div> 
                                <div>
                                    <h5 className='text-[18px] md:text-[20px] font-semibold'>Individual or Cooperate</h5>
                                    <div className='flex flex-wrap gap-5 md:gap-8'>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="individual_cooperate" id="individual" value="Individual" className='scale-125'/>
                                            <label htmlFor="individual">Individual</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="individual_cooperate" id="cooperate" value="Cooperate" className='scale-125'/>
                                            <label htmlFor="cooperate">Cooperate</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-[18px] md:text-[20px] font-semibold'>Preferred Mode</h5>
                                    <div className='flex flex-wrap gap-5 md:gap-8'>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="Preferred_mode" id="onsite" value="Onsite" className='scale-125'/>
                                            <label htmlFor="onsite">Onsite</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="Preferred_mode" id="online" value="Online" className='scale-125'/>
                                            <label htmlFor="online">Online</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="Preferred_mode" id="blended" value="Blended" className='scale-125'/>
                                            <label htmlFor="blended">Blended</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <p className='text-[16px] font-semibold'>Certification Required?</p>
                                <div className="pt-2 flex items-center gap-2">
                                    <span className="text-sm font-medium">{isYesForCertificationRequired ? 'Yes' : 'No'}</span>
                                    <label className="relative inline-block w-14 h-8 cursor-pointer">
                                        <input type="checkbox"
                                        className="sr-only peer"
                                        checked={isYesForCertificationRequired}
                                        onChange={() => setIsYesForCertificationRequired(!isYesForCertificationRequired)}
                                        />
                                        <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 
                                        transition-all duration-300"></div>
                                        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform 
                                        duration-300 peer-checked:translate-x-6"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='pt-5 flex justify-between'>
                                <div onClick={closeModal}
                                className='flex justify-center items-center gap-2 bg-[#2FEAE4] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-[#002748] cursor-pointer'>
                                    <FaArrowLeft />
                                    <button className='cursor-pointer'>Previous</button>
                                </div>
                                <div className='flex justify-center items-center gap-2 bg-[#002748] w-[130px] md:w-[153px] h-[50px] 
                                rounded-lg text-[18px] font-semibold text-white cursor-pointer'>
                                    <button className='cursor-pointer'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default InquiryServiceReqForm