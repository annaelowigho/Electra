import React from 'react'


const ProgressBar = () => {
    // Example data for three sections
    const sections = [
      { title: "Vehicle Conversion", total: 500, current: 375 }, // 75%
      { title: "Certified Technician", total: 300, current: 240 }, // 80%
      { title: "Project Timeline", total: 400, current: 200 }, // 50%
    ];
  
    return (
      <div className="pt-10 space-y-10">
        {sections.map((section, index) => {
          const progress = (section.current / section.total) * 100; // Calculate percentage
          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p className="text-[18px] font-semibold">{section.title}</p>
                <p className="text-[24px] font-bold">{section.current}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-[#002748] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  

export default ProgressBar