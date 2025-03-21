"use client";

import React, { useState, useEffect } from "react";
import { Search, Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const mainMenuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About us",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Our Story", href: "/about/story" },
        { title: "Meet the Team", href: "/about/team" },
        { title: "Testimonials", href: "/about/testimonials" },
      ],
    },
    {
      title: "Services",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Dance", href: "/services/dance" },
        { title: "Gymnastics", href: "/services/gymnastics" },
        { title: "Fitness", href: "/services/fitness" },
      ],
    },
    {
      title: "News",
      href: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Events", href: "/news/events" },
        { title: "Blog", href: "/news/blog" },
      ],
    },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = (title: string) => setHoveredItem(title);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/covers/blingers_logo.png"
                alt="Blingers Empire Logo"
                width={80}
                height={15}
                className="hover:opacity-80 transition-opacity duration-200"
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {mainMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-[#1a3264] hover:text-[#c4a01c] py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.title}
                    {item.hasSubmenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                  {item.hasSubmenu && hoveredItem === item.title && (
                    <ul className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#1a3264] hover:bg-[#f8f3e2] hover:text-[#c4a01c]"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-expanded={isSearchOpen}
              className="text-[#1a3264] hover:text-[#c4a01c] transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+254718206992"
                className="flex items-center text-[#1a3264] hover:text-[#c4a01c] text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+254 71 820 69 92</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="lg:hidden text-[#1a3264] hover:text-[#c4a01c]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMounted && isMenuOpen && (
          <div className="lg:hidden py-4 bg-white">
            <nav className="space-y-2">
              {mainMenuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-[#1a3264] hover:bg-[#f8f3e2] hover:text-[#c4a01c] rounded text-sm"
                  >
                    {item.title}
                  </Link>
                  {item.hasSubmenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-[#1a3264] hover:bg-[#f8f3e2] hover:text-[#c4a01c] rounded text-sm"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {isMounted && isSearchOpen && (
          <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-lg">
            <div className="container mx-auto">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter search query here"
                  className="w-full p-2 border border-[#1a3264] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4a01c]"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-4 text-[#1a3264] hover:text-[#c4a01c]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
