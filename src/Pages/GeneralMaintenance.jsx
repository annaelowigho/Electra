import React from 'react';
// import { useParams, useLocation, Navigate } from 'react-router-dom';

const GeneralMaintenance = () => {
//   const { id } = useParams(); // Get the `id` from the URL
//   const { state } = useLocation(); // Get the state passed via Link
//   const service = state?.service; // Extract the service from state

//   // If no service data or ID doesn't match, redirect to /services
//   if (!service || service.id !== id) {
//     return <Navigate to="/services" replace />;
//   }

  const Maintenance = [
    {
        image: "/assets/maintenance-icon1.svg",
        title: "Regular Oil Changes",
        description: "Change your engine oil every 5,000-7,000 km to combat Nigeria's dusty environment & use high-quality tropical-grade oils like 5W-30 or 10W-40 for optimal performance."
    },
    {
        image: "/assets/maintenance-icon2.svg",
        title: "Tyre Maintenance",
        description: "Check tyre pressure monthly (30-35 PSI for most cars). Rotate tyres every 10,000 km and inspect for wear, as potholes and rough roads are common"
    },
    {
        image: "/assets/maintenance-icon3.svg",
        title: "Brake System Checks",
        description: "Inspect brake pads and fluid levels every 6 months. Heavy traffic in cities like Abuja and Lagos stresses brakes, so replace pads every 20,000-30,000 km."
    },
    {
        image: "/assets/maintenance-icon4.svg",
        title: "Battery Care",
        description: " Clean battery terminals monthly to prevent corrosion, common in humid areas. Check voltage (12.6V when off) and replace batteries every 2-3 years"
    },
    {
        image: "/assets/maintenance-icon5.svg",
        title: "Air Filter Replacement",
        description: "Replace air filters every 10,000 km or sooner in dusty regions like the North. Clogged filters reduce fuel efficiency and engine performance."
    },
    {
        image: "/assets/maintenance-icon6.svg",
        title: "Cooling System Maintenance",
        description: "Flush and refill coolant every 2 years to prevent overheating, critical in Nigeria’s hot climate. Check radiator and hoses for leaks regularly."
    }
  ]

  const MaintenanceTasks = [
    {
      task: 'Oil Change',
      frequency: 'Every 5,000-7,000 km',
      notes: 'Use synthetic oil for high temperatures.',
    },
    {
      task: 'Tyre Rotation',
      frequency: 'Every 10,000 km',
      notes: 'Balance and Align wheels.',
    },
    {
      task: 'Brake Inspection',
      frequency: 'Every 6 months',
      notes: 'Check pads, disc, and fluid.',
    },
    {
      task: 'Battery Check',
      frequency: 'Monthly',
      notes: 'Clean Terminal, check charge.',
    },
    {
      task: 'Air Filter',
      frequency: 'Every 10 km',
      notes: 'Inspect more often in dusty areas.',
    },
    {
      task: 'Coolant Flush',
      frequency: 'Every 2 years',
      notes: 'Use ethylene glycol-based coolant.',
    },
  ];

  return (
    <>
        <div className="bg-[url(/assets/general-maintenance-bg.svg)] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-white text-[60px] font-bold leading-16">General Maintenance</h2>
                <p className="text-white text-[20px] md:text-[24px] md:px-5 pt-5">
                    Keep your vehicle in top shape with our expert tips tailored for Nigerian roads.
                </p>
            </div>
        </div>
        <div className='px-[20px] py-[20px] md:px-[30px] md:py-[50px] xl:px-[100px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Why Vehicle Maintenance Matters in Nigeria
            </h2>
            <p className="text-center text-[20px] md:text-[24px] md:px-5 pt-5">
                Nigeria's varied roads and tough conditions demand regular vehicle upkeep to ensure safety, save costs, 
                and prolong your car's life
            </p>
        </div>
        <div className='bg-[#002748] py-[30px] md:py-[50px] xl:py-[80px] px-[20px] md:px-[30px] xl:px-[150px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] text-white leading-10 md:leading-14">
                Essential Maintenance Tips
            </h2>
            <div className='pt-[30px] md:pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>          
                {Maintenance.map((item, index) => {
                    return (
                        <div key={index} className='bg-white px-[18px] py-[30px] flex flex-col items-center rounded-xl
                        h-[255px] xl:h-[270px] hover:bg-[#2FEAE4] transition-all duration-300 hover:-translate-y-2 hover:text-[#002748]'>
                            <div className='bg-[#002748] h-[50px] w-[50px] rounded-full flex items-center justify-center'>
                                <img src={item.image} alt="" />
                            </div>
                            <h4 className='text-[18px] font-semibold pt-5 text-center'>{item.title}</h4>
                            <p className='text-center pt-5 text-[14px]'>{item.description}</p>
                        </div>
                    )         
                })}
            </div>
        </div>
        <div className='py-[30px] md:py-[50px] xl:py-[80px] px-[20px] md:px-[30px] xl:px-[100px]'>
            <h2 className="text-[30px] text-center font-semibold md:text-[48px] leading-10 md:leading-14">
                Recommended Maintenance Schedule
            </h2>
            <div className="px-[20px] py-[20px] md:px-[30px] md:py-[50px]">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-full rounded-t-2xl overflow-x-auto">
                        <table className="w-full table-fixed border-collapse">
                            <thead>
                                <tr className="bg-[#002748] text-white text-[18px] md:text-[24px] font-semibold">
                                    <th className="w-1/3 py-4 px-4">Tasks</th>
                                    <th className="w-1/3 py-4 px-4">Frequency</th>
                                    <th className="w-1/3 py-4 px-4">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[14px] md:text-[16px]">
                                {MaintenanceTasks.map((item, index) => (
                                    <tr key={index} className="border-b last:border-b-0">
                                    <td className="py-3 px-4 text-center">{item.task}</td>
                                    <td className="py-3 px-4 text-center">{item.frequency}</td>
                                    <td className="py-3 px-4 text-center">{item.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <a
                    href="/book-now"
                    className="mt-[20px] font-primary text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer 
                    w-[147px] h-[52px] flex items-center justify-center hover:shadow-lg transition-transform duration-500 hover:scale-105 
                    hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]"
                    >
                    Book Now
                    </a> */}
                </div>
            </div>
        </div>
        <div className='mb-[30px] md:mb-[50px] xl:mb-[80px] mx-[20px] md:mx-[30px] xl:mx-[100px] bg-[#2FEAE4] p-5 xl:p-10 rounded-2xl
        flex flex-col items-center justify-center'>
            <h2 className="text-[48px] xl:text-[60px] font-bold leading-16 text-center">Your Reliable Vehicle Partner</h2>
            <p className="text-[20px] md:text-[24px] md:px-5 pt-5 text-center">
                Looking for certified mechanics in Delta State? 
                Electra offers expert maintenance and reliable service to keep your vehicle running smoothly
            </p>
            <a href="/book-now" className="mt-[20px] font-primary text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer 
            px-10 py-6 h-[60px] flex items-center justify-center hover:shadow-lg transition-transform duration-500 hover:scale-105 
            hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]">
                Contact Us
            </a>
        </div>
    </>
  )
}

export default GeneralMaintenance;