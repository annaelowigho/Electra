import React from 'react';
import FAQItem from '../Components/FAQItems';

const FAQs = [
  {
    question: "Introduction",
    answer: "Welcome to Electra Motors. These Terms and Conditions govern the provision of Compressed Natural Gas (CNG) conversion services, maintenance, and related products offered by Electra Motors Limited. By engaging our services, you agree to be bound by these terms."
  },
  {
    question: "Scope of Services",
    answer: "Electra provides CNG conversion services for petrol-powered vehicles, including installation of CNG kits, high-pressure cylinders, regulators, and fuel injectors."
  },
  {
    question: "Scope of Services",
    answers: [
      "Electra provides CNG conversion services for petrol-powered vehicles, including installation of CNG kits, high-pressure cylinders, regulators, and fuel injectors.",
      "Services include vehicle inspections, conversions, testing, and post-conversion maintenance, subject to bookings and appointments on our website.",
      "Electra may supply CNG conversion kits and spare parts, such as air/gas mixers, pressure regulators, and CNG tanks, as approved by the Standards Organization of Nigeria (SON)."
    ]
  },
  {
    question: "Customer Obligations",
    answers: [
      "You must provide accurate information about your vehicle, including make, model, and condition, to ensure compatibility with CNG conversion.",
      "Vehicles must be in good mechanical condition before conversion. Electra reserves the right to refuse service if the vehicle does not meet our safety or technical requirements.",
      "You agree to comply with all safety guidelines provided by Electra, including proper handling and refueling of CNG vehicles."
    ]
  },
  {
    question: "Payment Terms",
    answers: [
      "A non-refundable payment of the quoted conversion cost is required before conversion.",
      "Payments can be made via bank transfer, POS, or other methods specified. All payments are subject to applicable taxes, including Value Added Tax (VAT), unless waived under the VAT Modification Order 2024.",
    ]
  },
  {
    question: "Warranties and Guarantees",
    answers: [
      "Electra warrants that all CNG conversion kits and installations meet industry standards and are free from defects in materials and workmanship for a period of one (1) month from the date of completion.",
      "The warranty covers repairs or replacements of defective parts, provided the vehicle is maintained according to Electra guidelines.",
      "The warranty does not cover damages resulting from misuse, accidents, unauthorized repairs, or failure to follow guidelines and safety protocols.",
      "Any claims under the warranty must be reported in writing to Electra within 2 days of discovering the issue."
    ]
  },
  {
    question: "Liability",
    answers: [
      "Electra shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products.",
      "Our liability for direct damages is limited to the cost of the conversion service or product purchased.",
      "Electra is not responsible for accidents or damages caused by improper handling of CNG systems by the Customer or third parties.",
    ]
  },
  {
    question: "Safety and Compliance",
    answers: [
      "All conversions adhere to safety standards set by NMDPRA, SON, and the Nigerian Automotive Design and Development Council (NADDC).",
      "Customers must ensure CNG tanks are inspected annually by certified technicians to maintain safety compliance.",
    ]
  },
  {
    question: "Cancellations and Refunds",
    answers: [
      "A Cancellations made before work begins are subject to a 20% administrative fee on the deposit.",
      "No refunds are issued for cancellations after conversion work has commenced.",
      "Refunds for defective products are processed within 7 days, subject to inspection and verification by Electra.",
    ]
  },
  {
    question: "Force Majeure",
    answer: "Electra shall not be liable for delays or failure to perform services due to events beyond our control, including but not limited to natural disasters, government regulations, or supply chain disruptions."
  },
];

const TermsPolicy = () => {
  return (
    <>
      <div className="bg-[#002748] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white text-[44px] md:text-[60px] font-bold leading-14 md:leading-16">
            Terms Policy
          </h2>
          <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
            Ensuring Transparency and Trust in Our Terms
          </p>
        </div>
      </div>

      <div className='px-[20px] py-[30px] md:px-[70px] md:py-[50px] xl:px-[200px] xl:py-[100px]'>
        <div className="pt-[30px] flex flex-col gap-5 md:gap-8">
          {FAQs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              answers={item.answers}
            />
          ))}
        </div>
      </div>
        <div className='flex flex-col items-center justify-center bg-[#D9E8F4] mx-[20px] mt-0 mb-[50px] p-10 rounded-lg md:mx-[80px]
        md:mb-[80px] lg:mb-[100px] xl:mb-[150px] lg:mx-[100px] min-[1280px]:mx-[150px] xl:mx-[250px]'>
            <h2 className="text-[38px] md:text-[48px] font-bold text-center">For inquiries, contact:</h2>
            <p className="text-[20px] md:text-[24px] text-center">
                Electra Motors
            </p>
            <a href="/book-now" className="mt-[20px] font-primary text-[18px] text-white font-semibold bg-[#002748] rounded-lg cursor-pointer 
            px-10 py-6 h-[60px] flex items-center justify-center hover:shadow-lg transition-transform duration-500 hover:scale-105 
            hover:bg-[#2FEAE4] hover:border-[3px] hover:border-[#002748] hover:text-[#002748]">
                Contact Us
            </a>
        </div>
    </>
  );
};

export default TermsPolicy;