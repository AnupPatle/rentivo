import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-white py-4 w-full sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* <!-- Logo --> */}
          <div className="text-2xl font-bold text-black">
            <span className="text-black">Rent</span>
            <span className="text-red-300">ivo</span>
          </div>

          {/* <!-- Desktop Navigation --> */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust scroll position if header is fixed
                  className="cursor-pointer text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="featured-properties"
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust scroll position if header is fixed
                  className="cursor-pointer text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="property-categories"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* <!-- CTA Button --> */}
          <div className="hidden md:block">
            <Link
              to="contact"
              className="cursor-pointer bg-red-300 hover:bg-red-400 text-white px-5 py-2 rounded-md transition-colors duration-300"
            >
              Rent Now
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <button
            id="mobile-menu-button"
            className="md:hidden flex items-center"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Mobile Navigation --> */}
        <div id="mobile-menu" className="md:hidden hidden mt-4 pb-2">
          <nav>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="block text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="block text-neutral-700 hover:text-red-300 transition-colors duration-300">
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#property-categories"
                  className="block text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-neutral-700 hover:text-red-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <a
              href="#contact"
              className="block text-center bg-red-300 hover:bg-red-400 text-white px-5 py-2 rounded-md transition-colors duration-300"
            >
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
