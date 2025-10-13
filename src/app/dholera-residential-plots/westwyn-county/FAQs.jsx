"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Where is WestWyn County located?",
    answer: "WestWyn County is on Fedra-Pipli State Highway (100 ft road), a lively and highly accessible area in Dholera SIR, just 15 minutes from the Dholera International Airport and the Ahmedabad–Dholera Expressway."
  },
  {
    question: "Are the plots legally approved?",
    answer: "Yes, all plots are NA/NOC cleared, title-clear, and registry-ready, making them safe for both domestic and NRI investors."
  },
  {
    question: "What sizes and prices are available?",
    answer: "Plots range from 170–250 sq. yd., starting at ₹10 Lakh, designed to suit early investors and those looking for secure growth in Dholera Smart City."
  },
  {
    question: "How does the booking process work?",
    answer: "Reserve your plot with a token of ₹50,000. Free site visits are included, and after full payment, the legal process is initiated, with registry papers delivered via speed post."
  },
  {
    question: "What makes WestWyn County a smart investment now?",
    answer: "With the Dholera International Airport, Ahmedabad–Dholera Expressway, and industrial projects like the Tata Semiconductor Fab, land values in this region are set to rise rapidly. Early investment ensures high growth potential."
  }
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col md:flex-row px-4 md:px-8 py-8 gap-6 md:gap-12 max-w-7xl mx-auto">
          
          {/* Left Section (40%) */}
          <div className="w-full md:w-2/5 pl-2 pr-2">
            <h2 className="text-[32px] font-semibold text-[#151f28] mb-4">
              Frequently Asked Questions
            </h2>
            <p>Have more questions ?</p>
            
            <div className="pt-4">
              
              <a className="bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md" href="tel:+919958993549">Give us a missed call</a>
            </div>
          </div>

          {/* Right Section (60%) */}
          <div className="w-full md:w-3/5 md:pl-24 md:pr-4  md:mt-0 space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-all duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-gray-900 font-medium pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 transition-transform duration-200">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 px-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
