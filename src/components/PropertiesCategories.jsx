import React from "react";

const PropertiesCategories = () => {
  return (
    <div id="root">
      <section id="property-categories" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-neutral-900 mb-4">
              Find Your Perfect Space
            </h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our wide range of rental properties to find the perfect
              home that fits your lifestyle and needs.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Category 1 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Luxury Apartments"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Premium
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Luxury Apartments
                </h3>
                <p class="text-neutral-600 mb-4">
                  Elegant living spaces with high-end finishes and exclusive
                  amenities for a premium lifestyle.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    1-3 Bedrooms
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    800-1500 sq ft
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>

            {/* <!-- Category 2 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Studio Apartments"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Studio Apartments
                </h3>
                <p class="text-neutral-600 mb-4">
                  Cozy and efficient living spaces perfect for singles or
                  couples seeking urban convenience.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Studio
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    400-600 sq ft
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>

            {/* <!-- Category 3 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1554227231-54aa5db01c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Family Homes"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Spacious
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Family Homes
                </h3>
                <p class="text-neutral-600 mb-4">
                  Comfortable and spacious houses ideal for families looking for
                  community and convenience.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    3-5 Bedrooms
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    1500+ sq ft
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>

            {/* <!-- Category 4 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Student Housing"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Affordable
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Student Housing
                </h3>
                <p class="text-neutral-600 mb-4">
                  Budget-friendly accommodations located near universities with
                  amenities students need.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Shared Rooms
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    Varied Sizes
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>

            {/* <!-- Category 5 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1570747408017-38b4c5959378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Executive Rentals"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Exclusive
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Executive Rentals
                </h3>
                <p class="text-neutral-600 mb-4">
                  Fully furnished premium properties ideal for business
                  professionals on extended stays.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    1-2 Bedrooms
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    800-1200 sq ft
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>

            {/* <!-- Category 6 --> */}
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Vacation Rentals"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Seasonal
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900 mb-2">
                  Vacation Rentals
                </h3>
                <p class="text-neutral-600 mb-4">
                  Short-term stays in prime locations perfect for holidays and
                  weekend getaways.
                </p>
                <div class="flex items-center text-sm text-neutral-500 mb-4">
                  <span class="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Various Sizes
                  </span>
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
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
                    Flexible Dates
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  View Properties →
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Featured Categories --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Featured Property Types
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* <!-- Featured Type 1 --> */}
              <div class="relative overflow-hidden rounded-lg h-64 group">
                <img
                  src="https://images.unsplash.com/photo-1495841020177-1919ede29bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Modern Lofts"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <h4 class="text-white font-semibold text-xl mb-1">
                    Modern Lofts
                  </h4>
                  <p class="text-white/80 text-sm">26 properties available</p>
                </div>
              </div>

              {/* <!-- Featured Type 2 --> */}
              <div class="relative overflow-hidden rounded-lg h-64 group">
                <img
                  src="https://images.unsplash.com/photo-1547104442-044448b73426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Beachfront Properties"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <h4 class="text-white font-semibold text-xl mb-1">
                    Beachfront Properties
                  </h4>
                  <p class="text-white/80 text-sm">12 properties available</p>
                </div>
              </div>

              {/* <!-- Featured Type 3 --> */}
              <div class="relative overflow-hidden rounded-lg h-64 group">
                <img
                  src="https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OXx8bW9kZXJuJTJCbHV4dXJ5JTJCYXBhcnRtZW50JTJCaW50ZXJpb3IlMkJ3aGl0ZSUyQmRlY29yfGVufDB8fHx8MTc0NTg1MzY4OHww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Mountain Retreats"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <h4 class="text-white font-semibold text-xl mb-1">
                    Mountain Retreats
                  </h4>
                  <p class="text-white/80 text-sm">18 properties available</p>
                </div>
              </div>

              {/* <!-- Featured Type 4 --> */}
              <div class="relative overflow-hidden rounded-lg h-64 group">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fG1vZGVybiUyQmx1eHVyeSUyQmFwYXJ0bWVudCUyQmludGVyaW9yJTJCd2hpdGUlMkJkZWNvcnxlbnwwfHx8fDE3NDU4NTM2ODh8MA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Urban Penthouses"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <h4 class="text-white font-semibold text-xl mb-1">
                    Urban Penthouses
                  </h4>
                  <p class="text-white/80 text-sm">9 properties available</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Property Features --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Popular Features & Amenities
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* <!-- Feature 1 --> */}
              <div class="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors duration-300">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-red-500"
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
                <h4 class="font-semibold text-lg text-neutral-900 mb-2">
                  Pet Friendly
                </h4>
                <p class="text-neutral-600 text-sm">
                  Properties that welcome your furry companions
                </p>
              </div>

              {/* <!-- Feature 2 --> */}
              <div class="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors duration-300">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 class="font-semibold text-lg text-neutral-900 mb-2">
                  Utilities Included
                </h4>
                <p class="text-neutral-600 text-sm">
                  All-inclusive rentals with no surprise costs
                </p>
              </div>

              {/* <!-- Feature 3 --> */}
              <div class="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors duration-300">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-red-500"
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
                </div>
                <h4 class="font-semibold text-lg text-neutral-900 mb-2">
                  Prime Locations
                </h4>
                <p class="text-neutral-600 text-sm">
                  Convenient access to transportation and amenities
                </p>
              </div>

              {/* <!-- Feature 4 --> */}
              <div class="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors duration-300">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h4 class="font-semibold text-lg text-neutral-900 mb-2">
                  Easy Payment
                </h4>
                <p class="text-neutral-600 text-sm">
                  Seamless online rent payments and deposits
                </p>
              </div>
            </div>
          </div>

          {/* <!-- CTA Section --> */}
          <div class="mt-16 bg-neutral-50 rounded-lg p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div class="mb-6 md:mb-0 md:mr-8">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Find Your Dream Rental Today
                </h3>
                <p class="text-neutral-600">
                  Browse our categories or use our advanced search to find the
                  perfect place to call home.
                </p>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Browse All Properties
                </a>
                <a
                  href="#"
                  class="bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Contact an Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesCategories;
