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
                Dance Company
              </Link>
            </div>

            {/* Navigation and Contact Information */}
            <div className="flex-1 lg:mx-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation */}
              <nav>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <li>
                    <Link
                      href="/about/story"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news/events"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/testimonials"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      The Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news/blog"
                      className="text-white hover:text-[#c4a01c] text-sm transition-colors duration-200"
                    >
                      Blog
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
                      href="tel:+254721499142"
                      className="flex items-center text-white hover:text-[#c4a01c] text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+254 72 149 91 42</span>
                    </a>
                    <a
                      href="mailto:info@dancecompany.com"
                      className="flex items-center text-white hover:text-[#c4a01c] text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>info@dancecompany.com</span>
                    </a>
                  </div>
                </div>

                {/* Social Media Icons on the Left Side */}
                <div className="flex space-x-10 mt-5">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our TikTok"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our X (formerly Twitter)"
                    className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
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
            onClick={(e) => e.preventDefault()}
            className="text-white hover:text-[#c4a01c] text-sm mb-4 md:mb-0 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <div className="flex space-x-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              target="blank"
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
          © {new Date().getFullYear()} Dance Company. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
