import React from 'react'

const Station = [
    {
        state: "Lagos",
        station: "NNPC Mega Station",
        address: "NNPC Mega Station",
    },
    {
        state: "Lagos",
        station: "NNPC Mega Station",
        address: "NNPC Mega Station",
    },
    {
        state: "Lagos",
        station: "NNPC Mega Station",
        address: "NNPC Mega Station",
    }
]

const CNGStation = () => {
  return (
    <>
        <div className="bg-[url(/assets/find-station-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[44px] md:text-[60px] font-bold leading-14 md:leading-16">
                    Find CNG Refueling Station
                </h2>
                <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
                    Locate CNG stations effortlessly with our directory! 
                </p>
            </div> 
        </div>
        <div className='px-[20px] pt-[30px] md:px-[30px] md:pt-[50px] xl:px-[100px] xl:pt-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Conversion Kits
            </h2>
            <div className="pt-[20px] xl:pt-[30px] w-full">
                <form className="w-full">
                    <div className="w-full flex flex-col md:flex-row gap-4 items-center">  
                        <div className="w-full">
                            <label htmlFor="region" className="text-[24px] font-semibold">Region</label><br />
                            <input
                            id="region"
                            type="text"
                            placeholder="Select Region"
                            className="bg-[#D9E8F4] p-6 rounded-lg w-full text-[18px]"/>
                        </div>      
                        <div className="w-full">
                            <label htmlFor="city" className="text-[24px] font-semibold">City</label><br />
                            <input
                            id="city"
                            type="text"
                            placeholder="Select City"
                            className="bg-[#D9E8F4] p-6 rounded-lg w-full text-[18px]"/>
                        </div>
                        <button className='mt-[10px] md:mt-[35px] text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer 
                        w-full h-[65px] xl:h-[72px] hover:shadow-lg transition-transform duration-500 
                        hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                            Find CNG Station
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='overflow-x-scroll md:overflow-hidden my-[20px] md:my-[50px]'>
            <table className='w-[700px] md:w-full'>
                <thead>
                    <tr className="bg-[#002748] text-white text-[18px] md:text-[24px] font-semibold">
                        <th className="md:w-1/4 py-4">State</th>
                        <th className="md:w-1/4 py-4 ">Station</th>
                        <th className="md:w-1/4 py-4">Address</th>
                        <th className="md:w-1/4 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className='text-[14px] md:text-[16px] xl:text-[24px] font-semibold'>
                    {Station.map((item, index) => (
                        <tr key={index}>
                            <td className="py-3 px-4 text-center">{item.state}</td>
                            <td className="py-3 px-4 text-center">{item.station}</td>
                            <td className="py-3 px-4 text-center">{item.address}</td>
                            <td className="py-3 px-4 text-center">
                                <button className='bg-[#002748] px-8 py-2 text-white rounded-lg cursor-pointer hover:bg-[#2FEAE4] 
                                border-[#002748] border-[3px] hover:text-[#002748] hover:shadow-lg transition-transform duration-500 
                                hover:scale-105'>
                                    Locate
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default CNGStation