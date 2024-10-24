import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black  grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-4 gap-8">
          <div className="w-full h-full flex flex-col gap-8 justify-center">
            <div className="flex gap-4 p-5">
            <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  href="https://x.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rajni-bala-4ba53716b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </a>
            </div>
          </div>
          <div className="w-full h-full">
            <h3 className="text-xl uppercase text-primary-color tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4  font-medium py-6 overflow-hidden">
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Home
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                About
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Menu
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  RestaurantList
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Contact
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full h-full">
            <h3 className="text-xl uppercase text-primary-color tracking-wider">
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Authentication
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  System Status
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Terms of Service
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
    
              <li>
                <span className="w-full text-lg relative hover:text-primary-color duration-300 group cursor-pointer">
                  Over Right
                  <span className="w-full h-[1px] bg-primary-color inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            </ul>
          </div>
          <div>
          <p className="text-center text-gray-500 text-base">
        © 2024. All rights reserved by Rajni Bala
      </p>
      </div>
        </div>
      );
}

export default Footer
