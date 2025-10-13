"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Dholera Smart City?",
    answer:
      "Dholera Smart City is India's first planned greenfield smart city, located in Ahmedabad, Gujarat. It is part of the Delhi-Mumbai Industrial Corridor (DMIC) project and is envisioned as a global hub for economic activities through advanced infrastructure, technology, and sustainable development.",
  },
  {
    question: "What are the major projects planned in Dholera?",
    answer: [
      "Dholera International Airport.",
      "India's first semiconductor plant by TATA - ₹91,000 Cr investment.",
      "Asia's largest solar park - 5,000MW",
      "ReNew Power solar cell manufacturing unit",
    ],
  },
  {
    question: "Why should we invest in Dholera?",
    answer: [
      "India's first fully planned smart city, built from scratch",
      "Upcoming expressway to be operational in 1-2 months",
      "International airport set for completion by 2026",
      "₹90,000 Cr investment by TATA in India's first semiconductor plant, boosting growth potential",
    ],
  },
  {
    question: "I live in Delhi NCR. Why should I invest so far away?",
    answer: [
      "Helps diversify your investment portfolio",
      "Requires a smaller investment amount (low ticket size)",
      "Offers potential for high returns",
    ],
  },
  {
    question: "Is my land investment secure?",
    answer: [
      "Located in a gated community",
      "Registry-ready",
      "N.A. (Non-Agricultural) and N.O.C. (No Objection Certificate) approvals",
    ],
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return (
        <ul className="list-disc list-inside space-y-2">
          {answer.map((item, idx) => (
            <li key={idx} className="text-gray-600 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
    );
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
              <a
                className="bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
                href="tel:+919958993549"
              >
                Give us a missed call
              </a>
            </div>
          </div>

          {/* Right Section (60%) */}
          <div className="w-full md:w-3/5 md:pl-24 md:pr-4 md:mt-0 space-y-1">
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
                    {renderAnswer(faq.answer)}
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