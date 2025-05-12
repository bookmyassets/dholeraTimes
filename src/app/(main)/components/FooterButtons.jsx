import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PopupForm from "./FormThree";


export default function ButtonsSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [formType, setFormType] = useState(""); 
  
  const openContactForm = (title, btnName, type) => {
    setFormTitle(title);
    setButtonName(btnName);
    setFormType(type);
    setIsContactFormOpen(true);
  };
  
  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };
  

  const handleAfterSubmit = () => {
    console.log("Form submitted successfully, type:", formType);
    
    if (formType === "brochure") {
      try {
        console.log("Initiating brochure download");
        
       
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = 'https://shorturl.at/Dv00M'; 
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log("Download link clicked");
        }, 300);
      } catch (error) {
        console.error("Error downloading brochure:", error);

        window.open('https://shorturl.at/Dv00M', '_blank');
      }
    }

  };

  const buttons = [
    {id: 1, title: "Download Brochure"},
    {id: 2, title: "Schedule Free Site visit"} 
  ];

  return (
    <div className="buttons-container flex justify-center items-center pt-4 max-sm:max-w-2xl mx-auto">
      {buttons.map((button) => (
        <button 
          key={button.id}
          onClick={() => {
            if (button.id === 1) {
              openContactForm("Download Brochure", "Download Now", "brochure");
            } else if (button.id === 2) {
              openContactForm("Schedule Free Site Visit", "Submit", "schedule");
            }
          }}
          className="btn btn-primary mr-2 px-4 py-2 bg-[#be9233] hover:bg-[#dbaf51] text-white font-semibold rounded-xl transition duration-300"
        >
          {button.title}
        </button>
      ))}

      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <PopupForm
                title={formTitle} 
                buttonName={buttonName} 
                onClose={closeContactForm}
                onSuccess={handleAfterSubmit}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}