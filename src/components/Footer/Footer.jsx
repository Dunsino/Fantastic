import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CardsImg from "../../assets/credit-cards.webp";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container">
        <div className="grid">
          {/* company details section */}
          <div className="space-y-6">
            <img src={Logo} alt="" className="max-w-[100px] invert" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Noida, Uttar Pradesh
              </p>
            </div>
          </div>
          {/* footer links section */}
          {/* Social links section */}
          <div>{/* copyright section */}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
