import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative min-h-screen">
        {/* <!-- Background image with overlay --> */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1567016557389-5246a1940bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3BhY2lvdXMlMkJyb29tJTJCcmVudGFsJTJCd2l0aCUyQm1vZGVybiUyQmZ1cm5pdHVyZXxlbnwwfHx8fDE3NDU4NTE1MDh8MA&ixlib=rb-4.0.3&q=80&w=400"
            alt="Modern spacious apartment interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* <!-- Hero content --> */}
        <div className="container mx-auto px-4 py-32 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Find Your <span className="text-red-300">Home</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
            Discover beautiful rental properties in prime locations with comfort
            and style that feels like home.
          </p>

          {/* <!-- Search form --> */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 md:p-6 mx-auto">
            <form
              id="search-form"
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
              <div className="flex-1">
                <label for="location" className="sr-only">
                  Location
                </label>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    id="location"
                    placeholder="Where do you want to live?"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="md:w-40">
                <label for="property-type" className="sr-only">
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="pl-4 pr-8 py-3 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                </select>
              </div>

              <div className="md:w-40">
                <label for="price-range" className="sr-only">
                  Price Range
                </label>
                <select
                  id="price-range"
                  className="pl-4 pr-8 py-3 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                >
                  <option value="">Price Range</option>
                  <option value="0-500">$0 - $500</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="1000-1500">$1000 - $1500</option>
                  <option value="1500+">$1500+</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-red-300 hover:bg-red-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Search
              </button>
            </form>
          </div>

          {/* <!-- Property stats --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 text-white max-w-4xl mx-auto">
            <div className="text-center p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
              <p className="text-sm md:text-base">Properties</p>
            </div>

            <div className="text-center p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">300+</h3>
              <p className="text-sm md:text-base">Happy Clients</p>
            </div>

            <div className="text-center p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">50+</h3>
              <p className="text-sm md:text-base">Cities</p>
            </div>

            <div className="text-center p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">24/7</h3>
              <p className="text-sm md:text-base">Support</p>
            </div>
          </div>
        </div>

        {/* <!-- Scroll down indicator --> */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a
            href="#featured-properties"
            className="text-white flex flex-col items-center"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* <script>
      {// Smooth scroll functionality for the scroll down button
      document.addEventListener("DOMContentLoaded", function () {
        const scrollDownButton = document.querySelector(
          'a[href="#featured-properties"]'
        );

        if (scrollDownButton) {
          scrollDownButton.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
              });
            }
          });
        }

        // Form submission handling
        const searchForm = document.getElementById("search-form");
        if (searchForm) {
          searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const location = document.getElementById("location").value;
            const propertyType =
              document.getElementById("property-type").value;
            const priceRange =
              document.getElementById("price-range").value;

            // You would normally handle the search here
            console.log("Search submitted:", {
              location,
              propertyType,
              priceRange,
            });

            // For demo purposes, show an alert
            alert(
              `Searching for ${propertyType || "properties"} in ${
                location || "all locations"
              } with price range ${priceRange || "any"}`
            );
          });
        }
      });}
    </script> */}
    </>
  );
};
export default Hero;
