import React, { useState } from "react";
import { FaFacebookF, FaTwitter} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API or email service)
    console.log("Form submitted:", { name, email, message });
    // Clear form after submission
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We’d love to hear from you! Please fill out the form below or reach out
        through our social media channels.
      </p>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block mb-2" for="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name..."
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
            
        </div>
        <div className="mb-4">
          <label className="block mb-2" for="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email..."
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
           
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="bg-primary-color text-white p-2 rounded">
          Send Message
        </button>
      </form>

      <h2 className="text-3xl font-semibold mb-2">Follow Us</h2>
      <div className="flex space-x-4 mt-6 text-3xl">
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
  );
};

export default Contact;
