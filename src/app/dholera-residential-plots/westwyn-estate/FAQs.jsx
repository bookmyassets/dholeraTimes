"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Where is WestWyn Estate located?",
    answer: "WestWyn Estate is located on Vadhela-Navda Highway, 0 km from Dholera SIR, close to TP 5, and just 15 minutes from the Activation Area, 25 minutes from the Tata Semiconductor Fab, and 30 minutes from the Dholera International Airport."
  },
  {
    question: "What is the price of plots?",
    answer: "Plots in Dholera start from ₹10 Lakh, with sizes ranging between 151 and 198 sq. yd., making them accessible for early investors."
  },
  {
    question: "Are the plots legally approved?",
    answer: "Yes, all plots are NA/NOC cleared, plan pass, and title-clear, ensuring a secure and transparent investment."
  },
  {
    question: "What is the booking process?",
    answer: "Reserve your plot with a token of ₹50,000. A free site visit is included, and after full payment, the legal process is initiated and registry papers are delivered via speed post."
  },
  {
    question: "Why should I invest in WestWyn Estate now?",
    answer: "With the upcoming Dholera International Airport, the Tata Semiconductor Plant, and rapid development of the Dholera Smart City, this region is transforming into India's new industrial hub. Land values are set to rise, and residential demand is growing quickly, making WestWyn Estate a smart early investment."
  },
  {
    question: "How can Dholera Times help you invest?",
    answer: "Dholera Times keeps you updated with the latest news, project launches, and infrastructure developments in Dholera, helping you make informed investment decisions."
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
