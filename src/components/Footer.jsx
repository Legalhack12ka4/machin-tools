import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img src="images/footerlogo.jpg" alt="Logo" className="mb-4" />

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-orange-500 p-3 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-orange-500 p-3 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-orange-500 p-3 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Home Links */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h4 className="font-bold mb-4">Home</h4>
          <p className="mb-2">Products</p>
          <p className="mb-2">About Us</p>
          <p className="mb-2">Contact Us</p>
        </div>

        {/* Contact Info with Icons */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h4 className="font-bold mb-4">Contact</h4>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="text-orange-500 mr-2" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-orange-500 mr-2" />
            <p>info@machinetoolssales.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-orange-500 mr-2" />
            <p>Address will come here</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10"></div>

      <p className="text-center mt-6 text-sm text-gray-400">
        © Copyright 2025. MachineTools-Sales.com
      </p>
    </footer>
  );
}
