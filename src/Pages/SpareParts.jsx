import React from 'react'


const Parts = [
    {
        image: "/assets/brake-pads.png",
        title: "Brake pads",
        description: "High quality brake pads for all vehicle types",
        price: "15,000"
    },
    {
        image: "/assets/oil-filter.png",
        title: "Oil Filters",
        description: "Premium oil filters for smooth engine performance",
        price: "45,000"
    },
    {
        image: "/assets/car-battery.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    },
    {
        image: "/assets/brake-pads.png",
        title: "Brake pads",
        description: "High quality brake pads for all vehicle types",
        price: "15,000"
    },
    {
        image: "/assets/oil-filter.png",
        title: "Oil Filters",
        description: "Premium oil filters for smooth engine performance",
        price: "45,000"
    },
    {
        image: "/assets/car-battery.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    },
    {
        image: "/assets/brake-pads.png",
        title: "Brake pads",
        description: "High quality brake pads for all vehicle types",
        price: "15,000"
    },
    {
        image: "/assets/oil-filter.png",
        title: "Oil Filters",
        description: "Premium oil filters for smooth engine performance",
        price: "45,000"
    },
    {
        image: "/assets/car-battery.png",
        title: "Car Batteries",
        description: "Reliable batteries with long lasting power",
        price: "45,000"
    }
]


const SpareParts = () => {
  return (
    <>
        <div className="bg-[url(/assets/spare-parts-bg.png)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[48px] font-bold leading-16">Spare Parts Sale</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Durable, genuine parts for a smooth ride!
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[30px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Our Products
            </h2>
            <div className='pt-[20px] md:pt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[23px]'>
                {Parts.map((item, index) => {
                    return (
                        <div key={index} className='bg-white shadow-md px-3 py-5 rounded-lg'>
                            <img src={item.image} alt="" className='w-full bg-[#B6B6B6] rounded-md'/>
                            <h5 className='text-[24px] font-semibold pt-4'>{item.title}</h5>
                            <p className='text-[18px]'>{item.description}</p>
                            <div className='flex justify-between'>
                                <p className='text-[24px] font-semibold'>&#8358;{item.price}</p>
                                <button className='font-primary text-[18px] text-white font-semibold bg-[#002748]  rounded-lg cursor-pointer 
                                w-[120px] xl:w-[147px] h-[40px] xl:h-[52px] mt-[10px] hover:shadow-lg transition-transform-y duration-500 
                                hover:scale-105 hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    </>
  )
}

export default SpareParts