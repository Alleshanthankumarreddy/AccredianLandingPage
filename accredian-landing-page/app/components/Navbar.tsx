"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">

        {/* Logo */}
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
          alt="logo"
          className="w-[124px] h-[32px]"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
          {[
            "Home",
            "Stats",
            "Clients",
            "Accredian Edge",
            "CAT",
            "How It Works",
            "FAQs",
            "Testimonials",
          ].map((item, index) => (
            <li
                key={index}
                onClick={() => {
                    setActive(item);
                    setIsOpen(false); // close menu after click
                }}
                className="text-[16px] cursor-pointer"
                >
                <a
                    href={`#${item.replace(/\s/g, "")}`}
                    className={
                    active === item
                        ? "text-blue-600 font-semibold border-b-[2px] border-blue-600"
                        : "text-black"
                    }
                >
                    {item}
                </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="absolute top-[88px] right-5 bg-white shadow-lg p-6 rounded-xl">
              <ul className="flex flex-col space-y-4">
                {[
                  "Home",
                  "Stats",
                  "Clients",
                  "Accredian Edge",
                  "CAT",
                  "How It Works",
                  "FAQs",
                  "Testimonials",
                ].map((item, index) => (
                  <li key={index} className="text-[16px] cursor-pointer">
                    <a
                      href={`#${item.replace(/\s/g, "")}`}
                      className={
                        index === 0
                          ? "text-blue-600 font-semibold border-b-[2px] border-blue-600"
                          : "text-black"
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}