import React from 'react'
import { FaFacebookF, FaTwitter} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About & Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4 primary-color">About BalaFoodClub</h4>
          <p className="text-sm text-gray-300">
            Delivering the best food experience straight to your doorstep, with quick delivery and quality meals.
          </p>
          <ul className="mt-4 space-y-2">
            <li>📞 +91 1234567890</li>
            <li>✉️ contact@balafoodclub.com</li>
            <li>📍 Chandigarh, Punjab</li>
          </ul>
        </div>
    
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 primary-color">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/menu" className="hover:text-primary-color">Home</a></li>
            <li><a href="/order" className="hover:text-primary-color">Menu</a></li>
            <li><a href="/reservations" className="hover:text-primary-color">Offers</a></li>
            <li><a href="/careers" className="hover:text-primary-color">Careers</a></li>
          </ul>
        </div>
    
        {/* Newsletter & Social */}
        <div>
          <h4 className="text-lg font-bold mb-4 primary-color">Stay Updated</h4>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to receive updates on special offers, new dishes, and exclusive deals.
          </p>
          <form>
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 w-full bg-gray-700 rounded-md text-sm"
            />
            <button 
              type="submit" 
              className="mt-2 w-full p-2 bg-primary-color rounded-md text-white hover:bg-orange-600">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" className="p-2" aria-label="Facebook">
              <FaFacebookF/>
            </a>
            <a href="https://instagram.com" className="p-2" aria-label="Instagram">
              <FaSquareInstagram/>
            </a>
            <a href="https://twitter.com" className="p-2" aria-label="Twitter">
              <FaTwitter/>
            </a>
          </div>
        </div>
    
        {/* Legal and Policy */}
        <div>
          <h4 className="text-lg font-bold mb-4 primary-color">Policies</h4>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-primary-color">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-primary-color">Privacy Policy</a></li>
            <li><a href="/refund" className="hover:text-primary-color">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © 2024 BalaFoodClub. All rights reserved.
      </div>
    </div>
      );
}

export default Footer
