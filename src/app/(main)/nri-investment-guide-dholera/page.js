"use client";
import React from "react";
import { useState } from "react";
import {
  User,
  ChevronDown,
  ChevronUp,
  Globe,
  BookOpen,
  DollarSign,
  Building,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import PopupForm from "../components/PopupForm";
import dholeraSmartCity from "@/assets/Dholera-Smart-City.webp";
import priceBanner from "@/assets/price-cut-banner.webp";
import priceBannerMobile from "@/assets/Price-cut-mobile-banner.webp";
import projectedNRI from "@/assets/Projected-NRI.webp";

export default function NRIInvestmentGuide() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("WhyInvest");
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibleFAQs, setVisibleFAQs] = useState(6);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const handleViewMore = () => {
    // Increase visible FAQs, but don't expand all
    setVisibleFAQs(Math.min(visibleFAQs + 3, faqs.length));
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
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
      answer:
        "Under general permission available to them, these categories of people can buy real property in India: (i) Non-Resident Indian (NRI), (ii) Person of Indian Origin (PIO). The general permission covers only residential and commercial property purchases in India; agricultural land/plantation property/farmhouses cannot be included under its purview.",
    },
    {
      question:
        "Can NRI/PIO acquire agricultural land/plantation property/farm house in India?",
      answer:
        "No, NRIs and PIOs cannot acquire agricultural land, plantation property, or farm houses in India under the general permission.",
    },
    {
      question:
        "Are any documents required to be filed with the Reserve Bank after the purchase?",
      answer:
        "No, an NRI/PIO who purchased property through general permission does not need to submit any reports or files with the Reserve Bank.",
    },
    {
      question:
        "How many residential/commercial properties may NRI/PIO purchase under general permission?",
      answer:
        "Under general permission there are no limitations or restrictions placed upon how many properties an NRI or PIO may purchase.",
    },
    {
      question:
        "Can a foreign national of non-Indian origin resident outside India purchase immovable property in India?",
      answer:
        "No, a non-Indian national resident outside India cannot acquire immovable property unless such acquisition comes as part of an inheritance from someone residing within India. However, they can acquire or transfer immovable properties on lease agreements that last not exceeding five years.",
    },
    {
      question:
        "Can NRI/PIO repatriate the sale proceeds of immovable property?",
      answer:
        "Yes, in the event of sale of immovable property other than agricultural land/farm house/plantation property in India, the Authorised Dealer may allow repatriation of the sale proceeds outside India, provided certain conditions are satisfied. NRI/PIO are also allowed to repatriate an amount up to USD 1 million per financial year.",
    },
    {
      question:
        "Can a foreign national who is a person resident in India purchase immovable property in India?",
      answer:
        "Yes, foreign nationals residing in India under Section 2(v) of FEMA 1999 may purchase immovable property, however approval and compliance with requirements prescribed by other authorities such as State Governments would also need to be met - the burden to demonstrate residential status will ultimately lie with each individual if necessary; whereas any citizen from Pakistan, Bangladesh, Sri Lanka Afghanistan China Iran Nepal Bhutan would require prior approval of Reserve Bank prior to purchasing property in India.",
    },
    {
      question:
        "Can the branch / liaison office of a foreign company purchase immovable property in India?",
      answer:
        "Foreign companies which have established a Branch Office or other place of business in India in accordance with the Foreign Exchange Management (Establishment in India of Branch or Office or Other Place of Business) Regulations 2000 may acquire any immovable property necessary or incidental to the conduct of such activity in India. Payment should be made using foreign inward remittance through appropriate banking channels and within 90 days from the date of acquisition a Form IPI should be filed with the Reserve Bank. Such property can be mortgaged to an Authorised Dealer as security for borrowings and only repatriated upon closing down of business with prior approval from the Reserve Bank. Acquisition of immovable property by entities from Pakistan, Bangladesh, Sri Lanka, Afghanistan, China Iran Nepal or Bhutan who have established Branch Offices within India would also need prior approval of the Reserve Bank.",
    },
    {
      question:
        "Can a NRI/PIO acquire immovable property in India by way of gift? Can a foreign national acquire immovable property in India by way of gift?",
      answer:
        "(a) Yes, NRIs and PIOs can freely acquire immovable property by way of gift from either (i) a resident in India; or (ii) an NRI/PIO living abroad. However, these properties must only be commercial or residential properties and cannot include agricultural lands/plantation property/farm house in India that cannot be acquired via gift. (b) A foreign national of non-Indian origin resident outside India cannot acquire any immovable property in India by way of gift.",
    },
    {
      question: "Can a non-resident inherit immovable property in India?",
      answer:
        "Yes, anyone living outside India such as an NRI; PIO; and foreign national of non-Indian origin can inherit and hold immovable property located within India from someone who was resident there at one point in time.",
    },
    {
      question:
        "From whom can a non-resident person inherit immovable property?",
      answer:
        "An individual residing outside India (NRI, PIO or foreign national of non-Indian origin) can inherit immovable property from occupant (a) resident in India. However, any property inherited must have been acquired according to applicable foreign exchange regulations or FEMA regulations when acquired by its heir.",
    },
    {
      question:
        "Can an NRI/ PIO/foreign national sell his residential / commercial property?",
      answer:
        "(a) NRI can sell property in India to i) a person resident in India; or ii) an NRI; or iii) a PIO. (b) PIO can sell property in India to i) a person resident in India; or ii) an NRI; or iii) a PIO – with the prior approval of the Reserve Bank (c) Foreign national of non-Indian origin including a citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or Nepal or Bhutan can sell property in India with prior approval of the Reserve Bank to i) a person resident in India ii) an NRI iii) a PIO",
    },
    {
      question:
        "Can a non-resident gift his residential / commercial property?",
      answer:
        "Yes. (a) NRI / PIO may gift residential / commercial property to (i) person resident in India or (ii) an NRI or (iii) PIO. (b) A foreign national of non-Indian origin requires the prior approval of the Reserve Bank for gifting the residential / commercial property.",
    },
    {
      question:
        "Can an NRI / PIO / foreign national holding an agricultural land / a plantation property / a farm house in India, gift the same?",
      answer:
        "(a) NRI / PIO can gift an agricultural land / a plantation property / a farm house in India only to a person resident in India who is a citizen of India. (b) A foreign national of non-Indian origin would require the prior approval of the Reserve Bank to gift an agricultural land / a plantation property / a farm house in India.",
    },
    {
      question:
        "Can residential / commercial property be mortgaged by NRI/ PIO?",
      answer:
        "i) NRI / PIO can mortgage a residential / commercial property to: (a) an Authorised Dealer / the housing finance institution in India without the approval of Reserve Bank (b) a bank abroad, with the prior approval of the Reserve Bank. ii) A foreign national of non-Indian origin can mortgage a residential / commercial property only with prior approval of the Reserve Bank. iii) A foreign company which has established a Branch Office or other place of business in accordance with FERA/FEMA regulations has general permission to mortgage the property with an Authorised Dealer in India.",
    },
    {
      question:
        "How can an NRI / PIO make payment for purchase of residential / commercial property in India?",
      answer:
        "Payment can be made by NRI / PIO out of: (a) funds remitted to India through normal banking channels or (b) funds held in NRE / FCNR (B) / NRO account maintained in India. No payment can be made either by traveller's cheque or by foreign currency notes or by other mode except those specifically mentioned above.",
    },
    {
      question:
        "Is repatriation of application money for booking of flat / payment made to the builder by NRI/ PIO allowed when the flat or plot is not allotted or the booking / contract is cancelled?",
      answer:
        "The Authorised Dealers can allow NRIs / PIOs to credit refund of application/ earnest money/ purchase consideration made by the house building agencies/ seller on account of non-allotment of flat/ plot/ cancellation of bookings/ deals for purchase of residential, commercial property, together with interest, if any, net of income tax payable thereon, to NRE/FCNR account, provided, the original payment was made out of NRE/FCNR account of the account holder or remittance from outside India through normal banking channels and the Authorised Dealer is satisfied about the genuineness of the transaction.",
    },
    {
      question:
        "Can NRI / PIO avail of loan from an authorised dealer for acquiring flat / house in India for his own residential use against the security of funds held in his NRE Fixed Deposit account / FCNR (B) account? How the loan can be repaid?",
      answer:
        "Yes, such loans are permitted subject to the terms and conditions laid down in Schedules 1 and 2 to the Notification No. FEMA 5/2000-RB dated May 3, 2000 viz. Foreign Exchange Management (Deposit) Regulations, 2000, as amended from time to time. Banks cannot grant fresh loans or renew existing loans in excess of Rs. 100 lakhs against NRE and FCNR (B) deposits, either to the depositors or to third parties. The banks should also not undertake artificial slicing of the loan amount to circumvent the ceiling of Rs. 100 lakh. Such loans can be repaid in the following manner: (a) by way of inward remittance through normal banking channel or (b) by debit to the NRE / FCNR (B) / NRO account of the NRI/ PIO or (c) out of rental income from such property (d) by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.",
    },
    {
      question:
        "Can NRI / PIO, avail of housing loan in Rupees from an Authorised Dealer or a Housing Finance Institution in India approved by the National Housing Bank for purchase of residential accommodation or for the purpose of repairs / renovation / improvement of residential accommodation ? How can such loan be repaid?",
      answer:
        "Yes, NRI/PIO can avail of housing loan in Rupees from an Authorised Dealer or a Housing Finance Institution subject to certain terms and conditions laid down in Regulation 8 of Notification No. FEMA 4/2000-RB dated May 3, 2000 viz. Foreign Exchange Management (Borrowing and lending in rupees) Regulations, 2000, as amended from time to time. Authorised Dealers/ Housing Finance Institutions can also lend to the NRIs/ PIOs for the purpose of repairs/renovation/ improvement of residential accommodation owned by them in India.Such a loan can be repaid (a) by way of inward remittance through normal banking channel or (b) by debit to the NRE / FCNR (B) / NRO account of the NRI / PIO or (c) out of rental income from such property; or (d) by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.",
    },
    {
      question:
        "Can NRI/PIO avail of housing loan in Rupees from his employer in India?",
      answer:
        "Yes, subject to certain terms and conditions given in Regulation 8A of Notification No. FEMA 4/2000-RB dated May 3, 2000 and A.P. (DIR Series) Circular No.27 dated October 10, 2003, i.e., (i) The loan shall be granted only for personal purposes including purchase of housing property in India; (ii) The loan shall be granted in accordance with the lender's Staff Welfare Scheme/Staff Housing Loan Scheme and subject to other terms and conditions applicable to its staff resident in India; (iii) The lender shall ensure that the loan amount is not used for the purposes specified in sub-clauses (i) to (iv) of clause (1) and in clause (2) of Regulation 6 of Notification No.FEMA.4/2000-RB dated May 3, 2000. (iv) The lender shall credit the loan amount to the borrower's NRO account in India or shall ensure credit to such account by specific indication on the payment instrument; (v) The loan agreement shall specify that the repayment of loan shall be by way of remittance from outside India or by debit to NRE/NRO/FCNR Account of the borrower and the lender shall not accept repayment by any other means.",
    },
    {
      question:
        "Can NRI / PIO repatriate outside India the sale proceeds of immovable property held in India?",
      answer:
        "(a) In the event of sale of immovable property other than agricultural land / farm house / plantation property in India by a NRI / PIO, the Authorised Dealer may allow repatriation of the sale proceeds outside India, provided the following conditions are satisfied, namely: (i) the immovable property was acquired by the seller in accordance with the provisions of the foreign exchange law in force at the time of acquisition by him or the provisions of these Regulations; (ii) the amount to be repatriated does not exceed: · the amount paid for acquisition of the immovable property in foreign exchange received through normal banking channels, or · the amount paid out of funds held in Foreign Currency Non-Resident Account, or · the foreign currency equivalent (as on the date of payment) of the amount paid where such payment was made from the funds held in Non-Resident External account for acquisition of the property; and (iii) in the case of residential property, the repatriation of sale proceeds is restricted to not more than two such properties. For this purpose, repatriation outside India means the buying or drawing of foreign exchange from an authorised dealer in India and remitting it outside India through normal banking channels or crediting it to an account denominated in foreign currency or to an account in Indian currency maintained with an authorised dealer from which it can be converted in foreign currency. (b) in case the property is acquired out of Rupee resources and/or the loan is repaid by close relatives in India (as defined in Section 6 of the Companies Act, 1956), the amount can be credited to the NRO account of the NRI/PIO. The amount of capital gains, if any, arising out of sale of the property can also be credited to the NRO account. NRI/PIO are also allowed by the Authorised Dealers to repatriate an amount up to USD 1 million per financial year out of the balance in the NRO account / sale proceeds of assets by way of purchase / the assets in India acquired by him by way of inheritance / legacy. This is subject to production of documentary evidence in support of acquisition, inheritance or legacy of assets by the remitter, and a tax clearance / no objection certificate from the Income Tax Authority for the remittance. Remittances exceeding US $ 1,000,000 (US Dollar One million only) in any financial year requires prior permission of the Reserve Bank. (c) A person referred to in sub-section (5) of Section 6 of the Foreign Exchange Management Act 3[3][3], or his successor shall not, except with the prior permission of the Reserve Bank, repatriate outside India the sale proceeds of any immovable property referred to in that sub-section.",
    },
    {
      question:
        "Can an NRI/PIO repatriate the proceeds in case the sale proceeds were deposited in the NRO account?",
      answer:
        "Please refer to the answer at Q.22 above. NRI/PIO may repatriate up to USD one million per financial year (April-March) from their NRO account which would also include the sale proceeds of immovable property. There is no lock in period for sale of immovable property and repatriation of sale proceeds outside India.",
    },
    {
      question:
        "If a Rupee loan was taken by the NRI/ PIO from an Authorised Dealer or a Housing Finance Institution for purchase of residential property can the NRI / PIO repatriate the sale proceeds of such property?",
      answer:
        "Yes, Authorised Dealers have been authorised to allow repatriation of sale proceeds of residential accommodation purchased by NRIs/ PIOs out of funds raised by them by way of loans from the authorised dealers/ housing finance institutions to the extent such loan/s repaid by them are out of the foreign inward remittances received through normal banking channel or by debit to their NRE/FCNR accounts. The balance amount, if any, can be credited to their NRO account and the NRI/PIO may repatriate up to USD one million per financial year (April-March) subject to payment of applicable taxes from their NRO account balances which would also include the sale proceeds of the immovable property.",
    },
    {
      question:
        "If the immovable property was acquired by way of gift by the NRI/PIO, can he repatriate abroad the funds from sale of such property?",
      answer:
        "The sale proceeds of immovable property acquired by way of gift should be credited to NRO account only. From the balance in the NRO account, NRI/PIO may remit up to USD one million, per financial year, subject to the satisfaction of Authorised Dealer and payment of applicable taxes.",
    },
    {
      question:
        "If the immovable property was received as inheritance by the NRI/PIO can he repatriate the sale proceeds?",
      answer:
        "Yes, general permission is available to the NRIs/PIO to repatriate the sale proceeds of the immovable property inherited from a person resident in Indiasubject to thefollowing conditions: (i) The amount should not exceed USD one million, per financial year (ii) This is subject to production of documentary evidence in support of acquisition / inheritance of assets and an undertaking by the remitter and certificate by a Chartered Accountant in the formats prescribed by the Central Board of Direct Taxes vide their Circular No.4/2009 dated June 29, 2009 (iii) In cases of deed of settlement made by either of his parents or a close relative (as defined in section 6 of the Companies Act, 1956) and the settlement taking effect on the death of the settler (iv) the original deed of settlement and a tax clearance / No Objection Certificate from the Income-Tax Authority should be produced for the remittance (v) Where the remittance as above is made in more than one installment, the remittance of all such installments shall be made through the same Authorised Dealer (vi) In case of a foreign national, sale proceeds can be repatriated if the property is inherited from a person resident outside India with the prior approval of the Reserve Bank. The foreign national has to approach the Reserve Bank with documentary evidence in support of inheritance of the immovable property and the undertaking and the C.A. Certificate mentioned above. The general permission for repatriation of sale proceeds of immovable property is not available to a citizen of Pakistan, Bangladesh, Sri Lanka, China, Afghanistan and Iran and he has to seek specific approval of the Reserve Bank. As FEMA, 1999 specifically permits transactions only in Indian Rupees with citizens of Nepal and Bhutan. Therefore, the question of repatriation of the sale proceeds in foreign exchange to Nepal and Bhutan would not arise.",
    },
    {
      question:
        "Can Foreign Embassies / Diplomats / Consulates General purchase / sell immovable property in India?",
      answer:
        "In terms of Regulation 5A of the Foreign Exchange Management (Acquisition and Transfer of Immovable Property in India) Regulations 2000, Foreign Embassies/ Diplomats/ Consulates General, may purchase/ sell immovable property (other than agricultural land/ plantation property/ farm house) in India provided – (i) Clearance from the Government of India, Ministry of External Affairs has been obtained for such purchase/sale; and (ii) The consideration for acquisition of immovable property in India is paid out of funds remitted from abroad through the normal banking channels.",
    },
    {
      question:
        "Can NRI / PIO rent out the residential / commercial property purchased out of foreign exchange / rupee funds?",
      answer:
        "Yes, NRI/PIO can rent out the property without the approval of the Reserve Bank. The rent received can be credited to NRO / NRE account or remitted abroad. Powers have been delegated to the Authorised Dealers to allow repatriation of current income like rent, dividend, pension, interest, etc. of NRIs/PIO who do not maintain an NRO account in India based on an appropriate certification by a Chartered Accountant, certifying that the amount proposed to be remitted is eligible for remittance and that applicable taxes have been paid/provided for.",
    },
    {
      question:
        "Can a person who had bought immovable property, when he was a resident, continue to hold such property even after becoming an NRI/PIO? In which account can the sale proceeds of such immovable property be credited?",
      answer:
        "Yes, a person who had bought the residential / commercial property / agricultural land/ plantation property / farm house in India when he was a resident, continue to hold the immovable property without the approval of the Reserve Bank even after becoming an NRI/PIO. The sale proceeds may be credited to NRO account of the NRI /PIO.",
    },
    {
      question:
        "Can the sale proceeds of the immovable property referred to in Q.No. 29 be remitted abroad ?",
      answer:
        "Yes, From the balance in the NRO account, NRI/PIO may remit up to USD one million, per financial year, subject to the satisfaction of Authorised Dealer and payment of applicable taxes.",
    },
    {
      question:
        "Can foreign nationals of non-Indian origin resident in India or outside India who had earlier acquired immovable property under FERA with specific approval of the Reserve Bank continue to hold the same? Can they transfer such property?",
      answer:
        "Yes, they may continue to hold the immovable property under holding license obtained from the Reserve Bank. However, they can transfer the property only with the prior approval of the Reserve Bank.",
    },
    {
      question:
        "Is a resident in India governed by the provisions of the Foreign Exchange Management (Acquisition and transfer of immovable property in India) Regulations, 2000?",
      answer:
        "A person resident in India who is a citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or Nepal or Bhutan is governed by the provisions of Foreign Exchange Management (Acquisition and Transfer of Immovable Property in India) Regulations, 2000, as amended from time to time, i.e. she/he would require prior approval of the Reserve Bank for acquisition and transfer of immovable property in India even though she/he is resident in India. Such requests are considered by the Reserve Bank in consultation with the Government in India. The citizens of countries other than those listed above can be PIOs who are covered under the general permission (please refer to Q.No.1). The provisions relating to foreign national of non-Indian origin are covered in detail in Q Nos. 6 and 7. Note: The relevant regulations covering the transactions in immovable property have been notified vide RBI Notification No. FEMA 21/2000-RB dated May 3, 2000 and this basic notification has been subsequently amended by the notifications detailed below: i) Notification No.FEMA 64/2002-RB dated June 29, 2002; ii) Notification No.FEMA 65/2002-RB dated June 29, 2002; iii) Notification No.FEMA 93/2003-RB dated June 9, 2003; iv) Notification No. FEMA 146/2006-RB dated February 10, 2006 read with A.P.(DIR Series) Circular No. 5 dated 16.8.2006; and v) Notification No. FEMA 200/2009-RB dated October 5, 2009 All the above notifications and A.P. (DIR Series) Circulars are available on the RBI website: www.fema.rbi.org.in. The Master Circular on Acquisition and Transfer of Immovable Property in India by NRIs/PIOs/Foreign Nationals of Non-Indian Origin is also available on the website under the link 'www.rbi.org.in ® Sitemap ® Master Circulars'.",
    },
  ];

  // BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.dholeratimes.com/nri-investment-guide-dholera",
    },
    headline:
      "Our NRI Investment guide for Dholera Smart City give you a complete step by step path to buy plots in india",
    description:
      "Our NRI Investment Guide for Dholera Smart City gives you a complete step-by-step path to buy plots in India — legally, securely and entirely online. Whether you're in the USA, UK, UAE, or Canada, start your smart investment journey in Dholera Smart City, India's first greenfield smart city backed by massive government infrastructure projects.",
    image: "",
    author: {
      "@type": "Organization",
      name: "Dholera Times",
      url: "https://www.dholeratimes.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Dholera",
      logo: {
        "@type": "ImageObject",
        url: "",
      },
    },
    datePublished: "2025-05-12",
    dateModified: "2025-05-12",
  };

  // FAQPage Schema with all questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can purchase immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under general permission available to them, these categories of people can buy real property in India: (i) Non-Resident Indian (NRI). (ii) Person of Indian Origin (PIO). The general permission covers only residential and commercial property purchases in India; agricultural land/plantation property/farmhouses cannot be included under its purview.",
        },
      },
      {
        "@type": "Question",
        name: "Can NRI/PIO acquire agricultural land/plantation property/farm house in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No.",
        },
      },
      {
        "@type": "Question",
        name: "Are any documents required to be filed with the Reserve Bank after the purchase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, an NRI/PIO who purchased property through general permission does not need to submit any reports or files with the Reserve Bank.",
        },
      },
      {
        "@type": "Question",
        name: "How many residential/commercial properties may NRI/PIO purchase under general permission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under general permission there are no limitations or restrictions placed upon how many properties an NRI or PIO may purchase under its general permit.",
        },
      },
      {
        "@type": "Question",
        name: "Can an Indian national who does not belong to India become the second owner in immovable property purchased by an NRI/PIO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No.",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign national of non-Indian origin resident outside India purchase immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a non-Indian national resident outside India who wishes to acquire immovable property cannot do so unless such acquisition comes as part of an inheritance from someone residing within India; however they can acquire or transfer immovable properties on lease agreements that last not exceeding five years; in these instances there is no requirement for getting permission or reporting back to the Reserve Bank.",
        },
      },
      {
        "@type": "Question",
        name: "Can a foreign national who is a person resident in India purchase immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, foreign nationals residing in India under Section 2(v) of FEMA 1999 may purchase immovable property, however approval and compliance with requirements prescribed by other authorities such as State Governments would also need to be met - the burden to demonstrate residential status will ultimately lie with each individual if necessary; whereas any citizen from Pakistan, Bangladesh, Sri Lanka Afghanistan China Iran Nepal Bhutan would require prior approval of Reserve Bank prior to purchasing property in India.",
        },
      },
      {
        "@type": "Question",
        name: "Can the branch/liaison office of a foreign company purchase immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign companies which have established a Branch Office or other place of business in India in accordance with the Foreign Exchange Management (Establishment in India of Branch or Office or Other Place of Business) Regulations 2000 may acquire any immovable property necessary or incidental to the conduct of such activity in India. Payment should be made using foreign inward remittance through appropriate banking channels and within 90 days from the date of acquisition a Form IPI should be filed with the Reserve Bank. Such property can be mortgaged to an Authorised Dealer as security for borrowings and only repatriated upon closing down of business with prior approval from the Reserve Bank. Acquisition of immovable property by entities from Pakistan, Bangladesh, Sri Lanka, Afghanistan, China Iran Nepal or Bhutan who have established Branch Offices within India would also need prior approval of the Reserve Bank.",
        },
      },
      {
        "@type": "Question",
        name: "Can a NRI/PIO acquire immovable property in India by way of gift? Can a foreign national acquire immovable property in India by way of gift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(a) Yes, NRIs and PIOs can freely acquire immovable property by way of gift from either (i) a resident in India; or (ii) an NRI/PIO living abroad. However, these properties must only be commercial or residential properties and cannot include agricultural lands/plantation property/farm house in India that cannot be acquired via gift. (b) A foreign national of non-Indian origin resident outside India cannot acquire any immovable property in India by way of gift.",
        },
      },
      {
        "@type": "Question",
        name: "Can a non-resident inherit immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, anyone living outside India such as an NRI; PIO; and foreign national of non-Indian origin can inherit and hold immovable property located within India from someone who was resident there at one point in time.",
        },
      },
      {
        "@type": "Question",
        name: "From whom can a non-resident person inherit immovable property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An individual residing outside India (NRI, PIO or foreign national of non-Indian origin) can inherit immovable property from occupant (a) resident in India. However, any property inherited must have been acquired according to applicable foreign exchange regulations or FEMA regulations when acquired by its heir.",
        },
      },
      {
        "@type": "Question",
        name: "Can an NRI/PIO/foreign national sell his residential/commercial property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(a) NRI can sell property in India to i) a person resident in India; or ii) an NRI; or iii) a PIO. (b) PIO can sell property in India to i) a person resident in India; or ii) an NRI; or iii) a PIO – with the prior approval of the Reserve Bank. (c) Foreign national of non-Indian origin including a citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or Nepal or Bhutan can sell property in India with prior approval of the Reserve Bank to i) a person resident in India ii) an NRI iii) a PIO",
        },
      },
      {
        "@type": "Question",
        name: "Can a non-resident gift his residential/commercial property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. (a) NRI / PIO may gift residential / commercial property to (i) person resident in India or (ii) an NRI or (iii) PIO. (b) A foreign national of non-Indian origin requires the prior approval of the Reserve Bank for gifting the residential / commercial property.",
        },
      },
      {
        "@type": "Question",
        name: "Can an NRI/PIO/foreign national holding an agricultural land/a plantation property/a farm house in India, gift the same?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(a) NRI / PIO can gift an agricultural land / a plantation property / a farm house in India only to a person resident in India who is a citizen of India. (b) A foreign national of non-Indian origin would require the prior approval of the Reserve Bank to gift an agricultural land / a plantation property / a farm house in India.",
        },
      },
      {
        "@type": "Question",
        name: "Can residential/commercial property be mortgaged by NRI/PIO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(i) NRI / PIO can mortgage a residential / commercial property to: (a) an Authorised Dealer / the housing finance institution in India without the approval of Reserve Bank (b) a bank abroad, with the prior approval of the Reserve Bank. (ii) A foreign national of non-Indian origin can mortgage a residential / commercial property only with prior approval of the Reserve Bank. (iii) A foreign company which has established a Branch Office or other place of business in accordance with FERA/FEMA regulations has general permission to mortgage the property with an Authorised Dealer in India.",
        },
      },
      {
        "@type": "Question",
        name: "How can an NRI/PIO make payment for purchase of residential/commercial property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment can be made by NRI / PIO out of: (a) funds remitted to India through normal banking channels or (b) funds held in NRE / FCNR (B) / NRO account maintained in India. No payment can be made either by traveller's cheque or by foreign currency notes or by other mode except those specifically mentioned above.",
        },
      },
      {
        "@type": "Question",
        name: "Is repatriation of application money for booking of flat/payment made to the builder by NRI/PIO allowed when the flat or plot is not allotted or the booking/contract is cancelled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Authorised Dealers can allow NRIs / PIOs to credit refund of application/ earnest money/ purchase consideration made by the house building agencies/ seller on account of non-allotment of flat/ plot/ cancellation of bookings/ deals for purchase of residential, commercial property, together with interest, if any, net of income tax payable thereon, to NRE/FCNR account, provided, the original payment was made out of NRE/FCNR account of the account holder or remittance from outside India through normal banking channels and the Authorised Dealer is satisfied about the genuineness of the transaction.",
        },
      },
      {
        "@type": "Question",
        name: "Can NRI/PIO avail of loan from an authorised dealer for acquiring flat/house in India for his own residential use against the security of funds held in his NRE Fixed Deposit account/FCNR (B) account? How the loan can be repaid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, such loans are permitted subject to the terms and conditions laid down in Schedules 1 and 2 to the Notification No. FEMA 5/2000-RB dated May 3, 2000 viz. Foreign Exchange Management (Deposit) Regulations, 2000, as amended from time to time. Banks cannot grant fresh loans or renew existing loans in excess of Rs. 100 lakhs against NRE and FCNR (B) deposits, either to the depositors or to third parties. The banks should also not undertake artificial slicing of the loan amount to circumvent the ceiling of Rs. 100 lakh. Such loans can be repaid in the following manner: (a) by way of inward remittance through normal banking channel or (b) by debit to the NRE / FCNR (B) / NRO account of the NRI/ PIO or (c) out of rental income from such property (d) by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.",
        },
      },
      {
        "@type": "Question",
        name: "Can NRI/PIO, avail of housing loan in Rupees from an Authorised Dealer or a Housing Finance Institution in India approved by the National Housing Bank for purchase of residential accommodation or for the purpose of repairs/renovation/improvement of residential accommodation? How can such loan be repaid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, NRI/PIO can avail of housing loan in Rupees from an Authorised Dealer or a Housing Finance Institution subject to certain terms and conditions laid down in Regulation 8 of Notification No. FEMA 4/2000-RB dated May 3, 2000 viz. Foreign Exchange Management (Borrowing and lending in rupees) Regulations, 2000, as amended from time to time. Authorised Dealers/ Housing Finance Institutions can also lend to the NRIs/ PIOs for the purpose of repairs/renovation/ improvement of residential accommodation owned by them in India. Such a loan can be repaid (a) by way of inward remittance through normal banking channel or (b) by debit to the NRE / FCNR (B) / NRO account of the NRI / PIO or (c) out of rental income from such property; or (d) by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.",
        },
      },
      {
        "@type": "Question",
        name: "Can NRI/PIO avail of housing loan in Rupees from his employer in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, subject to certain terms and conditions given in Regulation 8A of Notification No. FEMA 4/2000-RB dated May 3, 2000 and A.P. (DIR Series) Circular No.27 dated October 10, 2003, i.e., (i) The loan shall be granted only for personal purposes including purchase of housing property in India; (ii) The loan shall be granted in accordance with the lender's Staff Welfare Scheme/Staff Housing Loan Scheme and subject to other terms and conditions applicable to its staff resident in India; (iii) The lender shall ensure that the loan amount is not used for the purposes specified in sub-clauses (i) to (iv) of clause (1) and in clause (2) of Regulation 6 of Notification No.FEMA.4/2000-RB dated May 3, 2000. (iv) The lender shall credit the loan amount to the borrower's NRO account in India or shall ensure credit to such account by specific indication on the payment instrument; (v) The loan agreement shall specify that the repayment of loan shall be by way of remittance from outside India or by debit to NRE/NRO/FCNR Account of the borrower and the lender shall not accept repayment by any other means.",
        },
      },

      {
        "@type": "Question",
        name: "Can an NRI/PIO repatriate the proceeds in case the sale proceeds were deposited in the NRO account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NRI/PIO may repatriate up to USD one million per financial year (April-March) from their NRO account which would also include the sale proceeds of immovable property. There is no lock in period for sale of immovable property and repatriation of sale proceeds outside India.",
        },
      },
      {
        "@type": "Question",
        name: "If a Rupee loan was taken by the NRI/PIO from an Authorised Dealer or a Housing Finance Institution for purchase of residential property can the NRI/PIO repatriate the sale proceeds of such property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Authorised Dealers have been authorised to allow repatriation of sale proceeds of residential accommodation purchased by NRIs/ PIOs out of funds raised by them by way of loans from the authorised dealers/ housing finance institutions to the extent such loan/s repaid by them are out of the foreign inward remittances received through normal banking channel or by debit to their NRE/FCNR accounts. The balance amount, if any, can be credited to their NRO account and the NRI/PIO may repatriate up to USD one million per financial year (April-March) subject to payment of applicable taxes from their NRO account balances which would also include the sale proceeds of the immovable property.",
        },
      },
      {
        "@type": "Question",
        name: "If the immovable property was acquired by way of gift by the NRI/PIO, can he repatriate abroad the funds from sale of such property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The sale proceeds of immovable property acquired by way of gift should be credited to NRO account only. From the balance in the NRO account, NRI/PIO may remit up to USD one million, per financial year, subject to the satisfaction of Authorised Dealer and payment of applicable taxes.",
        },
      },
      {
        "@type": "Question",
        name: "If the immovable property was received as inheritance by the NRI/PIO can he repatriate the sale proceeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, general permission is available to the NRIs/PIO to repatriate the sale proceeds of the immovable property inherited from a person resident in India subject to the following conditions: (i) The amount should not exceed USD one million, per financial year (ii) This is subject to production of documentary evidence in support of acquisition / inheritance of assets and an undertaking by the remitter and certificate by a Chartered Accountant in the formats prescribed by the Central Board of Direct Taxes vide their Circular No.4/2009 dated June 29, 2009 (iii) In cases of deed of settlement made by either of his parents or a close relative (as defined in section 6 of the Companies Act, 1956) and the settlement taking effect on the death of the settler (iv) the original deed of settlement and a tax clearance / No Objection Certificate from the Income-Tax Authority should be produced for the remittance (v) Where the remittance as above is made in more than one installment, the remittance of all such installments shall be made through the same Authorised Dealer (vi) In case of a foreign national, sale proceeds can be repatriated if the property is inherited from a person resident outside India with the prior approval of the Reserve Bank. The foreign national has to approach the Reserve Bank with documentary evidence in support of inheritance of the immovable property and the undertaking and the C.A. Certificate mentioned above. The general permission for repatriation of sale proceeds of immovable property is not available to a citizen of Pakistan, Bangladesh, Sri Lanka, China, Afghanistan and Iran and he has to seek specific approval of the Reserve Bank. As FEMA, 1999 specifically permits transactions only in Indian Rupees with citizens of Nepal and Bhutan. Therefore, the question of repatriation of the sale proceeds in foreign exchange to Nepal and Bhutan would not arise.",
        },
      },
      {
        "@type": "Question",
        name: "Can Foreign Embassies/Diplomats/Consulates General purchase/sell immovable property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In terms of Regulation 5A of the Foreign Exchange Management (Acquisition and Transfer of Immovable Property in India) Regulations 2000, Foreign Embassies/ Diplomats/ Consulates General, may purchase/ sell immovable property (other than agricultural land/ plantation property/ farm house) in India provided – (i) Clearance from the Government of India, Ministry of External Affairs has been obtained for such purchase/sale; and (ii) The consideration for acquisition of immovable property in India is paid out of funds remitted from abroad through the normal banking channels.",
        },
      },
      {
        "@type": "Question",
        name: "Can NRI/PIO rent out the residential/commercial property purchased out of foreign exchange/rupee funds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, NRI/PIO can rent out the property without the approval of the Reserve Bank. The rent received can be credited to NRO / NRE account or remitted abroad. Powers have been delegated to the Authorised Dealers to allow repatriation of current income like rent, dividend, pension, interest, etc. of NRIs/PIO who do not maintain an NRO account in India based on an appropriate certification by a Chartered Accountant, certifying that the amount proposed to be remitted is eligible for remittance and that applicable taxes have been paid/provided for.",
        },
      },
      {
        "@type": "Question",
        name: "Can a person who had bought immovable property, when he was a resident, continue to hold such property even after becoming an NRI/PIO? In which account can the sale proceeds of such immovable property be credited?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a person who had bought the residential / commercial property / agricultural land/ plantation property / farm house in India when he was a resident, continue to hold the immovable property without the approval of the Reserve Bank even after becoming an NRI/PIO. The sale proceeds may be credited to NRO account of the NRI /PIO.",
        },
      },
      {
        "@type": "Question",
        name: "Can the sale proceeds of the immovable property referred to in Q.No. 29 be remitted abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, From the balance in the NRO account, NRI/PIO may remit up to USD one million, per financial year, subject to the satisfaction of Authorised Dealer and payment of applicable taxes.",
        },
      },
      {
        "@type": "Question",
        name: "Can foreign nationals of non-Indian origin resident in India or outside India who had earlier acquired immovable property under FERA with specific approval of the Reserve Bank continue to hold the same? Can they transfer such property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they may continue to hold the immovable property under holding license obtained from the Reserve Bank. However, they can transfer the property only with the prior approval of the Reserve Bank.",
        },
      },
      {
        "@type": "Question",
        name: "Is a resident in India governed by the provisions of the Foreign Exchange Management (Acquisition and transfer of immovable property in India) Regulations, 2000?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A person resident in India who is a citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or Nepal or Bhutan is governed by the provisions of Foreign Exchange Management (Acquisition and Transfer of Immovable Property in India) Regulations, 2000, as amended from time to time, i.e. she/he would require prior approval of the Reserve Bank for acquisition and transfer of immovable property in India even though she/he is resident in India. Such requests are considered by the Reserve Bank in consultation with the Government in India. The citizens of countries other than those listed above can be PIOs who are covered under the general permission. The provisions relating to foreign national of non-Indian origin are covered in detail in Q Nos. 6 and 7.",
        },
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dholera Times",
    image: "",
    "@id": "",
    url: "https://www.dholeratimes.com/",
    telephone: "+91 99589 93549",
    priceRange: "10 Lac +",
    address: {
      "@type": "PostalAddress",
      streetAddress: "620,JMD Megapolis, sector-48, Sohna Road",
      addressLocality: "Gurugram",
      postalCode: "1220018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4195542,
      longitude: 77.0386216,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:30",
    },
    sameAs: [
      "https://www.facebook.com/people/Dholera-Times/61573763438050/",
      "https://x.com/dholeratimes",
      "https://www.instagram.com/dholeratimes/",
      "https://www.youtube.com/@dholeratimes",
      "https://www.linkedin.com/company/dholera-times",
      "https://www.dholeratimes.com/",
    ],
  };

  const articleNRI = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.dholeratimes.com/nri-investment-guide-dholera",
    },
    headline: "Complete Guide to NRI Investment in Dholera Smart City",
    description:
      "NRI investment in Dholera has emerged as one of the most promising real estate opportunities in India. With AUDA-approved residential plots, simplified buying processes, and strong resale potential, Dholera Smart City offers unmatched value for NRIs looking to invest in a futuristic smart city.Our NRI Investment Guide for Dholera Smart City gives you a complete step-by-step path to buy plots in India — legally, securely and entirely online. Whether you are in the USA, UK, UAE, or Canada, start your smart investment journey in Dholera Smart City, India's first greenfield smart city backed by massive government infrastructure projects.",
    image: [
      "https://www.dholeratimes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDholera-Smart-City.a696428d.webp&w=640&q=75",
      "https://www.dholeratimes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProjected-NRI.1b752d49.webp&w=640&q=75",
    ],
    author: {
      "@type": "Organization",
      name: "Dholera times team",
      url: "https://www.dholeratimes.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Dholera times",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dholeratimes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdt.7009f759.webp&w=128&q=75",
      },
    },
    datePublished: "2025-06-02",
    dateModified: "2025-06-04",
  };

  return (
    <>
      {/* Hero Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleNRI) }}
      />
      <title>NRI Investment in Dholera | AUDA Approved Residential Plots</title>
      <meta
        name="description"
        content="Looking for secure NRI investment in Dholera? Explore AUDA-approved plots with high ROI, legal support & resale assistance. Trusted by 500+ NRIs."
      />
      <meta
        name="keywords"
        content="NRI property investment in Dholera, Buy plots in Dholera for NRIs, Dholera Smart City NRI guide, NRI investment in Dholera, NRI investment Guide, Buy Plots in Dholera Smart city, Real Estate Investment for NRI, Real estate investment in India "
      />
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/nri-investment-guide-dholera"
      />

      <div className="relative bg-[#151f28] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Gateway to Property Investment in India's 1st Greenfield Smart
            City!
          </h2>
          <h2 className="text-xl md:text-3xl text-[#d3b469] mb-8">
            Invest in India's No.1 Smart City from Anywhere in the World
          </h2>
          <p className="text-lg mb-8">
            Trusted by 500+ NRIs from USA, UAE, UK & Canada. 100% Legal,
            AUDA-Approved Plots with Virtual Support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={openContactForm}
              className="bg-[#d3b469] hover:bg-[#c0a355] text-[#151f28] font-bold py-3 px-6 rounded-lg transition-all"
            >
              Get Free Consultation
            </button>
            <Link
              href="/projects"
              className="border-2 border-[#d3b469] text-[#d3b469] hover:bg-[#d3b469] text-center hover:text-[#151f28] font-bold py-3 px-6 rounded-lg transition-all"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4 max-sm:hidden">
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
              className={buttonStyle("WhyChoose")}
              onClick={() => handleScroll("WhyChoose")}
              aria-label="Why Choose"
            >
              Why Choose Us
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
              RBI Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="text-black text-center text-3xl max-sm:text-xl font-semibold mb-4">
            Complete Guide to NRI Investment in Dholera Smart City
          </h1>
          <p className="text-left text-lg md:text-xl font-medium text-gray-700">
            <strong>NRI investment in Dholera</strong> has emerged as one of the
            most promising <strong>real estate opportunities</strong> in India.
            With AUDA-approved{" "}
            <strong>residential plots, simplified buying processes</strong>, and{" "}
            <strong>
              {" "}
              <a href="/contact/resale-support" className="text-blue-500">
                {" "}
                strong resale potential
              </a>
              ,
            </strong>
            <strong>Dholera Smart City</strong> offers unmatched value for NRIs
            looking to invest in a futuristic smart city.
          </p>
          <br />
          <p className="text-left text-lg md:text-xl font-medium text-gray-700">
            Looking to invest in India from abroad? Our{" "}
            <strong>NRI Investment Guide for Dholera Smart City</strong> gives
            you a complete step-by-step path to{" "}
            <strong>buy plots in India</strong> — legally, securely and entirely
            online. Whether you're in the USA, UK, UAE, or Canada, start your
            smart investment journey in <strong>Dholera Smart City</strong>,
            India's first greenfield smart city backed by massive government
            infrastructure projects.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-4 leading-relaxed bg-gray-50">
        {/* Why Invest Section */}
        <div id="WhyInvest" className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why NRIs Should Invest In India, Especially In Dholera Smart City
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                The real estate market in India is now a top investment option
                for Indians who are not residents (NRIs) with the highest
                returns, stability in the economy and a long-term potential for
                growth. In the midst of emerging intelligent cities Dholera
                Smart City stands out as a futuristic urban center that offers
                top-of-the-line infrastructure, strategically connected, and a
                government-backed investment environment.
              </p>

              <blockquote className="border-l-4 border-[#d8b66d] pl-4 italic font-semibold text-xl mb-8 text-[#d8b66d]">
                "Dholera is not just a city, it's the future of smart living in
                India."
              </blockquote>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Why NRIs Should Invest in India
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">
                      Rapid Economic Growth
                    </strong>{" "}
                    — India's economy is among of the fastest growing worldwide
                    which makes real estate an excellent investment choice.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">
                      Policy Reforms and Government Reforms
                    </strong>{" "}
                    — Initiatives like RERA (Real Estate Regulatory Authority),
                    GST benefits, and the relaxation of FDI rules have improved
                    transparency and security for the property market.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">
                      High Return on Investment and Appreciation
                    </strong>{" "}
                    — Real estate in India has delivered consistently higher
                    yields than the developed markets, with a particular focus
                    on the growth corridors such as Dholera Smart City.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    <strong className="text-gray-800">
                      Financial and emotional security
                    </strong>{" "}
                    — A property in India provides a solid financial back-up
                    while also keeping NRIs connected to their home country.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={dholeraSmartCity}
                  alt="Dholera Smart City – India’s emerging global investment hub"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Dholera Section */}
        <div id="WhyDholera" className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why Dholera is a Smart Choice for NRIs
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Strategic Location
              </h3>
              <p className="text-gray-700">
                Only 70 km away from Ahmedabad and connected by metro rail,
                expressways, and the soon-to-be Dholera International Airport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                World-Class Infrastructure
              </h3>
              <p className="text-gray-700">
                Includes six-lane highways and underground utility, 24-hour
                power and water supply. It also includes ICT enabled government
                and intelligent mobility solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Global Business Hub
              </h3>
              <p className="text-gray-700">
                Industries such as electronics, aerospace, defense, IT, and
                renewable power sectors are being set up in Dholera creating
                jobs and business growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#d8b66d]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Sustainable Smart Living
              </h3>
              <p className="text-gray-700">
                Eco-friendly development, green energy solutions, and
                top-quality urban development make Dholera an ideal location for
                commercial and residential investments.
              </p>
            </div>
          </div>

          <p className="text-[#d8b66d] text-center font-semibold text-lg">
            Dholera Smart City is planned within the Delhi-Mumbai Industrial
            Corridor (DMIC), and is the largest planned smart city covering an
            area of 920 square km.
          </p>
        </div>

        {/* Why Choose Dholera Times */}
        <div id="WhyChoose" className="container mx-auto px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center relative">
              <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
                Why Choose{" "}
                <span className="text-[#d8b66d]"> Dholera Times</span> as Your
                Investment Partner?
              </span>
            </h3>

            <p className="text-gray-700 mb-6">
              NRIs require a reliable, professional, transparent, and
              knowledgeable real estate agent when they invest in India. Dholera
              Times is one of the most reliable brands within Dholera Smart
              City, Ahmedabad, Gujarat, offering:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">
                    100% Legally Clear Properties with NA/NOC approval
                  </strong>
                  , Unit Plan clearance from the relevant Government
                  Authorities, Clear Title ownership, which guarantees an
                  investment that is completely risk-free.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">
                    Large Land Parcels Available
                  </strong>
                  : We provide NA/NOC certified Title-Clear properties in which
                  all revenue issues are checked and resolved prior to the sale,
                  giving you complete security.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">
                    Large and Medium-Ticket size
                  </strong>{" "}
                  investors from United Kingdom (England), Italy, Spain
                  (Barcelona), USA (New Jersey), Canada, Australia, UAE (Dubai),
                  Singapore, and Hong Kong have already invested with us.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">
                    Unique Investment Opportunity
                  </strong>{" "}
                  in residential lands that have the potential to appreciate
                  within and in the vicinity of Dholera SIR (Special Investment
                  Region).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  <strong className="text-gray-800">
                    Hassle-free purchasing process
                  </strong>{" "}
                  for NRIs such as visiting sites, virtual tours of properties
                  as well as support for documentation and financial advice
                  services.
                </span>
              </li>
            </ul>

            <p className="italic text-[#d8b66d] font-semibold text-lg">
              Dholera Smart City is an opportunity to invest in the future for
              NRIs seeking high returns, strategic growth, and an assured
              future. Working with Dholera Times guarantees that your investment
              is secure with a seasoned, knowledgeable, and transparent team.
            </p>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div id="InvestmentGuide" className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Step-by-Step Guide for NRIs to Buy Plots
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Shortlist Projects
                </h3>
              </div>
              <p className="text-gray-700">
                Browse through our available projects like Orchid, Paradise,
                etc.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Schedule Virtual Tour
                </h3>
              </div>
              <p className="text-gray-700">
                Connect with our advisors for a detailed virtual tour.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pay Token Amount
                </h3>
              </div>
              <p className="text-gray-700">
                Secure your property choice with an initial token payment.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Submit KYC
                </h3>
              </div>
              <p className="text-gray-700">
                Share your Passport, PAN, OCI, and other required documents.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Review & Sign Agreement
                </h3>
              </div>
              <p className="text-gray-700">
                Complete the agreement process remotely with our guidance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Online Payment
                </h3>
              </div>
              <p className="text-gray-700">
                Secure online payment facility available for your convenience.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm md:col-span-2 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#d8b66d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Final Registration & Handover
                </h3>
              </div>
              <p className="text-gray-700">
                Get Sale Deed Registered (with or without visit) and complete
                the property handover process.
              </p>
            </div>
          </div>
        </div>

        <section className="relative mb-8">
          {/* Desktop Image */}
          <div className="max-sm:hidden relative">
            <Image
              src={priceBanner}
              alt="Investment Opportunity"
              className="w-full"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Button positioned on desktop image */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button onClick={openForm} className="bg-[#d8b66d] hover:bg-[#c9a85d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md">
                Talk To An Expert
              </button>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative">
            <Image
              src={priceBanner}
              alt="Investment Opportunity Mobile"
              className="w-full"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Button positioned on mobile image (centered) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button onClick={openForm} className="bg-[#d8b66d] hover:bg-[#c9a85d] text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md text-sm">
                Talk To An Expert
              </button>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <div className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Our Services for NRIs
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <FileText className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                100% Legal Projects
              </h3>
              <p className="text-gray-700">
                All projects are NA/NOC/RERA certified for your security.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <User className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Personal Investment Advisor
              </h3>
              <p className="text-gray-700">
                Dedicated support throughout your investment journey.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <BookOpen className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Transparent Documentation
              </h3>
              <p className="text-gray-700">
                Clear and straightforward documentation process.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <Globe className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Virtual Tour
              </h3>
              <p className="text-gray-700">
                Comprehensive virtual tours and site visit management.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <Building className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Post-sale Support
              </h3>
              <p className="text-gray-700">
                Ongoing assistance even after your purchase is complete.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-[#d8b66d]">
              <DollarSign className="text-[#d8b66d] mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Financial Guidance
              </h3>
              <p className="text-gray-700">
                Expert advice on taxation and financial considerations.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits for NRI Investors */}
        <div className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Benefits for Non-Resident Indian Investors
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Image div - will appear first on mobile, right side on desktop */}
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={projectedNRI}
                  alt="Projected return on investment for NRI real estate in Dholera"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text content - will appear second on mobile, left side on desktop */}
            <div className="bg-white p-8 rounded-lg shadow-sm md:w-1/2 order-2 md:order-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    India has recently altered their taxation policies in order
                    to facilitate foreign direct investment (NRIs). They can
                    easily invest their savings here without incurring excessive
                    penalties and tax liabilities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Provisions have been put in place under various routes so as
                    to facilitate foreign investors coming into India.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Loans are offered to nonresident Indians against deposit
                    schemes to construct homes in India.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Thanks to technology advancements, mode of transaction has
                    also advanced through demat accounts and internet banking
                    facilities.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Guidelines */}
        <div id="FinancialGuidelines" className="container mx-auto px-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Financial Guidelines: Loan & Funding for NRIs
            </span>
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Funding the Purchase
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  Lenders in India will gladly fund your project provided that
                  it meets their eligibility criteria and property papers are
                  clear. Before moving ahead with any deal, it is always
                  recommended to have all property papers checked by a lawyer to
                  ensure everything is in order before finalizing it.
                </p>
                <p className="mb-4 text-gray-700">
                  According to RBI standards, only up to 80% of a property's
                  appraisal can be funded through financial institutions; any
                  remaining amount must come from personal resources of an NRI.
                  Since Indian financial institutions offer loans only in
                  rupees, repayment must also take place exclusively in rupees.
                </p>
                <p className="text-gray-700">
                  If you rent out the property, rent payments could help cover
                  loan repayment costs as well. Cheques issued from family
                  accounts could also be used as loan payments.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Power of Attorney (PoA) Explanation
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  When buying under-construction property, your developer may
                  request that you grant them power of attorney (PoA). This is
                  common and would make documentation work faster and simpler.
                </p>
                <p className="text-gray-700">
                  If and when it is time to sell your property, having a Power
                  of Attorney who resides in India would be helpful in terms of
                  completing formalities such as registration, possession
                  transfer, agreement of sale execution etc.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Regulations on Sale of Property by NRIs
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  FEMA rules allow an NRI to sell any residential or commercial
                  properties they've bought or inherited to anyone they want,
                  although any agricultural properties, plantations properties
                  or farm houses must first be offered up for sale to an Indian
                  resident for purchase.
                </p>
                <p className="text-gray-700">
                  Note that non-resident Indians (NRIs) cannot remit proceeds of
                  more than two properties back home.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Tax Implications
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                  Property can be an excellent way to save taxes for both
                  residents and non-residents alike, with NRIs receiving similar
                  tax savings benefits as residents Indians.
                </p>
                <p className="text-gray-700">
                  An NRI is eligible for all tax benefits related to purchasing
                  property that a resident Indian would. As such, one lakh
                  rupees deduction can be claimed under 80C.
                </p>
                <ul className="list-disc ml-5 mt-2 font-semibold">
                  <li>Tax Benefits</li>
                  <li>Growing Economy</li>
                  <li>Favorable Market Conditions</li>
                  <li>High Rental Yields</li>
                  <li>Long-Term Appreciation</li>
                  <li>Secure Asset</li>
                  <li>Diversification</li>
                  <li>Investment Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Testimonials from NRI Clients
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I invested from Dubai through video tours. DholeraTimes made it
                seamless!"
              </p>
              <footer className="font-semibold text-gray-800">
                — Harpreet Singh, UAE
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "From London to Dholera in 3 clicks. Thanks Simar & Team!"
              </p>
              <footer className="font-semibold text-gray-800">
                — Neeraj Yadav, UK
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I live in Dubai, and DholeraTimes helped me invest without even
                visiting India. Everything was smooth!"
              </p>
              <footer className="font-semibold text-gray-800">
                — Gurpreet Singh, UAE
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d]">
              <p className="text-lg italic mb-4 text-gray-700">
                "I invested from London and the whole process was seamless —
                thanks to Harjas Singh at DholeraTimes!"
              </p>
              <footer className="font-semibold text-gray-800">
                — Vikas Agarwal
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d8b66d] md:col-span-2">
              <p className="text-lg italic mb-4 text-gray-700">
                "Thanks to Simar Singh and the team, I bought a plot in Orchid
                Township while living in Canada."
              </p>
              <footer className="font-semibold text-gray-800">
                — Rajeev Gupta, Toronto
              </footer>
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
            {faqs.slice(0, visibleFAQs).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="text-[#d8b66d]" size={40} />
                  ) : (
                    <ChevronDown className="text-[#d8b66d]" size={40} />
                  )}
                </button>

                {activeAccordion === index && (
                  <div className="p-6 pt-0 bg-white text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {visibleFAQs < faqs.length && (
              <div className="text-center mt-4">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-2 bg-[#d8b66d] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <AnimatePresence className="p-3">
        {isContactFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <PopupForm
              title="Book A Free Consultation Today"
              headline="Book  your free consultation with our Dholera expert—no obligations, just guidance. Fields marked with * are mandatory."
              buttonName="Get A Call Back"
              trustBadge="500+ NRI Clients Served & AUDA-Approved Projects"
              X
              onClose={closeContactForm}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence className="p-3">
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <PopupForm
              title="Book A Free Consultation Today"
              headline="Book  your free consultation with our Dholera expert—no obligations, just guidance. Fields marked with * are mandatory."
              buttonName="Get A Call Back"
              trustBadge="500+ NRI Clients Served & AUDA-Approved Projects"
              X
              onClose={closeForm}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
