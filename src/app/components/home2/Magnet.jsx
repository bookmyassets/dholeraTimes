import React from 'react'

export default function Magnet() {
  return (
    <>
      <div className='bg-[#151f28] flex items-center justify-center p-6 z-50'>
        <div className='w-full max-w-6xl'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
            <div>
              <label className='block text-xs font-medium uppercase tracking-wide mb-2 text-[#d3b36b]'>
                Investment Amount
              </label>
              <div className='relative'>
                <select 
                  name="Investment Amount"
                  className='w-full px-4 py-3 bg-transparent border-b-2 border-[#d3b36b]/30 text-sm outline-none transition-colors appearance-none cursor-pointer pr-10 text-[#d3b36b] focus:border-[#d3b36b]'
                >
                  <option value="">Select Amount</option>
                  <option value="10-25">₹10L - ₹25L</option>
                  <option value="25-50">₹25L - ₹50L</option>
                  <option value="50-100">₹50L - ₹1Cr</option>
                  <option value="100+">₹1Cr+</option>
                </select>
                <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 7L11 1" stroke="#d3b36b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className='block text-xs font-medium uppercase tracking-wide mb-2 text-[#d3b36b]'>
                Full Name
              </label>
              <input 
                type="text" 
                name="Full Name"
                placeholder="Enter your name"
                className='w-full px-4 py-3 bg-transparent border-b-2 border-[#d3b36b]/30 text-sm outline-none transition-colors text-[#d3b36b] focus:border-[#d3b36b] placeholder:text-[#d3b36b]/40'
              />
            </div>
            
            <div>
              <label className='block text-xs font-medium uppercase tracking-wide mb-2 text-[#d3b36b]'>
                Pincode
              </label>
              <input 
                type="text" 
                name="Pincode"
                placeholder="Enter pincode*"
                maxLength="6"
                className='w-full px-4 py-3 bg-transparent border-b-2 border-[#d3b36b]/30 text-sm outline-none transition-colors text-[#d3b36b] focus:border-[#d3b36b] placeholder:text-[#d3b36b]/40'
              />
            </div>
            
            <div>
              <label className='block text-xs font-medium uppercase tracking-wide mb-2 text-[#d3b36b]'>
                Phone Number
              </label>
              <input 
                type="text" 
                name="Phone Number*"
                placeholder="10 digit number*"
                maxLength="10"
                className='w-full px-4 py-3 bg-transparent border-b-2 border-[#d3b36b]/30 text-sm outline-none transition-colors text-[#d3b36b] focus:border-[#d3b36b] placeholder:text-[#d3b36b]/40'
              />
            </div>

            <div className='mt-8'>
            <button className='w-full md:w-auto px-12 py-2 rounded-lg bg-[#d3b36b] text-[#151f28] font-semibold uppercase tracking-wide text-sm transition-all hover:bg-[#c4a45c] hover:shadow-lg hover:shadow-[#d3b36b]/30'>
              Submit
            </button>
          </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}