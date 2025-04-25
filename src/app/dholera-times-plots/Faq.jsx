import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bg from "@/assets/pexels2.jpg"; // Replace with the actual path to your background image

const faqs = [
  {
    question: "Why Should I Invest in Dholera?",
    answer: [
      "Smart City by Government.",
      "Low Price Today – High Value Tomorrow.",
      "Big Plans, Big Growth!",
    ],},
  {
    question: "Is the Project Government Approved?",
    answer: [
      "Yes – 100% Approved by Government of India & Gujarat.",
    ],
  },
  {
    question: "How Can I Visit the Site Before Investing?",
    answer: [
      "🚌 Free Site Visits from Ahmedabad",
      "👨‍💼 Local Team Support",
      "📞 Just Call or WhatsApp Us!",
    ],
  },
  {
    question: "How Soon Can I Get Possession of My Plot?",
    answer: [
      "⏳ Within 2–6 Months After Payment",
      "📑 Proper Paperwork Provided",
    ],
  },
  {
    question: "How Can I Book a Plot with DholeraTimes?",
    answer: [
      "📝 Step 1: Choose your plot",
      "💰 Step 2: Pay a small booking amount",
      "🖊️ Step 3: Sign documents",
    ],
  },
  {
    question: "What Are the Major Projects Planned in Dholera?",
    answer: [
      "✈️ International Airport",
      "🚇 Metro Train to Ahmedabad",
      "🏭 Industrial Hubs & Factories",
      "☀️ Solar Parks",
      "🛣️ Big Roads & Expressways",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative  p-6">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-30"
      />
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 relative">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border rounded-lg p-4 shadow-md bg-gray-900 bg-opacity-80"
          >
            <button
              className="w-full flex justify-between items-center text-[#edc46b] text-left text-xl font-bold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-lg text-[#f6d99a] overflow-hidden"
                >
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-5">
                      {faq.answer.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
