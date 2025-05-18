import React from "react";

const SearchSection = () => {
  return (
    <div id="root">
      <section id="search" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          {/* <!-- Section Heading --> */}
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">
              Find Your Perfect Home
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Discover thousands of properties that match your preferences in
              just a few clicks.
            </p>
          </div>

          {/* <!-- Advanced Search Form --> */}
          <div class="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
            <form id="advanced-search-form">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Location --> */}
                <div>
                  <label
                    for="advanced-location"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location
                  </label>
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                      id="advanced-location"
                      placeholder="City, neighborhood, or address"
                      class="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                {/* <!-- Property Type --> */}
                <div>
                  <label
                    for="property-type"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Property Type
                  </label>
                  <select
                    id="property-type"
                    class="pl-3 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="studio">Studio</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>

                {/* <!-- Price Range --> */}
                <div>
                  <label
                    for="price-range"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price Range
                  </label>
                  <select
                    id="price-range"
                    class="pl-3 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                  >
                    <option value="">Any Price</option>
                    <option value="0-500">$0 - $500 / month</option>
                    <option value="500-1000">$500 - $1,000 / month</option>
                    <option value="1000-2000">$1,000 - $2,000 / month</option>
                    <option value="2000-3000">$2,000 - $3,000 / month</option>
                    <option value="3000+">$3,000+ / month</option>
                  </select>
                </div>

                {/* <!-- Bedrooms --> */}
                <div>
                  <label
                    for="bedrooms"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    class="pl-3 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                  >
                    <option value="">Any</option>
                    <option value="1">1+ Bedroom</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>

                {/* <!-- Bathrooms --> */}
                <div>
                  <label
                    for="bathrooms"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bathrooms
                  </label>
                  <select
                    id="bathrooms"
                    class="pl-3 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                  >
                    <option value="">Any</option>
                    <option value="1">1+ Bathroom</option>
                    <option value="2">2+ Bathrooms</option>
                    <option value="3">3+ Bathrooms</option>
                    <option value="4">4+ Bathrooms</option>
                  </select>
                </div>

                {/* <!-- Floor Area --> */}
                <div>
                  <label
                    for="floor-area"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Floor Area
                  </label>
                  <select
                    id="floor-area"
                    class="pl-3 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 appearance-none bg-white"
                  >
                    <option value="">Any Size</option>
                    <option value="0-500">0 - 500 sq ft</option>
                    <option value="500-1000">500 - 1,000 sq ft</option>
                    <option value="1000-1500">1,000 - 1,500 sq ft</option>
                    <option value="1500-2000">1,500 - 2,000 sq ft</option>
                    <option value="2000+">2,000+ sq ft</option>
                  </select>
                </div>
              </div>

              {/* <!-- Additional Features Section --> */}
              <div class="mt-8">
                <h3 class="text-lg font-medium text-gray-700 mb-3">
                  Additional Features
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-furnished"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-furnished"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Furnished
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-parking"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-parking"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Parking
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-pets"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-pets"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Pet Friendly
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-balcony"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-balcony"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Balcony
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-elevator"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-elevator"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Elevator
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-gym"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label for="feature-gym" class="ml-2 text-sm text-gray-700">
                      Gym
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-pool"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label
                      for="feature-pool"
                      class="ml-2 text-sm text-gray-700"
                    >
                      Swimming Pool
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-air"
                      class="h-4 w-4 text-red-300 border-gray-300 rounded focus:ring-red-200"
                    />
                    <label for="feature-air" class="ml-2 text-sm text-gray-700">
                      Air Conditioning
                    </label>
                  </div>
                </div>
              </div>

              {/* <!-- Search Button --> */}
              <div class="mt-8 text-center">
                <button
                  type="submit"
                  class="bg-red-300 hover:bg-red-400 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
                >
                  Find Properties
                </button>

                <button
                  type="reset"
                  class="ml-4 text-gray-600 hover:text-gray-800 font-medium py-3 transition-colors duration-300"
                >
                  Reset Filters
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Popular Searches --> */}
          <div class="mt-16">
            <h3 class="text-xl font-semibold text-center mb-8">
              Popular Searches
            </h3>
            <div class="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                class="px-4 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-300"
              >
                Luxury Apartments
              </a>
              <a
                href="#"
                class="px-4 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-300"
              >
                Studio Flats
              </a>
              <a
                href="#"
                class="px-4 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-300"
              >
                Pet-Friendly Homes
              </a>
              <a
                href="#"
                class="px-4 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-300"
              >
                City Center
              </a>
              <a
                href="#"
                class="px-4 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-300"
              >
                Family Houses
              </a>
            </div>
          </div>

          {/* <!-- Search Tips --> */}
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Refine Your Search</h3>
              <p class="text-gray-600 text-sm">
                Use our advanced filters to find exactly what you're looking
                for.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Save Favorites</h3>
              <p class="text-gray-600 text-sm">
                Create an account to save your favorite properties and searches.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-medium mb-2">Get Notifications</h3>
              <p class="text-gray-600 text-sm">
                Receive alerts when new properties match your search criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <script>
    // Form submission handler
    document
      .getElementById("advanced-search-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const formData = {
          location:
            document.getElementById("advanced-location").value,
          propertyType:
            document.getElementById("property-type").value,
          priceRange: document.getElementById("price-range").value,
          bedrooms: document.getElementById("bedrooms").value,
          bathrooms: document.getElementById("bathrooms").value,
          floorArea: document.getElementById("floor-area").value,
          features: {
            furnished:
              document.getElementById("feature-furnished").checked,
            parking:
              document.getElementById("feature-parking").checked,
            petFriendly:
              document.getElementById("feature-pets").checked,
            balcony:
              document.getElementById("feature-balcony").checked,
            elevator:
              document.getElementById("feature-elevator").checked,
            gym: document.getElementById("feature-gym").checked,
            swimmingPool:
              document.getElementById("feature-pool").checked,
            airConditioning:
              document.getElementById("feature-air").checked,
          },
        };

        // Log form data to console (in a real app, this would be sent to the server)
        console.log("Search form submitted:", formData);

        // For demo purposes, show an alert
        alert(
          "Search submitted! In a real application, this would search for properties matching your criteria."
        );
      });

    // Reset button functionality
    document
      .querySelector('button[type="reset"]')
      .addEventListener("click", function (e) {
        // Don't need to call preventDefault as the reset type already resets the form
        console.log("Search form reset");
      });

    // Popular search links functionality
    document
      .querySelectorAll(".popular-searches a")
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const searchTerm = this.textContent.trim();
          document.getElementById("advanced-location").value =
            searchTerm;
          console.log(`Popular search selected: ${searchTerm}`);
        });
      });
  </script> */}
    </div>
  );
};

export default SearchSection;
