"use client"
import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, User, Check, ChevronDown, ChevronUp, Globe, BookOpen, DollarSign, Building, FileText, Home } from 'lucide-react';
import Image from "next/image";
import hero from "@/assets/hero5.webp";

export default function NRIInvestmentGuide() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("WhyInvest");

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const handleScroll = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonStyle = (id) =>
    `px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow ${
      activeTab === id
        ? "bg-[#d8b66d] text-white"
        : "bg-white text-gray-800 hover:bg-gray-100"
    }`;

  const faqs = [
    {
      question: "Who can purchase immovable property in India?",
      answer: "Under general permission available to them, these categories of people can buy real property in India: (i) Non-Resident Indian (NRI), (ii) Person of Indian Origin (PIO). The general permission covers only residential and commercial property purchases in India; agricultural land/plantation property/farmhouses cannot be included under its purview."
    },
    {
      question: "Can NRI/PIO acquire agricultural land/plantation property/farm house in India?",
      answer: "No, NRIs and PIOs cannot acquire agricultural land, plantation property, or farm houses in India under the general permission."
    },
    {
      question: "Are any documents required to be filed with the Reserve Bank after the purchase?",
      answer: "No, an NRI/PIO who purchased property through general permission does not need to submit any reports or files with the Reserve Bank."
    },
    {
      question: "How many residential/commercial properties may NRI/PIO purchase under general permission?",
      answer: "Under general permission there are no limitations or restrictions placed upon how many properties an NRI or PIO may purchase."
    },
    {
      question: "Can a foreign national of non-Indian origin resident outside India purchase immovable property in India?",
      answer: "No, a non-Indian national resident outside India cannot acquire immovable property unless such acquisition comes as part of an inheritance from someone residing within India. However, they can acquire or transfer immovable properties on lease agreements that last not exceeding five years."
    },
    {
      question: "Can NRI/PIO repatriate the sale proceeds of immovable property?",
      answer: "Yes, in the event of sale of immovable property other than agricultural land/farm house/plantation property in India, the Authorised Dealer may allow repatriation of the sale proceeds outside India, provided certain conditions are satisfied. NRI/PIO are also allowed to repatriate an amount up to USD 1 million per financial year."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#151f28] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Gateway to Property Investment in India's 1st Greenfield Smart City!</h1>
          <h2 className="text-2xl md:text-3xl text-[#d3b469] mb-8">Invest in India's No.1 Smart City from Anywhere in the World</h2>
          <p className="text-lg mb-8">Trusted by 500+ NRIs from USA, UAE, UK & Canada. 100% Legal, AUDA-Approved Plots with Virtual Support.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-[#d3b469] hover:bg-[#c0a355] text-[#151f28] font-bold py-3 px-6 rounded-lg transition-all">
              Get Free Consultation
            </button>
            <button className="border-2 border-[#d3b469] text-[#d3b469] hover:bg-[#d3b469] hover:text-[#151f28] font-bold py-3 px-6 rounded-lg transition-all">
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-2 flex-wrap md:flex-nowrap">
            <button
              className={buttonStyle("WhyInvest")}
              onClick={() => handleScroll("WhyInvest")}
              aria-label="Why Invest in Dholera"
            >
              Why Invest
            </button>
            <button
              className={buttonStyle("WhyDholera")}
              onClick={() => handleScroll("WhyDholera")}
              aria-label="Why Choose Dholera"
            >
              Why Dholera
            </button>
            <button
              className={buttonStyle("InvestmentGuide")}
              onClick={() => handleScroll("InvestmentGuide")}
              aria-label="Investment Guide"
            >
              Investment Guide
            </button>
            <button
              className={buttonStyle("FinancialGuidelines")}
              onClick={() => handleScroll("FinancialGuidelines")}
              aria-label="Financial Guidelines"
            >
              Financial Guidelines
            </button>
            <button
              className={buttonStyle("FAQs")}
              onClick={() => handleScroll("FAQs")}
              aria-label="FAQs"
            >
              FAQs
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <p className="text-center text-lg md:text-xl font-medium text-gray-700">
            Our <strong>NRI Investment Guide for Dholera Smart City</strong> gives you a complete step-by-step path to <strong>buy plots in India</strong> — legally, securely, and entirely online. Whether you're in the USA, UK, UAE, or Canada, start your smart investment journey in <strong>Dholera Smart City</strong>, India's first greenfield smart city backed by massive government infrastructure projects.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 leading-relaxed bg-gray-50">
        {/* Why Invest Section */}
        <div id="WhyInvest" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why NRIs Should Invest In India, Especially In Dholera Smart City
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                The real estate market in India is now a top investment option for Indians who are not residents (NRIs) with the highest returns, stability in the economy and a long-term potential for growth. In the midst of emerging intelligent cities Dholera Smart City stands out as a futuristic urban center that offers top-of-the-line infrastructure, strategically connected, and a government-backed investment environment.
              </p>
              
              <blockquote className="border-l-4 border-[#d8b66d] pl-4 italic text-xl mb-8 text-gray-700">
                "Dholera is not just a city, it's the future of smart living in India."
              </blockquote>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Why NRIs Should Invest in India</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">Rapid Economic Growth</strong> — India's economy is among of the fastest growing worldwide which makes real estate an excellent investment choice.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">Policy Reforms and Government Reforms</strong> — Initiatives like RERA (Real Estate Regulatory Authority), GST benefits, and the relaxation of FDI rules have improved transparency and security for the property market.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">High Return on Investment and Appreciation</strong> — Real estate in India has delivered consistently higher yields than the developed markets, with a particular focus on the growth corridors such as Dholera Smart City.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">Financial and emotional security</strong> — A property in India provides a solid financial back-up while also keeping NRIs connected to their home country.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="NRI Investment Benefits"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Dholera Section */}
        <div id="WhyDholera" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why Dholera is a Smart Choice for NRIs
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Strategic Location</h3>
              <p className="text-gray-700">Only 70 km away from Ahmedabad and connected by metro rail, expressways, and the soon-to-be Dholera International Airport.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">World-Class Infrastructure</h3>
              <p className="text-gray-700">Includes six-lane highways and underground utility, 24-hour power and water supply. It also includes ICT enabled government and intelligent mobility solutions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Global Business Hub</h3>
              <p className="text-gray-700">Industries such as electronics, aerospace, defense, IT, and renewable power sectors are being set up in Dholera creating jobs and business growth.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainable Smart Living</h3>
              <p className="text-gray-700">Eco-friendly development, green energy solutions, and top-quality urban development make Dholera an ideal location for commercial and residential investments.</p>
            </div>
          </div>
          
          <p className="text-gray-700">
            Dholera Smart City is planned within the Delhi-Mumbai Industrial Corridor (DMIC), and is the largest planned smart city covering an area of 920 square km.
          </p>
        </div>

        {/* Why Choose Dholera Times */}
        <div className="container mx-auto px-4 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center relative">
              <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
                Why Choose Dholera Times as Your Investment Partner?
              </span>
            </h3>
            
            <p className="text-gray-700 mb-6">
              NRIs require a reliable, professional, transparent, and knowledgeable real estate agent when they invest in India. Dholera Times is one of the most reliable brands within Dholera Smart City, Ahmedabad, Gujarat, offering:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">100% Legally Clear Properties with NA/NOC approval</strong>, Unit Plan clearance from the relevant Government Authorities, Clear Title ownership, which guarantees an investment that is completely risk-free.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">Large Land Parcels Available</strong>: We provide NA/NOC certified Title-Clear properties in which all revenue issues are checked and resolved prior to the sale, giving you complete security.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">Large and Medium-Ticket size</strong> investors from United Kingdom (England), Italy, Spain (Barcelona), USA (New Jersey), Canada, Australia, UAE (Dubai), Singapore, and Hong Kong have already invested with us.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">Unique Investment Opportunity</strong> in residential lands that have the potential to appreciate within and in the vicinity of Dholera SIR (Special Investment Region).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">Hassle-free purchasing process</strong> for NRIs such as visiting sites, virtual tours of properties as well as support for documentation and financial advice services.
                </span>
              </li>
            </ul>
            
            <p className="italic text-gray-700 text-lg">
              Dholera Smart City is an opportunity to invest in the future for NRIs seeking high returns, strategic growth, and an assured future. Working with Dholera Times guarantees that your investment is secure with a seasoned, knowledgeable, and transparent team.
            </p>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div id="InvestmentGuide" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Step-by-Step Guide for NRIs to Buy Plots
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                <h3 className="text-xl font-semibold text-gray-800">Shortlist Projects</h3>
              </div>
              <p className="text-gray-700">Browse through our available projects like Orchid, Paradise, etc.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                <h3 className="text-xl font-semibold text-gray-800">Schedule Virtual Tour</h3>
              </div>
              <p className="text-gray-700">Connect with our advisors for a detailed virtual tour.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                <h3 className="text-xl font-semibold text-gray-800">Pay Token Amount</h3>
              </div>
              <p className="text-gray-700">Secure your property choice with an initial token payment.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                <h3 className="text-xl font-semibold text-gray-800">Submit KYC</h3>
              </div>
              <p className="text-gray-700">Share your Passport, PAN, OCI, and other required documents.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
                <h3 className="text-xl font-semibold text-gray-800">Review & Sign Agreement</h3>
              </div>
              <p className="text-gray-700">Complete the agreement process remotely with our guidance.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</div>
                <h3 className="text-xl font-semibold text-gray-800">Online Payment</h3>
              </div>
              <p className="text-gray-700">Secure online payment facility available for your convenience.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</div>
                <h3 className="text-xl font-semibold text-gray-800">Final Registration & Handover</h3>
              </div>
              <p className="text-gray-700">Get Sale Deed Registered (with or without visit) and complete the property handover process.</p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Our Services for NRIs
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <FileText className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">100% Legal Projects</h3>
              <p className="text-gray-700">All projects are NA/NOC/RERA certified for your security.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <User className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Investment Advisor</h3>
              <p className="text-gray-700">Dedicated support throughout your investment journey.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <BookOpen className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparent Documentation</h3>
              <p className="text-gray-700">Clear and straightforward documentation process.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <Globe className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Virtual Tour</h3>
              <p className="text-gray-700">Comprehensive virtual tours and site visit management.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <Building className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Post-sale Support</h3>
              <p className="text-gray-700">Ongoing assistance even after your purchase is complete.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <DollarSign className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Guidance</h3>
              <p className="text-gray-700">Expert advice on taxation and financial considerations.</p>
            </div>
          </div>
        </div>

        {/* Benefits for NRI Investors */}
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Benefits for Non-Resident Indian Investors
            </span>
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  India has recently altered their taxation policies in order to facilitate foreign direct investment (NRIs). They can easily invest their savings here without incurring excessive penalties and tax liabilities.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Provisions have been put in place under various routes so as to facilitate foreign investors coming into India.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Loans are offered to nonresident Indians against deposit schemes to construct homes in India.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Thanks to technology advancements, mode of transaction has also advanced through demat accounts and internet banking facilities.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial Guidelines */}
        <div id="FinancialGuidelines" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Financial Guidelines: Loan & Funding for NRIs
            </span>
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Funding the Purchase</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  Lenders in India will gladly fund your project provided that it meets their eligibility criteria and property papers are clear. Before moving ahead with any deal, it is always recommended to have all property papers checked by a lawyer to ensure everything is in order before finalizing it.
                </p>
                <p className="mb-4 text-gray-700">
                  According to RBI standards, only up to 80% of a property's appraisal can be funded through financial institutions; any remaining amount must come from personal resources of an NRI. Since Indian financial institutions offer loans only in rupees, repayment must also take place exclusively in rupees.
                </p>
                <p className="text-gray-700">
                  If you rent out the property, rent payments could help cover loan repayment costs as well. Cheques issued from family accounts could also be used as loan payments.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Power of Attorney (PoA) Explanation</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  When buying under-construction property, your developer may request that you grant them power of attorney (PoA). This is common and would make documentation work faster and simpler.
                </p>
                <p className="text-gray-700">
                  If and when it is time to sell your property, having a Power of Attorney who resides in India would be helpful in terms of completing formalities such as registration, possession transfer, agreement of sale execution etc.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Regulations on Sale of Property by NRIs</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  FEMA rules allow an NRI to sell any residential or commercial properties they've bought or inherited to anyone they want, although any agricultural properties, plantations properties or farm houses must first be offered up for sale to an Indian resident for purchase.
                </p>
                <p className="text-gray-700">
                  Note that non-resident Indians (NRIs) cannot remit proceeds of more than two properties back home.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Tax Implications</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  Property can be an excellent way to save taxes for both residents and non-residents alike, with NRIs receiving similar tax savings benefits as residents Indians.
                </p>
                <p className="text-gray-700">
                  An NRI is eligible for all tax benefits related to purchasing property that a resident Indian would. As such, one lakh rupees deduction can be claimed under 80C.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Testimonials from NRI Clients
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I invested from Dubai through video tours. DholeraTimes made it seamless!"
              </p>
              <footer className="font-semibold text-gray-800">— Harpreet Singh, UAE</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "From London to Dholera in 3 clicks. Thanks Simar & Team!"
              </p>
              <footer className="font-semibold text-gray-800">— Neeraj Yadav, UK</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I live in Dubai, and DholeraTimes helped me invest without even visiting India. Everything was smooth!"
              </p>
              <footer className="font-semibold text-gray-800">— Gurpreet Singh, UAE</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I invested from London and the whole process was seamless — thanks to Harjas Singh at DholeraTimes!"
              </p>
              <footer className="font-semibold text-gray-800">— Vikas Agarwal</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d] md:col-span-2">
              <p className="text-lg italic mb-4 text-gray-700">
                "Thanks to Simar Singh and the team, I bought a plot in Orchid Township while living in Canada."
              </p>
              <footer className="font-semibold text-gray-800">— Rajeev Gupta, Toronto</footer>
            </blockquote>
          </div>
        </div>

        {/* FAQs */}
        <div id="FAQs" className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              RBI & Legal Guidelines for NRIs
            </span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {activeAccordion === index ? 
                    <ChevronUp className="text-[#d8b66d]" size={20} /> : 
                    <ChevronDown className="text-[#d8b66d]" size={20} />
                  }
                </button>
                
                {activeAccordion === index && (
                  <div className="p-6 pt-0 bg-white text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="text-[#d8b66d] font-semibold hover:underline flex items-center justify-center mx-auto">
              View More FAQs
              <ChevronDown className="ml-1" size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}