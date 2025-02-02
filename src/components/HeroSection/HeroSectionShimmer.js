import React from 'react'
import { useState } from 'react';

const HeroSectionShimmer = () => {
    const [isLoading, setIsLoading] = useState(true);
    if(isLoading){
        <HeroSectionShimmer/>
    }
  return (
    <div className="max-w-[1600px] mx-auto gap-4 bg-gray-400">
    <div className="hero-section w-full flex flex-col j text-center  p-4 min-h-[60vh]">
      
      <div className=" rounded-xl w-full md:w-[700px] mx-auto flex flex-col md:flex-row p-2">
        <form
          
          className="border flex items-center  rounded-md  flex-grow"
        >
          <input
            className="flex-grow  p-2"
            type="text"
          
          
           
          />
          <button type="submit" className="p-2">
           
          </button>
        </form>
        <button
         
          className="mt-4 md:mt-0 md:ml-4 rounded-lg h-12 w-full md:w-28  "
        >
          Find
        </button>
      </div>
    </div>
  </div>
  )
}

export default HeroSectionShimmer