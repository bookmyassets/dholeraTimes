import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Dholera Smart City?",
    answer:
      "Dholera Smart City is India’s first planned greenfield smart city, located in Ahmedabad, Gujarat. It is part of the Delhi-Mumbai Industrial Corridor (DMIC) project and is envisioned as a global hub for economic activities through advanced infrastructure, technology, and sustainable development.",
  },
  {
    question: "What are the major projects planned in Dholera?",
    answer:
      "• Dholera International Airport \n• India’s first semiconductor plant by TATA - ₹91,000 Cr investment \n• Asia’s largest solar park - 500MW\n• ReNew Power solar cell manufacturing unit",
  },
  {
    question: "Why should we invest in Dholera?",
    answer:
      "• India’s first fully planned smart city, built from scratch\n• Upcoming expressway to be operational in 4-5 months\n• International airport set for completion by 2026\n• ₹90,000 Cr investment by TATA in India's first semiconductor plant, boosting growth potential",
  },
  {
    question: "I live in Delhi NCR. Why should I invest so far away?",
    answer:
      "• Helps diversify your investment portfolio\n• Requires a smaller investment amount (low ticket size)\n• Offers potential for high returns",
  },
  {
    question: "Is my land investment secure?",
    answer:
      "• Located in a gated community\n• Registry-ready\n• N.A. (Non-Agricultural) and N.O.C. (No Objection Certificate) approvals",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5">
                    {faq.answer.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
