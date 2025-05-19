import React from 'react';
import FAQItem from '../Components/FAQItems';

const FAQs = [
  {
    question: "Introduction",
    answer: `At Electra Motors Limited, your privacy is important to us. This Privacy Policy explains how we collect, use, share,
            and protect your personal information when you engage with our Compressed Natural Gas (CNG) vehicle
            conversion services in Nigeria. By using our services, visiting our office, or interacting with our website,  you 
            agree to the terms of this Privacy Policy`
  },
  {
    question: "Information we collect",
    answer: "We may collect the following types of information:",
    answers:[
        "Personal Information: Full name, phone number, email address, home address, and government-approved valid identification.",
        "Vehicle Information: Vehicle type, make, model, year, and engine specifications.",
        "Transaction Details: Payment information, invoices, and service history.",
        "Digital Data: IP address, browser type, and device information when you visit our website."
    ]
  },
  {
    question: "How We Use Your Information",
    answer: "We use your information to:",
    answers:[
        "Provide and manage CNG conversion services.",
        "Communicate with you about your appointments and inquiries.",
        "Issue invoices and process payments.",
        "Maintain service records for warranty and safety tracking.",
        "Improve our services and customer experience.",
        "Comply with legal and regulatory obligations.",
    ]
  },
  {
    question: "Data Security",
    answer: "We implement industry-standard security measures to protect your data against unauthorized access"
  },
  {
    question: "Your Rights",
    answer: "You have the right to:",
    answers:[
        "Request access to your personal data.",
        "Ask for corrections or updates to your information.",
        "Withdraw consent or request deletion of your data (subject to legal and contractual restrictions).",
    ],
    answerTwo: "To exercise any of these rights, please contact us using the information provided below."
  },
  {
    question: "Data Retention",
    answer: "We retain your personal and vehicle information for as long as necessary to satisfy the purposes outlined in this policy or as required by law. After the retention period, your data will be securely deleted."
  },
  {
    question: "Changes to this Privacy Policy",
    answer: "We may update this Privacy Policy from time to time. If significant changes are made, we will notify you via email or through our website. Please review this policy periodically for the latest information."
  },
  {
    question: "Legal Compliance",
    answer: "We comply with NDPR and other Nigerian data privacy laws."
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-[#002748] w-full h-[355px] bg-cover bg-center flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white text-[44px] md:text-[60px] font-bold leading-14 md:leading-16">
            Privacy Policy
          </h2>
          <p className="text-white text-[20px] md:text-[24px] px-5 pt-5">
            Protecting Your Data with Trust & Transparency.
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
              answerTwo={item.answerTwo}
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

export default PrivacyPolicy;