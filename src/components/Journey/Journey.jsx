import React from 'react';
import './journey.css';
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank, SiIbm } from "react-icons/si";


const Journey = () => {
  return (
  
    <div>
      <section id="education-and-experience" className="mx-4 max-w-full lg:mx-20 flex flex-col md:flex-row journey gap-6 ">
        
        <div className="w-full md:w-1/2 flex flex-col gap-6 mt-[40px]">
          
          <h4 className="text-xl text-white  font-bold flex gap-2 items-center journey">
            <FaLandmark className="text-xl text-red-800 dark:text-red-500" />
            Education
          </h4>

          
          <div className="overflow-auto">
            
            <div className="ps-2 my-2 first:mt-0 !mt-2">
              <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                Jan 2012 - Nov 2019
              </h3>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg">
              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                <div className="relative z-10 w-4 h-4 md:w-6 md:h-6 flex justify-center items-center">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex items-center gap-x-2 font-semibold text-white">
                  <img className="w-9 rounded-full" src="https://via.placeholder.com/50?text=School+1" alt="School Logo" />
                  <div className="leading-5">
                    csk / les hirondelles de don bosco
                    <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                      primary level
                    </p>
                  </div>
                </h3>
              </div>
            </div>
            <div className="ps-2 my-2 first:mt-0 !mt-2">
              <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                Jan 2020 - Aug 2023
              </h3>
            </div>
            <div className="flex gap-x-3 relative group rounded-lg">
              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                <div className="relative z-10 w-4 h-4 md:w-6 md:h-6 flex justify-center items-center">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex items-center gap-x-2 font-semibold text-white">
                  <img className="w-9 rounded-full" src="https://via.placeholder.com/50?text=School+1" alt="School Logo" />
                  <div className="leading-5">
                    Sos ths
                    <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                      secondary lower level
                    </p>
                  </div>
                </h3>
              </div>
            </div>
            <div className="ps-2 my-2 first:mt-0 !mt-2">
              <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                Nov 2023 - Still studying
              </h3>
            </div>
            
            
           
            


          </div>

         
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-6 mt-[20px]'>

        <h4 className="text-xl text-white mt-6 font-bold flex gap-2 items-center">
            <PiCertificateFill className="text-2xl text-red-800 dark:text-red-500" />
            Certificates
        </h4>

          <div className="relative">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex flex-nowrap transition-transform duration-700">
                
                <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
                  <SiIbm className="text-blue-500 text-5xl absolute right-5 top-0" />
                  <div className="hs-tooltip [--placement:bottom] inline-block p-6">
                    <a href="#" target="" rel="noreferrer" className="text-center text-gray-800 dark:text-white hover:text-red-800 hover:dark:text-red-500">
                      <p className="font-bold text-lg">IBM Certification</p>
                      <p className="text-sm">Completed advanced react course.</p>
                    </a>
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
                      Open Certificate
                    </span>
                  </div>
                </div>
                
              </div>
            </div>

            <button
              type="button"
              className="absolute inset-y-0 start-0 flex justify-center items-center w-12 text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
            >
              <span className="text-xl" aria-hidden="true">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex justify-center items-center w-12 text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
            >
              <span className="sr-only">Next</span>
              <span className="text-xl" aria-hidden="true">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </div>
          </div>



      </section>
    </div>
  );
}

export default Journey;
