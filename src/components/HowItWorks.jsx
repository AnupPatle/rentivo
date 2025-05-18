import React from "react";

const HowItWorks = () => {
  return (
    <div id="root">
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finding and renting your perfect home is easy with Rentivo. Our
              streamlined process makes it simple to discover, visit, and move
              into your new space.
            </p>
          </div>

          {/* <!-- Steps Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* <!-- Step 1 --> */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-red-400 text-2xl font-bold">1</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cGVyc29uJTJCc2VhcmNoaW5nJTJCZm9yJTJCcmVudGFsJTJCb24lMkJsYXB0b3B8ZW58MHx8fHwxNzQ1ODUxODE3fDA&ixlib=rb-4.0.3&q=80&w=400"
                alt="Person searching for rental on laptop"
                className="rounded-lg w-full h-40 object-cover mb-6"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-3 text-black">
                Search Properties
              </h3>
              <p className="text-gray-600">
                Browse our extensive collection of apartments, houses, and
                studios. Use filters to find your perfect match by location,
                price, and features.
              </p>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-red-400 text-2xl font-bold">2</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aG91c2UlMkJrZXlzJTJCaGFuZG92ZXIlMkJyZWFsJTJCZXN0YXRlfGVufDB8fHx8MTc0NTg1MTgxNnww&ixlib=rb-4.0.3&q=80&w=400"
                alt="Yellow House"
                className="rounded-lg w-full h-40 object-cover mb-6"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-3 text-black">
                Book A Viewing
              </h3>
              <p className="text-gray-600">
                Schedule in-person or virtual tours at your convenience. Our
                team is available 7 days a week to show you around your
                potential new home.
              </p>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-red-400 text-2xl font-bold">3</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8aGFwcHklMkJmYW1pbHklMkJtb3ZpbmclMkJpbnRvJTJCbmV3JTJCYXBhcnRtZW50fGVufDB8fHx8MTc0NTg1MTgxN3ww&ixlib=rb-4.0.3&q=80&w=400"
                alt="Man carrying girl in gray shirt"
                className="rounded-lg w-full h-40 object-cover mb-6"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-3 text-black">Move In</h3>
              <p className="text-gray-600">
                Complete the rental agreement, pay your deposit securely online,
                and get the keys to your new home. Our team ensures a smooth
                transition.
              </p>
            </div>
          </div>

          {/* <!-- Detailed Process --> */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* <!-- Image Side --> */}
              <div className="relative h-full min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cGVyc29uJTJCc2VhcmNoaW5nJTJCZm9yJTJCcmVudGFsJTJCb24lMkJsYXB0b3B8ZW58MHx8fHwxNzQ1ODUxODE3fDA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Person using laptop"
                  className="absolute w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* <!-- Content Side --> */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Our Rental Process
                </h3>

                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Search & Filter
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Use our advanced search tools to find properties that
                        match your requirements.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Schedule Viewings
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Book appointments online or contact our team to arrange
                        property viewings.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Application Process
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Complete your rental application online with our secure
                        and easy-to-use system.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Sign & Secure
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sign your lease agreement electronically and make secure
                        payments online.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Move In Day
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Receive your keys and move into your new home with full
                        support from our team.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Why Choose Us --> */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Why Choose Rentivo
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              We make finding and renting your ideal home a seamless experience
              with our dedicated service and innovative features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <!-- Feature 1 --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-black">
                  Wide Selection
                </h4>
                <p className="text-gray-600 text-sm">
                  Browse thousands of verified properties across various
                  neighborhoods and price ranges.
                </p>
              </div>

              {/* <!-- Feature 2 --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-400"
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
                <h4 className="font-semibold mb-2 text-black">
                  Verified Listings
                </h4>
                <p className="text-gray-600 text-sm">
                  All our properties are verified by our team to ensure accurate
                  information and quality standards.
                </p>
              </div>

              {/* <!-- Feature 3 --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-black">
                  Easy Application
                </h4>
                <p className="text-gray-600 text-sm">
                  Our streamlined application process can be completed online in
                  minutes with instant updates.
                </p>
              </div>

              {/* <!-- Feature 4 --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-black">24/7 Support</h4>
                <p className="text-gray-600 text-sm">
                  Our dedicated support team is available around the clock to
                  assist with any questions or issues.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- CTA --> */}
          <div className="bg-gradient-to-r from-red-200 to-red-100 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Ready to Find Your New Home?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Start your search today and discover the perfect rental property
              that meets all your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#search"
                className="bg-red-300 hover:bg-red-400 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
              >
                Start Searching
              </a>
              <a
                href="#featured-properties"
                className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
              >
                Browse Featured Properties
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

export default HowItWorks;
