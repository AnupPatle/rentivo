import React from "react";

const Properties = () => {
  return (
    <div id="root">
      <section id="featured-properties" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of stunning properties that
              offer comfort, style, and exceptional value.
            </p>
          </div>

          {/* <!-- Property Filters --> */}
          <div className="flex flex-wrap justify-center mb-10 gap-3">
            <button
              className="property-filter-btn bg-red-300 text-white px-5 py-2 rounded-full"
              data-filter="all"
            >
              All
            </button>
            <button
              className="property-filter-btn bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-400 hover:border-red-300"
              data-filter="apartment"
            >
              Apartments
            </button>
            <button
              className="property-filter-btn bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-400 hover:border-red-300"
              data-filter="house"
            >
              Houses
            </button>
            <button
              className="property-filter-btn bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-400 hover:border-red-300"
              data-filter="villa"
            >
              Villas
            </button>
            <button
              className="property-filter-btn bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-400 hover:border-red-300"
              data-filter="studio"
            >
              Studios
            </button>
          </div>

          {/* <!-- Properties Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Property Card 1 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="apartment"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Scandinavian style apartment interior"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-300 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="1"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Scandinavian Apartment
                </h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Central District, Downtown
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    2 Bedrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    1 Bathroom
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    85 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">
                      $1,250
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="1"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Property Card 2 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="house"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Cactus and Interior love"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    New
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="2"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Spacious Family House
                </h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Greenview, Suburbs
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    4 Bedrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    2 Bathrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    180 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">
                      $2,450
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Property Card 3 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="studio"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Books in brown wooden side table"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="3"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cozy Studio Apartment
                </h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Arts District, Downtown
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    Studio
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    1 Bathroom
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    45 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">$850</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="3"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Property Card 4 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="villa"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Loft Party!"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-300 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="4"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Luxury Villa with Pool
                </h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Palm Beach, Coastline
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    5 Bedrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    3 Bathrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    350 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">
                      $4,500
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="4"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Property Card 5 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="apartment"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Where comfort meets design"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Special Offer
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="5"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Designer Apartment
                </h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Fashion District, Downtown
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    3 Bedrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    2 Bathrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    120 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">
                      $1,800
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="5"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Property Card 6 --> */}
            <div
              className="property-card bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              data-category="house"
            >
              {/* <!-- Property Image --> */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1538577880403-f9998e75dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="for lazy days"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-white p-2 rounded-full shadow-md text-red-400 hover:text-red-500 focus:outline-none save-property"
                    data-id="6"
                    aria-label="Save property"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Property Details --> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Townhouse</h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Riverside, Suburbs
                </p>

                {/* <!-- Features --> */}
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    3 Bedrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    2 Bathrooms
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4L9 9M4 16v4m0 0h4m-4 0l5-5m11-1V4m0 0h-4m4 0l-5 5M20 16v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                    140 m²
                  </div>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-black">
                      $2,100
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <button
                    className="view-details bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    data-id="6"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Load More Button --> */}
          <div className="text-center mt-12">
            <button
              id="load-more"
              className="bg-white border border-red-300 hover:bg-red-50 text-red-500 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Load More Properties
            </button>
          </div>
        </div>

        {/* <!-- Property Details Modal --> */}
        <div
          id="property-modal"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden"
          aria-modal="true"
          aria-hidden="true"
          role="dialog"
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 shadow-xl relative">
            {/* <!-- Close button --> */}
            <button
              id="close-modal"
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div id="modal-content" className="p-0">
              {/* <!-- Content will be dynamically loaded here --> */}
              <div className="p-8">
                <div className="animate-pulse">
                  <div className="h-72 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="flex justify-between">
                    <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Property filtering functionality
      const filterButtons = document.querySelectorAll(
        ".property-filter-btn"
      );
      const propertyCards =
        document.querySelectorAll(".property-card");

      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Remove active className from all buttons
          filterButtons.forEach((btn) => {
            btn.classNameList.remove("bg-red-300", "text-white");
            btn.classNameList.add(
              "bg-white",
              "text-gray-700",
              "border",
              "border-gray-200",
              "hover:bg-red-50",
              "hover:text-red-400",
              "hover:border-red-300"
            );
          });

          // Add active className to clicked button
          this.classNameList.remove(
            "bg-white",
            "text-gray-700",
            "border",
            "border-gray-200",
            "hover:bg-red-50",
            "hover:text-red-400",
            "hover:border-red-300"
          );
          this.classNameList.add("bg-red-300", "text-white");

          const filter = this.getAttribute("data-filter");

          // Show/hide property cards based on filter
          propertyCards.forEach((card) => {
            if (
              filter === "all" ||
              card.getAttribute("data-category") === filter
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });

      // Favorite property functionality
      const saveButtons = document.querySelectorAll(".save-property");

      saveButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const propertyId = this.getAttribute("data-id");
          const isSaved = this.classNameList.contains("saved");

          if (isSaved) {
            this.classNameList.remove("saved");
            this.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  `;
            console.log(
              `Property ${propertyId} removed from favorites`
            );
          } else {
            this.classNameList.add("saved");
            this.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
  `;
            console.log(`Property ${propertyId} added to favorites`);
          }
        });
      });

      // View details modal functionality
      const modal = document.getElementById("property-modal");
      const modalContent = document.getElementById("modal-content");
      const closeModalButton = document.getElementById("close-modal");
      const viewDetailsButtons =
        document.querySelectorAll(".view-details");
      let currentTriggerElement = null;

      function openModal(propertyId) {
        modal.classNameList.remove("hidden");
        document.body.style.overflow = "hidden";

        // Simulate loading property data
        setTimeout(() => {
          // This would normally be an AJAX call to get property details
          const propertyDetails = getPropertyDetails(propertyId);
          modalContent.innerHTML = `
  <div>
    <div className="relative h-96">
      <img src="${propertyDetails.image}" alt="${
            propertyDetails.title
          }" className="w-full h-full object-cover">
    </div>
    
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">${
            propertyDetails.title
          }</h2>
          <p className="text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ${propertyDetails.location}
          </p>
        </div>
        <div>
          <span className="text-3xl font-bold text-black">${
            propertyDetails.price
          }</span>
          <span className="text-gray-500">/month</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-8 border-t border-b border-gray-200 py-6">
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-1">Bedrooms</div>
          <div className="font-semibold">${propertyDetails.bedrooms}</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-1">Bathrooms</div>
          <div className="font-semibold">${
            propertyDetails.bathrooms
          }</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-1">Area</div>
          <div className="font-semibold">${propertyDetails.area}</div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Description</h3>
        <p className="text-gray-600">${propertyDetails.description}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-600">
          ${propertyDetails.features
            .map(
              (feature) =>
                `<li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>${feature}</li>`
            )
            .join("")}
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <a href="tel:+1234567890" className="bg-white border border-red-300 text-red-500 px-6 py-3 rounded-lg text-center hover:bg-red-50 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Contact Agent
        </a>
        <button className="bg-red-300 hover:bg-red-400 text-white px-6 py-3 rounded-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule a Tour
        </button>
      </div>
    </div>
  </div>
`;
        }, 500);
      }

      function closeModal() {
        modal.classNameList.add("hidden");
        document.body.style.overflow = "";
        if (currentTriggerElement) {
          currentTriggerElement.focus();
        }
      }

      viewDetailsButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const propertyId = this.getAttribute("data-id");
          currentTriggerElement = this;
          openModal(propertyId);
        });
      });

      closeModalButton.addEventListener("click", closeModal);

      // Close modal when clicking outside the content
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Close modal with Escape key
      document.addEventListener("keydown", function (e) {
        if (
          e.key === "Escape" &&
          !modal.classNameList.contains("hidden")
        ) {
          closeModal();
        }
      });

      // Mock property data (this would normally come from a backend API)
      function getPropertyDetails(id) {
        const properties = {
          1: {
            title: "Modern Scandinavian Apartment",
            location: "Central District, Downtown",
            price: "$1,250",
            bedrooms: "2 Bedrooms",
            bathrooms: "1 Bathroom",
            area: "85 m²",
            image:
              "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "This beautifully designed Scandinavian apartment features high ceilings, large windows, and an open floor plan. The modern kitchen is equipped with stainless steel appliances and quartz countertops. Located in the heart of downtown, it's just steps away from restaurants, shopping, and public transportation.",
            features: [
              "Air Conditioning",
              "In-unit Laundry",
              "Hardwood Floors",
              "Stainless Steel Appliances",
              "Walk-in Closet",
              "Balcony",
              "Elevator",
              "Pet Friendly",
            ],
          },
          2: {
            title: "Spacious Family House",
            location: "Greenview, Suburbs",
            price: "$2,450",
            bedrooms: "4 Bedrooms",
            bathrooms: "2 Bathrooms",
            area: "180 m²",
            image:
              "https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "This spacious family home offers plenty of living space with four bedrooms and two bathrooms. The fully remodeled kitchen opens to a bright family room and dining area. The fenced backyard includes a patio perfect for outdoor entertaining and a large lawn for children to play. Located in a quiet suburban neighborhood with excellent schools nearby.",
            features: [
              "Garage Parking",
              "Fenced Yard",
              "Central Heating",
              "Air Conditioning",
              "Fireplace",
              "Basement",
              "Patio/Deck",
              "Security System",
            ],
          },
          3: {
            title: "Cozy Studio Apartment",
            location: "Arts District, Downtown",
            price: "$850",
            bedrooms: "Studio",
            bathrooms: "1 Bathroom",
            area: "45 m²",
            image:
              "https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "This stylish studio apartment is perfect for young professionals or students. The thoughtfully designed space includes a sleeping area, living space, and kitchenette, with modern fixtures and finishes throughout. Located in the vibrant Arts District, you'll be surrounded by galleries, cafes, and boutiques.",
            features: [
              "Built-in Storage",
              "High-Speed Internet",
              "Bicycle Storage",
              "Laundry Facilities",
              "Rooftop Access",
              "Fitness Center",
              "On-site Management",
              "Public Transit Nearby",
            ],
          },
          4: {
            title: "Luxury Villa with Pool",
            location: "Palm Beach, Coastline",
            price: "$4,500",
            bedrooms: "5 Bedrooms",
            bathrooms: "3 Bathrooms",
            area: "350 m²",
            image:
              "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "Experience luxury living in this stunning villa with panoramic ocean views. The property features a private swimming pool, spacious outdoor entertaining areas, and beautifully landscaped gardens. Inside, you'll find high-end finishes, an open concept kitchen and living area, and luxurious master suite. Just a short walk to the beach.",
            features: [
              "Private Pool",
              "Ocean Views",
              "Gourmet Kitchen",
              "Outdoor Kitchen",
              "Master Suite",
              "Smart Home Features",
              "Garden",
              "Beach Access",
            ],
          },
          5: {
            title: "Designer Apartment",
            location: "Fashion District, Downtown",
            price: "$1,800",
            bedrooms: "3 Bedrooms",
            bathrooms: "2 Bathrooms",
            area: "120 m²",
            image:
              "https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "This designer apartment features custom finishes and unique architectural details throughout. The gourmet kitchen includes premium appliances and a large island perfect for entertaining. Floor-to-ceiling windows provide abundant natural light and city views. Located in the trendy Fashion District with excellent dining and shopping options.",
            features: [
              "Concierge Service",
              "Floor-to-Ceiling Windows",
              "Walk-in Closets",
              "Quartz Countertops",
              "Designer Fixtures",
              "Wine Refrigerator",
              "Soundproof Windows",
              "Parking Available",
            ],
          },
          6: {
            title: "Modern Townhouse",
            location: "Riverside, Suburbs",
            price: "$2,100",
            bedrooms: "3 Bedrooms",
            bathrooms: "2 Bathrooms",
            area: "140 m²",
            image:
              "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description:
              "This contemporary townhouse offers three floors of modern living space with an open concept main floor, three bedrooms upstairs, and a finished basement. The property features a private outdoor patio and access to community amenities including a swimming pool and playground. Located in a desirable riverside neighborhood with walking trails nearby.",
            features: [
              "Multi-level Living",
              "Private Patio",
              "Community Pool",
              "Playground Access",
              "Garage Parking",
              "Storage Space",
              "Energy Efficient",
              "Water Views",
            ],
          },
        };

        return (
          properties[id] || {
            title: "Property Details",
            location: "Location not available",
            price: "Price not available",
            bedrooms: "N/A",
            bathrooms: "N/A",
            area: "N/A",
            image:
              "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aXRoJTJCbGlnaHQlMkJjb2xvcnN8ZW58MHx8fHwxNzQ1ODUxNTQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
            description: "Details not available for this property.",
            features: ["Feature information not available"],
          }
        );
      }

      // Load more button functionality (simulated)
      const loadMoreButton = document.getElementById("load-more");
      let loadCount = 0;

      loadMoreButton.addEventListener("click", function () {
        loadCount++;

        if (loadCount >= 2) {
          this.textContent = "No More Properties";
          this.disabled = true;
          this.classNameList.add("opacity-50", "cursor-not-allowed");
        } else {
          // Simulate loading more properties (would be an AJAX call in a real app)
          this.textContent = "Loading...";

          setTimeout(() => {
            this.textContent = "Load More Properties";
            alert(
              "In a real application, more properties would be loaded here."
            );
          }, 1000);
        }
      });
    });
  </script> */}
    </div>
  );
};

export default Properties;
