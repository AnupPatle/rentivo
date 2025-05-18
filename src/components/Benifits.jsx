import React from "react";

const Benifits = () => {
  return (
    <div id="root">
      <section id="benefits" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">
              Benefits of Choosing Rentivo
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We make finding your ideal home simple, secure, and satisfying
              with our comprehensive rental services.
            </p>
          </div>

          {/* <!-- Main Benefits Grid --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* <!-- Left Side: Image --> */}
            <div class="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1523951778169-4cb35545bfa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aGFwcHklMkJmYW1pbHklMkJtb3ZpbmclMkJpbnRvJTJCbmV3JTJCcmVudGFsJTJCYXBhcnRtZW50fGVufDB8fHx8MTc0NTg1MTkwM3ww&ixlib=rb-4.0.3&q=80&w=400"
                alt="Happy family moving into new rental apartment"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* <!-- Right Side: Benefits List --> */}
            <div class="flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-6 text-black">
                Why Renters Love Us
              </h3>

              <div class="space-y-6">
                <div class="flex">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1 text-black">
                      Verified Listings
                    </h4>
                    <p class="text-gray-600">
                      All our properties are personally verified to ensure they
                      meet our quality standards and match their descriptions.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1 text-black">
                      Dedicated Support Team
                    </h4>
                    <p class="text-gray-600">
                      Our professional team is available 24/7 to assist with
                      property inquiries, scheduling viewings, and resolving any
                      issues.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1 text-black">
                      Secure Transactions
                    </h4>
                    <p class="text-gray-600">
                      Our platform ensures secure payment processing and
                      protects your personal information with advanced
                      encryption.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1 text-black">
                      Premium Experience
                    </h4>
                    <p class="text-gray-600">
                      Enjoy high-quality listings, virtual tours, and a seamless
                      booking process from search to move-in day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Featured Benefits Trio --> */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* <!-- Card 1 --> */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cmVudGFsJTJCcHJvcGVydHklMkJzZWFyY2glMkJvbiUyQmxhcHRvcCUyQnNjcmVlbnxlbnwwfHx8fDE3NDU4NTE5MDN8MA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Person typing on MacBook Pro"
                  class="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-black">
                  Easy Search & Filtering
                </h3>
                <p class="text-gray-600 mb-4">
                  Find your perfect property using our intuitive search tools
                  with detailed filters for location, price, amenities, and
                  more.
                </p>
                <a
                  href="#search"
                  class="text-red-400 hover:text-red-500 font-medium inline-flex items-center"
                >
                  Try our search
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542596594-649edbc13630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aGFwcHklMkJmYW1pbHklMkJtb3ZpbmclMkJpbnRvJTJCbmV3JTJCcmVudGFsJTJCYXBhcnRtZW50fGVufDB8fHx8MTc0NTg1MTkwM3ww&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Joyful woman using peace hand gesture"
                  class="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-black">
                  Simplified Application
                </h3>
                <p class="text-gray-600 mb-4">
                  Apply for your chosen property with our streamlined online
                  application process. Complete everything in minutes, not days.
                </p>
                <a
                  href="#how-it-works"
                  class="text-red-400 hover:text-red-500 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3BhY2lvdXMlMkJyZW50YWwlMkJraXRjaGVuJTJCd2l0aCUyQm1vZGVybiUyQmFwcGxpYW5jZXN8ZW58MHx8fHwxNzQ1ODUxOTAzfDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Nicely designed white kitchen"
                  class="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-black">
                  Quality Accommodations
                </h3>
                <p class="text-gray-600 mb-4">
                  All our rental properties meet strict quality standards,
                  ensuring comfortable living spaces with essential amenities.
                </p>
                <a
                  href="#featured-properties"
                  class="text-red-400 hover:text-red-500 font-medium inline-flex items-center"
                >
                  Browse properties
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial Section --> */}
          <div class="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold mb-8 text-center text-black">
              What Our Renters Say
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Testimonial 1 --> */}
              <div class="bg-white rounded-lg shadow-md p-6 relative">
                <div class="absolute -top-4 left-6 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center text-white font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1593100126453-19b562a800c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8aGFwcHklMkJmYW1pbHklMkJtb3ZpbmclMkJpbnRvJTJCbmV3JTJCcmVudGFsJTJCYXBhcnRtZW50fGVufDB8fHx8MTc0NTg1MTkwM3ww&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Best friends"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 class="font-bold text-black">Sarah Johnson</h4>
                    <p class="text-gray-500 text-sm">Renting since 2021</p>
                  </div>
                </div>
                <p class="text-gray-600 italic mb-4">
                  "Rentivo made it incredibly easy to find my dream apartment.
                  The virtual tour feature saved me so much time, and the
                  application process was seamless. I'm absolutely in love with
                  my new home!"
                </p>
                <div class="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div class="bg-white rounded-lg shadow-md p-6 relative">
                <div class="absolute -top-4 left-6 w-8 h-8 bg-red-300 rounded-full flex items-center justify-center text-white font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8aGFwcHklMkJmYW1pbHklMkJtb3ZpbmclMkJpbnRvJTJCbmV3JTJCcmVudGFsJTJCYXBhcnRtZW50fGVufDB8fHx8MTc0NTg1MTkwM3ww&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Boy in black t-shirt hugging girl"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 class="font-bold text-black">Michael Rodriguez</h4>
                    <p class="text-gray-500 text-sm">Renting since 2022</p>
                  </div>
                </div>
                <p class="text-gray-600 italic mb-4">
                  "As a busy professional, I needed a hassle-free way to find a
                  new apartment. Rentivo's platform was perfect - detailed
                  listings, responsive support team, and a quick application
                  process. Highly recommended!"
                </p>
                <div class="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- CTA Section --> */}
          <div class="mt-16 text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-6 text-black">
              Ready to Find Your Perfect Home?
            </h3>
            <p class="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied renters who found their ideal home
              through Rentivo. Start your search today!
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#featured-properties"
                class="bg-red-300 hover:bg-red-400 text-white px-8 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium"
              >
                Browse Properties
              </a>
              <a
                href="#search"
                class="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-8 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium"
              >
                Advanced Search
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <script>
    // Smooth scrolling for anchor links
    document.addEventListener("DOMContentLoaded", function () {
      const scrollLinks = document.querySelectorAll('a[href^="#"]');

      scrollLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          const href = this.getAttribute("href");

          if (href !== "#") {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: "smooth",
              });
            }
          }
        });
      });
    });
  </script> */}
    </div>
  );
};

export default Benifits;
