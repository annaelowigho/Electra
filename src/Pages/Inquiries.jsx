import React, { useState } from 'react'

const Inquiries = () => {

    const [company, setCompany] = useState('')

  return (
    <>
        <div className="bg-[#002748] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[44px] md:text-[60px] font-bold leading-14 md:leading-16">
                    Inquiries
                </h2>
                <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                    Unlock the Answers You Need 
                </p>
            </div> 
        </div>
        <div className='shadow-xl mx-[20px] my-[20px] md:mx-[30px] md:my-[40px] xl:mx-[100px] lg:my-[80px] px-3 py-5 md:px-5 md:py-10 
        lg:px-16 xl:px-18 rounded-2xl'>
            <h2 className='text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center font-semibold'>
                Unified Inquiry Form
            </h2>
            <p className='text-center text-[16px] md:text-[20px] xl:text-[24px] font-medium'>
                Please fill out the form below and our team would get back to you within 24 hours 
            </p>
            <form action="">
                <p className='text-[20px] md:text-[24px] lg:text-[30px] pt-5 lg:pt-8 font-bold'>
                    Contact Information
                </p>
                <div className='pt-3 flex flex-col md:flex-row w-full gap-4 lg:gap-10'>
                    <div className='text-[18px] md:[24px] w-full'>
                        <label htmlFor="full-name" className='font-semibold'>Full Name</label>
                        <input type="text" id='full-name' placeholder='John Doe'
                        className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                    </div>
                    <div className='text-[18px] md:[24px] w-full relative'>
                        <label htmlFor="company" className='font-semibold'>Company/Organization</label>
                        <input type="text" id='company' placeholder='Electra Motors' value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>

                        {company === '' && (
                            <span className='absolute right-[12px] top-[56px] md:top-[55px] text-black/50 text-[14px] md:text-[16px]
                            lg:text-[18px]'>
                                optional
                            </span>
                        )}
                    </div>
                </div>
                <div className='pt-3 md:pt-5 flex flex-col md:flex-row w-full gap-4 lg:gap-10'>
                    <div className='text-[18px] md:[24px] w-full'>
                        <label htmlFor="email" className='font-semibold'>Email Address</label>
                        <input type="email" id='email' placeholder='johndoe@email.com'
                        className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                    </div>
                    <div className='text-[18px] md:[24px] w-full'>
                        <label htmlFor="phone-number" className='font-semibold'>Phone Number</label>
                        <input type="text" id='phone-number' placeholder='+234 0123456789'
                        className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50'/>
                    </div>
                </div>
                <div className='pt-3 md:pt-5 text-[18px] md:[24px] w-full'>
                    <label htmlFor="" className='font-semibold'>Contact Address</label>
                    <textarea name="" id="" placeholder='Asaba' 
                    className='mt-2 w-full px-4 py-4 rounded-2xl border-1 border-black/50 resize-none'>
                    </textarea>
                </div>

                <div className=''>
                    <p className='text-[20px] md:text-[24px] lg:text-[30px] pt-5 lg:pt-8 font-bold'>
                        Inquiry Type
                    </p>
                    <div className='pt-3 md:pt-5 text-[18px] md:[24px] w-full'>
                        <label htmlFor="" className='font-semibold'>Select Inquiry Type</label> <br />
                        <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                            <select name="" id="" className='w-full h-[60px] text-[18px] text-black/50 font-medium outline-none'>
                                <option value="" disabled>Please Select an Option</option>
                                <option value="">Complete Engine Overhaul</option>
                                <option value="">Engine Diagnostics</option>
                                <option value="">Engine Tuning</option>
                                <option value="">Turbocharger Repair</option>
                            </select>
                        </div> 
                    </div>
                </div>

                <div className=''>
                    <p className='text-[20px] md:text-[24px] lg:text-[30px] pt-5 lg:pt-8 font-bold'>
                        Nature of Interest
                    </p>
                    <div className='pt-3 md:pt-5 text-[18px] md:[24px] w-full'>
                        <label htmlFor="" className='font-semibold'>Nature of Interest</label> <br />
                        <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                            <select name="" id="" className='w-full h-[60px] text-[18px] text-black/50 font-medium outline-none'>
                                <option value="" disabled>Please Select an Option</option>
                                <option value="">Complete Engine Overhaul</option>
                                <option value="">Engine Diagnostics</option>
                                <option value="">Engine Tuning</option>
                                <option value="">Turbocharger Repair</option>
                            </select>
                        </div> 
                    </div>
                    <div className='pt-5 md:pt-8 text-[18px] md:[24px] w-full'>
                        <label htmlFor="" className='font-semibold'>Preferred Communication Channel</label> <br />
                        <div className='mt-2 px-[20px] md:px-[15px] rounded-2xl border-1 border-black/50'>
                            <select name="" id="" className='w-full h-[60px] text-[18px] text-black/50 font-medium outline-none'>
                                <option value="" disabled>Please Select an Option</option>
                                <option value="">Complete Engine Overhaul</option>
                                <option value="">Engine Diagnostics</option>
                                <option value="">Engine Tuning</option>
                                <option value="">Turbocharger Repair</option>
                            </select>
                        </div> 
                    </div>
                </div>

                <div className='flex items-center pt-6 gap-3 cursor-pointer pb-4'>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <input type="checkbox" className='w-[20px] h-[20px] cursor-pointer' />
                        <p className='text-[14px] md:text-[18px] font-semibold m-0'>
                            I agree to the <span className='text-[#EA1127]'>Terms and Conditions</span> and 
                            <span className='text-[#EA1127]'> Privacy Policy</span> of this company
                        </p>
                    </label>
                </div>
                <button className='text-[18px] text-white font-semibold bg-[#002748] w-full rounded-lg cursor-pointer px-6 py-4 text-center
                hover:shadow-lg transition-transform duration-500 hover:scale-101 hover:bg-[#2FEAE4] hover:border-[3px]
                hover:border-[#002748] hover:text-[#13202b]'>
                    Submit Inquiry
                </button>
            </form>
        </div>
    </>
  )
}

export default Inquiries