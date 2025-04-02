import React from 'react'
import { motion } from 'framer-motion'

const Logos = [
    {
        image: "/assets/naddc.svg",
    },
    {
        image: "/assets/pi-cng.svg",
    },
    {
        image: "/assets/schoolville.svg",
    }

]
const Partner = () => {
  return (
    <>
        <div className='mt-[50px] md:mt-[100px] xl:mt-[150px] bg-[#2FEAE4] px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[150px] xl:py-[54px]'>
            <h4 className='text-[30px] text-center font-semibold md:text-[48px]'>Trusted Partners</h4>
            <p className='text-center text-[20px] md:text-[24px] font-medium'>Delivering Excellence, Every Mile </p>
        </div>
    </>
  )
}

export default Partner