"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a3264] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-[#c4a01c] hover:text-white"
              >
                Blingers Empire
              </Link>
            </div>

            {/* Navigation and Contact Information */}
            <div className="flex-1 lg:mx-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation */}
              <nav>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clients"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Contact Information and Social Media */}
              <div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
                    <a
                      href="tel:+254718206992"
                      className="flex items-center text-white hover:text-[#c4a01c] text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+254 71 820 69 92</span>
                    </a>
                    <a
                      href="mailto:info@blingersempire.com"
                      className="flex items-center text-white hover:text-[#c4a01c] text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>info@blingersempire.com</span>
                    </a>
                  </div>
                </div>

                {/* Social Media Icons on the Left Side */}
                <div className="flex space-x-10 mt-5">
                  <a
                    href="https://www.instagram.com/blingersempire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/BlingersEmpire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@blingers_empire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our TikTok"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/BlingersEmpire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our X (formerly Twitter)"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@blingersempire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#c4a01c]/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center px-4">
          <Link
            href="/privacy-policy"
            className="text-white hover:text-[#c4a01c] text-sm mb-4 md:mb-0 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
              className="text-white hover:text-[#c4a01c] transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-[#c4a01c]">
          © {new Date().getFullYear()} Blingers Empire. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
